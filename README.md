# SellApp Kotlin SDK

Give your Kotlin/JVM application a connection to your SellApp store. The SDK turns method calls into API requests and responses into Kotlin objects, with blocking and coroutine methods to fit your application.

Start by listing one product. No product ID to look up and no data to change; an empty store is a successful result too.

Already know your way around? Jump to [configuration](https://github.com/sellapp/sellapp-kotlin/blob/main/docs/usage.md#client-configuration), [usage details](https://github.com/sellapp/sellapp-kotlin/blob/main/docs/usage.md), or the [method index](https://github.com/sellapp/sellapp-kotlin/blob/main/docs/methods.md).

## Install from source

**Use the source checkout for now.** This SDK is pre-release. Its intended Maven coordinate—the package name Gradle uses—is `app.sell:sellapp`, but a published SellApp artifact has not yet been verified. The repository is private, so you need access to clone it.

The build targets Java 17 and uses Kotlin 2.1.20 with the included Gradle 8.9 launcher. Clone the SDK and run its build:

```sh
git clone https://github.com/sellapp/sellapp-kotlin.git
cd sellapp-kotlin
sh gradlew build
```

The included [example project](https://github.com/sellapp/sellapp-kotlin/blob/main/examples/build.gradle.kts) is already wired to your local SDK checkout through a Gradle composite build. You can run it without creating another project.

To connect your own Gradle project, add `includeBuild("../sellapp-kotlin")` to `settings.gradle.kts` and this dependency to `build.gradle.kts`. Adjust the path if the SDK checkout lives elsewhere:

```kotlin
dependencies {
    implementation("app.sell:sellapp:0.1.1")
}
```

Gradle will resolve that dependency from the local composite build. **For later:** once publication is verified, the same dependency is planned to work with `mavenCentral()` and without `includeBuild`. Until then, keep the local build in place.

## Your first request

Your API key identifies you, and your store slug selects the store. For a storefront at `launch-lab.sell.app`, the slug is `launch-lab`. Give the API key the `listing` ability. The [authentication guide](https://sell.app/docs/api/authentication) helps you get both ready.

Put them in `SELLAPP_API_KEY` and `SELLAPP_STORE`. These environment variables are settings your terminal passes to the application, so your key can stay out of source files and Git history. From the SDK checkout, replace the fictitious values below and run these commands in a Bash-compatible shell:

```sh
export SELLAPP_API_KEY=sk_example_replace_me
export SELLAPP_STORE=launch-lab
export SELLAPP_API_BASE_URL=https://sell.app/api
sh examples/gradlew run
```

You should see one product's ID and title, or a message confirming the store is empty. This reads your catalog without changing it. The example requires a URL so you choose the destination before it sends a request; `SELLAPP_API_BASE_URL` is an example setting, not an SDK environment setting.

Here's the complete program in examples/src/main/kotlin/Onboarding.kt. Start with firstRequest: products.list(limit = 1).data contains the first page of products. The other functions show the coroutine version, error handling, and bounded product pagination.

```kotlin
package sellapp.examples

import app.sell.sellapp.SellApp
import app.sell.sellapp.common.exceptions.SellAppApiException
import app.sell.sellapp.common.exceptions.SellAppSerializationException
import app.sell.sellapp.common.exceptions.SellAppTimeoutException
import kotlinx.coroutines.runBlocking
import okhttp3.OkHttpClient
import app.sell.sellapp.types.CatalogVisibility
import app.sell.sellapp.common.http.PatchField

fun firstRequest(client: SellApp): String {
    val product = client.products.list(limit = 1).data.firstOrNull()
        ?: return "No products yet. Your connection is ready."
    return "${product.id}: ${product.title}"
}

suspend fun firstRequestSuspend(client: SellApp): String {
    val product = client.products.listSuspend(limit = 1).data.firstOrNull()
        ?: return "No products yet. Your connection is ready."
    return "${product.id}: ${product.title}"
}

fun inspectProducts(client: SellApp): String {
    return try {
        client.products.list(limit = 1).take(30).joinToString("\n") { "${it.id}: ${it.title}" }.ifEmpty { "No products yet." }
    } catch (error: SellAppSerializationException) {
        "Product pages could not be decoded safely: ${error.message}."
    }
}

fun catalogWorkflow(client: SellApp): Long {
    // This changes real catalog data outside the local fixture test.
    val created = client.products.create(title = "Design kit", description = "Templates for your next project.", visibility = CatalogVisibility.Hidden)
    val product = client.products.get(created.data.id.toString())
    return client.products.update(product.data.id.toString(), title = PatchField.Present("Design kit revised")).data.id
}

suspend fun catalogWorkflowSuspend(client: SellApp): Long {
    val created = client.products.createSuspend(title = "Design kit", description = "Templates for your next project.", visibility = CatalogVisibility.Hidden)
    val product = client.products.getSuspend(created.data.id.toString())
    return client.products.updateSuspend(product.data.id.toString(), title = PatchField.Present("Design kit revised")).data.id
}

fun checkout(client: SellApp, orderId: String): Long {
    // Creates a provider checkout; inspect the order before retrying a lost response.
    val order = client.orders.get(orderId)
    return client.orders.createCheckout(order.data.id.toString()).data.id
}

fun upload(client: SellApp, productId: String, variantId: String, file: ByteArray): Long {
    val uploaded = client.variantDeliverableFiles.upload(productId, variantId, file)
    return client.variantDeliverableFiles.get(productId, variantId, uploaded.data.id.toString()).data.id
}

suspend fun checkoutSuspend(client: SellApp, orderId: String): Long {
    val order = client.orders.getSuspend(orderId)
    return client.orders.createCheckoutSuspend(order.data.id.toString()).data.id
}

suspend fun uploadSuspend(client: SellApp, productId: String, variantId: String, file: ByteArray): Long {
    val uploaded = client.variantDeliverableFiles.uploadSuspend(productId, variantId, file)
    return client.variantDeliverableFiles.getSuspend(productId, variantId, uploaded.data.id.toString()).data.id
}

fun describeError(error: Exception): String = when (error) {
    is SellAppApiException -> "API status ${error.status}: ${error.message} (request ${error.requestId ?: "unavailable"})"
    is SellAppTimeoutException -> "Request timed out: ${error.message}"
    else -> "Request failed: ${error.message}"
}

fun main(args: Array<String>) {
    fun required(name: String): String = System.getenv(name)?.takeIf { it.isNotBlank() }
        ?: error("Set $name before running this example.")
    val http = OkHttpClient()
    try {
        val client = SellApp(
            apiKey = required("SELLAPP_API_KEY"),
            store = required("SELLAPP_STORE"),
            baseUrl = required("SELLAPP_API_BASE_URL"),
            maxRetries = 0,
            httpClient = http,
        )
        val result = when (args.firstOrNull()) {
            "suspend" -> runBlocking { firstRequestSuspend(client) }
            "pagination" -> inspectProducts(client)
            else -> firstRequest(client)
        }
        println(result)
    } catch (error: Exception) {
        System.err.println(describeError(error))
        throw error
    } finally {
        http.dispatcher.executorService.shutdown()
        http.connectionPool.evictAll()
        http.cache?.close()
    }
}
```

## Account access and first-store setup

Create a user-owned key in [API keys](https://sell.app/user/api-tokens), even
before you have a store. Enable `account:read` for identity, store discovery and
permission inspection, and `stores:create` separately for store creation.
Identity, discovery, store detail by ID and creation omit `X-STORE`; permission
inspection and business requests select a store explicitly.

An unrestricted key covers current and future accessible stores. A selected-store
key covers only its fixed list; an empty list covers none. Membership and role
changes still apply. Selected-store keys cannot create stores. Existing keys do
not gain abilities automatically; `*` satisfies the new abilities while retaining
membership, role and restriction checks.

The [account guide](https://sell.app/docs/api/authentication#discover-your-account-before-selecting-a-store)
shows first-store creation, required idempotency keys, and bounded reads across
several stores with partial failures. Creation returns an ID and slug; use the
slug for subsequent product requests. Find your language's methods in the
[resource reference](https://github.com/sellapp/sellapp-kotlin/blob/main/docs/methods.md). CLI and MCP connections retain browser OAuth.

## If the request fails

| Result | Next step |
| --- | --- |
| Empty product list | The read succeeded. Create a product when you are ready. |
| 401 | Check the selected credential and whether it has expired or been revoked. |
| 403 | Check the key's listing ability, selected-store restrictions and the account's current store permissions. Official CLI OAuth also requires its active grant. |
| 400 with a missing-store message | Set SELLAPP_STORE to an authorized store slug. |
| 429 | Follow Retry-After and the SDK's documented retry behavior. |

Keep the request ID when reporting an API failure. Never include credentials.

## Three useful next actions

1. [Create and edit a product](https://github.com/sellapp/sellapp-kotlin/blob/main/docs/resources/products.md): exact signatures and complete examples.
2. [Read orders or create a checkout](https://github.com/sellapp/sellapp-kotlin/blob/main/docs/resources/orders.md): inspect permissions and effects before changing a purchase.
3. [Read more than one page](https://github.com/sellapp/sellapp-kotlin/blob/main/docs/usage.md): pagination, request controls, errors, and retry behavior.

## Reference and examples

- [Resource reference](https://github.com/sellapp/sellapp-kotlin/blob/main/docs/methods.md)
- [Runnable examples](https://github.com/sellapp/sellapp-kotlin/blob/main/examples/README.md)
- [API documentation](https://sell.app/docs/api)

## Support and releases

Find available packages and installation instructions in the [SDK guide](https://sell.app/docs/api/sdks).
[Report an SDK issue](https://github.com/sellapp/sellapp-kotlin/issues).
Include the SDK version, runtime version, and a redacted reproduction.
Licensed under [MIT](https://github.com/sellapp/sellapp-kotlin/blob/main/LICENSE.txt); see [third-party notices](https://github.com/sellapp/sellapp-kotlin/blob/main/NOTICE.txt).
