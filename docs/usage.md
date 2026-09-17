# Kotlin usage notes

Your store answered the first request. Here's what to expect as you add more calls: how they wait, how they fail, and where the current SDK needs extra care.

## Blocking and coroutine calls

Methods without a suffix block the calling thread. Suspend variants use the client cancellation bridge; coroutine cancellation calls cancel() on the active OkHttp call.

`SellApp` implements `AutoCloseable`. Closing it releases only an internally created OkHttp client. A supplied client and its pool remain caller-owned.

## Timeouts, retries, and idempotency

Timeouts are whole-call seconds, 60 by default per attempt. `RequestOptions(timeoutSeconds = ..., maxRetries = ..., idempotencyKey = ..., headers = ...)` offers per-request overrides. Negative retry counts are rejected.

The runtime retries 408, 409, 429, all 5xx, socket timeouts, and other transport exceptions for safe methods or declared-idempotent operations with a nonblank key. The default is 3 retries. Backoff adds bounded exponential jitter. Valid Retry-After values are capped at 30 seconds; cancellation interrupts waits.

An idempotency key identifies one intended change, allowing an API operation that supports it to recognize a repeated request. Use a nonempty key only on operations whose API contract supports it; the SDK does not generate one. Reuse the key for retries of one logical change.

## Errors and metadata

`SellAppApiException` and every status-specific subtype expose `type`, `code`, `message`, `status`, `param`, `requestId`, `docsUrl`, response headers, and the raw error body. Request IDs use the body first, then `x-request-id`.

`SellAppConfigurationException`, `SellAppTransportException`, `SellAppTimeoutException`, `SellAppSerializationException`, and its `SellAppSchemaValidationException` subtype distinguish other failure categories. The timeout subtype is used for socket timeouts; other I/O failures can be reported as transport failures.

## Product pagination

The product API uses page numbers and next links such as `?page=2`. `products.list(...)` returns an iterable page that lazily follows cursor metadata or a validated positive numeric page value. The pager retains caller options, detects cycles, and rejects links that change origin, credentials, fragments, or path. The [example](../examples/src/main/kotlin/Onboarding.kt) limits iteration to 30 products so sample code remains bounded.

[Back to onboarding](../README.md)

## Client configuration

Configure the client with named arguments: `SellApp(apiKey, store, baseUrl, timeoutSeconds, maxRetries, httpClient)`. Null credentials fall back to environment values; explicit non-null values win. Blank values fail before an authenticated request is sent. The SDK selects credentials for each operation. API-key v2 operations can omit `store`; legacy operations require it. Use `SellApp(accessToken = token, store = slug)` for OAuth store operations; this suppresses the API-key environment fallback. Set `customerSession` on the client or `RequestOptions` for customer-portal calls. Anonymous operations send no credentials.

OAuth protocol operations use `https://sell.app`; a custom `baseUrl` also sets their origin. Token and consent requests use URL-encoded forms. Redirects are returned without following them, including with an injected OkHttp client. Inspect response status and `Location` through a raw-response method before downloading without API credentials. Protocol exchanges, one-time customer-session creation, and customer-session calls are never replayed automatically.

| Argument | Behavior |
| --- | --- |
| `baseUrl` | Defaults to `https://sell.app/api` |
| `timeoutSeconds` | A `Long` in seconds; default 60 per call attempt |
| `maxRetries` | Default 3 retries after the initial attempt; 0 disables retries |
| `httpClient` | Optional `okhttp3.OkHttpClient` |

Choose the call style that fits your application. storeSettings.get() blocks; getSuspend() provides a coroutine variant. Suspend variants run interruptibly on Dispatchers.IO. SellApp implements AutoCloseable; closing it releases only an internally created OkHttp client.

## Listing and failures

The API splits long product lists into pages. A returned page is iterable and follows cursor metadata or validated numeric links.next page links. Cross-origin, path-changing, malformed, duplicate, and cyclic links are rejected.

The example's pagination mode reads at most 30 products across pages. See docs/usage.md for retry, cancellation, and pagination safety details.

When a request fails, the error handler prints its status, message, and request ID. Status-specific exceptions retain the complete API metadata.

Ready to try the other modes? Run sh examples/gradlew run --args=suspend for the coroutine version, or --args=pagination to follow a bounded product listing.
