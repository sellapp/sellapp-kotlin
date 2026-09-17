# Kotlin examples

The catalog, checkout, and upload workflow helpers change real data when given a live client. Their native documentation tests use fixture transports and dummy credentials. Catalog steps pass the created product ID into retrieval and update; checkout retrieves the order before starting its provider checkout; upload retrieves the file using the returned file ID. Do not retry a lost checkout response without first checking the order. Use a separate client for each store's credentials.


One complete program, three things to try: list one product, make the same call with a coroutine, and iterate a bounded product listing. The composite build connects it to your local SDK checkout.

Set `SELLAPP_API_KEY`, `SELLAPP_STORE`, and `SELLAPP_API_BASE_URL` explicitly. Choose `https://sell.app/api` for your real store data; every example operation is read-only. Run these commands from the SDK root:

```sh
sh examples/gradlew run
sh examples/gradlew run --args=suspend
sh examples/gradlew run --args=pagination
sh gradlew test --tests '*DocumentationExamplesTest'
```

The default and suspend modes print one product or confirm an empty store. Pagination mode follows validated page links and prints at most 30 products.

The last command tests those same functions against a local server with dummy credentials, including multi-page pagination. Unconfigured executable runs stop before sending a request.

[Back to onboarding](../README.md)
