import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, delimiter } from 'node:path';
import { createServer } from 'node:http';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

import { inflateRawSync } from 'node:zlib';
function readArchive(file, maxEntries = 10000) {
  assert(Number.isSafeInteger(maxEntries) && maxEntries > 0 && maxEntries <= 65535, 'Invalid ZIP entry limit');
  const bytes = readFileSync(file);
  assert(bytes.length <= 256 * 1024 * 1024, 'Archive is unexpectedly large');
  const footer = bytes.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
  assert(footer >= 0 && footer + 22 <= bytes.length, 'Missing ZIP directory');
  const count = bytes.readUInt16LE(footer + 10);
  assert(count < maxEntries, 'Unexpected ZIP entry count');
  const files = new Map();
  let expandedSize = 0;
  let offset = bytes.readUInt32LE(footer + 16);
  for (let index = 0; index < count; index++) {
    assert.equal(bytes.readUInt32LE(offset), 0x02014b50, 'Invalid ZIP directory entry');
    const size = bytes.readUInt32LE(offset + 20), method = bytes.readUInt16LE(offset + 10);
    const nameSize = bytes.readUInt16LE(offset + 28), extraSize = bytes.readUInt16LE(offset + 30), commentSize = bytes.readUInt16LE(offset + 32);
    const name = bytes.subarray(offset + 46, offset + 46 + nameSize).toString('utf8');
    assert(!files.has(name) && !name.startsWith('/') && !name.split('/').includes('..'), 'Invalid archive path');
    const local = bytes.readUInt32LE(offset + 42);
    assert.equal(bytes.readUInt32LE(local), 0x04034b50, 'Invalid ZIP local entry');
    const start = local + 30 + bytes.readUInt16LE(local + 26) + bytes.readUInt16LE(local + 28);
    assert(start + size <= bytes.length && (method === 0 || method === 8), 'Unsupported ZIP entry');
    const compressed = bytes.subarray(start, start + size);
    const contents = method === 0 ? compressed : inflateRawSync(compressed, { maxOutputLength: 32 * 1024 * 1024 });
    expandedSize += contents.length;
    assert(expandedSize <= 256 * 1024 * 1024, 'Expanded archive is unexpectedly large');
    files.set(name, contents);
    offset += 46 + nameSize + extraSize + commentSize;
  }
  return files;
}

const execute = promisify(execFile);
const libraries = resolve('examples/build/install/sellapp-onboarding/lib');
const archive = readArchive(resolve(libraries, 'sellapp-0.1.1.jar'));
for (const name of ['README.md', 'LICENSE.txt', 'NOTICE.txt', 'docs/usage.md', 'docs/methods.md', 'examples/README.md', 'examples/src/main/kotlin/Onboarding.kt']) assert(archive.has('META-INF/sellapp/' + name), 'Missing JAR documentation: ' + name);
assert(archive.get('META-INF/sellapp/README.md').toString().startsWith('# SellApp Kotlin SDK'));
for (const name of archive.keys()) assert(!/(^|\/)(test|tests|testdata|fixtures|build)(\/|$)/.test(name), 'Unwanted JAR content: ' + name);
assert(!archive.has('sellapp/examples/OnboardingKt.class'), 'Example classes must not be included in the SDK JAR');
const pom = readFileSync('build/publications/maven/pom-default.xml', 'utf8');
for (const text of ['<groupId>app.sell</groupId>', '<artifactId>sellapp</artifactId>', '<url>https://sell.app/docs/api</url>', '<licenses>', '<developers>', '<connection>scm:git:https://github.com/sellapp/sellapp-kotlin.git</connection>', '<tag>v0.1.1</tag>']) assert(pom.includes(text), 'Missing POM metadata: ' + text);
const sources = readArchive(resolve('build/libs/sellapp-0.1.1-sources.jar'));
assert(sources.has('app/sell/sellapp/SellApp.kt'), 'Missing SDK sources');
const reference = readArchive(resolve('build/libs/sellapp-0.1.1-javadoc.jar'), 30000);
assert(reference.has('index.html') && [...reference.keys()].some((name) => name.endsWith('/-sell-app/index.html')), 'Missing generated Kotlin API documentation');
const classpath = readdirSync(libraries).filter((name) => name.endsWith('.jar')).map((name) => resolve(libraries, name)).join(delimiter);
let mode = 'first';
let calls = 0;
const failures = [];
const server = createServer((request, response) => {
  try {
    const url = new URL(request.url, 'http://127.0.0.1');
    assert.equal(url.pathname, '/v2/products');
    assert.equal(url.searchParams.get('limit'), '1');
    assert.equal(request.method, 'GET');
    assert.equal(request.headers.authorization, 'Bearer test_key');
    assert.equal(request.headers['x-store'], 'test_store');
    calls++;
    response.setHeader('Content-Type', 'application/json');
    if (mode === 'error') { response.writeHead(403); response.end(JSON.stringify({message:'Forbidden',request_id:'req_example'})); return; }
    if (mode === 'pagination') { assert.equal(url.searchParams.get('limit'), '1'); const second = url.searchParams.get('page') === '2'; response.end(JSON.stringify({data:[],links:{next:second?null:'?page=2'},meta:{current_page:second?2:1,last_page:2}})); return; }
    response.end(JSON.stringify({data:mode === 'empty' ? [] : [{"id":120,"title":"Design kit","slug":"design-kit","description":"<p>Templates for your next project.</p>","images":[{"path":"store/1/listings/NM6TBKIMzpFJq1MKTV24oMJ1W4UrKCo7NS98nt4K.png","metadata":{"size":39289,"filename":"NM6TBKIMzpFJq1MKTV24oMJ1W4UrKCo7NS98nt4K","extension":"png","mime_type":"image/png"}},{"path":"store/1/listings/ov6XMb68tRr80zl7sqfN1or7xfqqH5WbZygDEQ8X.png","metadata":{"size":422373,"filename":"ov6XMb68tRr80zl7sqfN1or7xfqqH5WbZygDEQ8X","extension":"png","mime_type":"image/png"}}],"order":1,"visibility":"PUBLIC","delivery_text":"Thanks for your purchase. Your download is ready.","additional_information":[{"required":true,"key":"3aecffd000e00e2211e94558007ffc37","type":"checkbox","label":"Do you agree to the purchase terms?"}],"other_settings":{"faq":[{"answer":"Yes. Adapt the included templates to your project.","question":"Can I use these templates for my own project?"}],"video_url":"https://example.com/launch-lab/product-tour","redirect_url":"https://example.com/post-launch?customer_email=[customer_email]&order_id=[order_id]","product_title":"Design kit","product_description":"Templates for your next project."},"deleted_at":null,"created_at":"2026-08-24T10:00:00.000000Z","updated_at":"2026-08-24T10:00:00.000000Z","store_id":1,"category_id":null,"section_id":null,"section_order":null,"is_discoverable":true,"variants":[{"id":4321,"title":"Design kit"}],"url":"https://launch-lab.sell.app/product/design-kit"}],links:{next:null},meta:{current_page:1,last_page:1}}));
  } catch (error) { failures.push(error); response.writeHead(500); response.end('{}'); }
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
try {
  for (mode of ['first', 'suspend', 'empty', 'pagination', 'error']) {
    calls = 0;
    const env = {...process.env, SELLAPP_API_KEY:'test_key', SELLAPP_STORE:'test_store', SELLAPP_API_BASE_URL:'http://127.0.0.1:' + server.address().port};
    const args = ['-cp', classpath, 'sellapp.examples.OnboardingKt', ...(mode === 'suspend' || mode === 'pagination' ? [mode] : [])];
    let result;
    try { result = {...await execute('java', args, {env, timeout:20000}), code:0}; }
    catch (error) { if (typeof error.code !== 'number') throw error; result = error; }
    assert.equal(result.code, mode === 'error' ? 1 : 0, result.stderr);
    assert.equal(calls, mode === 'pagination' ? 2 : 1);
    if (mode === 'error') assert(result.stderr.includes('req_example'));
    else if (mode === 'pagination') assert.equal(result.stdout.trim(), 'No products yet.');
    else assert.equal(result.stdout.trim(), mode === 'empty' ? 'No products yet. Your connection is ready.' : '120: Design kit');
    assert.equal(failures.length, 0, failures.map(String).join('\n'));
    console.log('Packaged Kotlin example ' + mode + ': PASS');
  }
} finally { await new Promise((done) => server.close(done)); }
