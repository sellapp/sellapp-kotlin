import fs from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const directory = path.resolve(process.argv[2]);
const target = path.join(directory, 'examples/src/main/kotlin/operation_samples');
await fs.mkdir(target, { recursive: true });
const snippets = (
  await Promise.all(
    ['operation-examples.json', 'operation-variants.json'].map(async (file) =>
      JSON.parse(await fs.readFile(path.join(directory, 'docs', file), 'utf8')),
    ),
  )
).flat();
for (const [index, snippet] of snippets.entries()) {
  await fs.writeFile(
    path.join(target, `Example${index}.kt`),
    `package operation_samples.example${index}\n\n${snippet.content}`,
  );
}
const result = spawnSync('bash', ['examples/gradlew', 'compileKotlin', '--no-daemon', '--max-workers=1'], {
  cwd: directory,
  encoding: 'utf8',
  maxBuffer: 20 * 1024 * 1024,
});
if (result.status !== 0) {
  await fs.mkdir(path.resolve(import.meta.dirname, '../reports'), { recursive: true });
  await fs.writeFile(
    path.resolve(import.meta.dirname, '../reports/kotlin-snippet-errors.log'),
    result.stdout + result.stderr,
  );
  process.stderr.write((result.stdout + result.stderr).slice(-10000));
  process.exit(result.status ?? 1);
}
await fs.rm(target, { recursive: true });
console.log(`Compiled ${snippets.length} Kotlin operation examples.`);
