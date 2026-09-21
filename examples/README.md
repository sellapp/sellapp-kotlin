# Kotlin examples

The catalog, checkout, and upload workflow helpers change real data when given a live client. Their native documentation tests use fixture transports and dummy credentials. Catalog steps pass the created product ID into retrieval and update; checkout retrieves the order before starting its provider checkout; upload retrieves the file using the returned file ID. Do not retry a lost checkout response without first checking the order. Use a separate client for each store's credentials.


One complete program, three things to try: list one product, make the same call with a coroutine, and iterate a bounded product listing. The project uses the released SDK from Maven Central.

Set `SELLAPP_API_KEY`, `SELLAPP_STORE`, and `SELLAPP_API_BASE_URL` explicitly. Choose `https://sell.app/api` for your real store data; the three executable modes are read-only. Run these commands from this examples directory:

```sh
sh gradlew run
sh gradlew run --args=suspend
sh gradlew run --args=pagination
```

The default and suspend modes print one product or confirm an empty store. Pagination mode follows validated page links and prints at most 30 products.

Unconfigured executable runs stop before sending a request. SDK contributors can test these functions against a local server from the SDK root with `sh gradlew test --tests '*DocumentationExamplesTest'`. To run this project against a source checkout, set `SELLAPP_KOTLIN_SOURCE=..` before invoking Gradle.

[Back to onboarding](../README.md)
