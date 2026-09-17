# webhookChannels

[All resources](../methods.md)

## list

List webhook channels

[API reference](https://sell.app/docs/api/webhook-channels/list-webhook-channels) · Effect: **read**

```kotlin
fun list(
        page: Long? = null,
        limit: Int? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListWebhookChannelsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| page | `Long?` | No |
| limit | `Int?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListWebhookChannelsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.webhookChannels.list()
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": []
  },
  {
    "oauthAccessToken": [
      "admin"
    ],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## create

Create a webhook channel

[API reference](https://sell.app/docs/api/webhook-channels/create-a-webhook-channel) · Effect: **consequential**

```kotlin
fun create(
        url: String,
        allowedNotifications: List<Event>,
        name: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateWebhookChannelResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| url | `String` | Yes |
| allowedNotifications | `List<Event>` | Yes |
| name | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateWebhookChannelResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.webhookChannels.create(name = "Ship It webhook", url = "https://example.com/webhooks/ship-it", allowedNotifications = listOf(app.sell.sellapp.types.Event("order.created"), app.sell.sellapp.types.Event("order.paid")))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": []
  },
  {
    "oauthAccessToken": [
      "admin"
    ],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 201, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## search

Search webhook channels

[API reference](https://sell.app/docs/api/webhook-channels/search-webhook-channels) · Effect: **read**

```kotlin
fun search(
        search: SearchWebhookChannelsRequestApplicationJsonPropertySearch? = null,
        event: Event? = null,
        page: Long? = null,
        limit: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SearchWebhookChannelsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| search | `SearchWebhookChannelsRequestApplicationJsonPropertySearch?` | No |
| event | `Event?` | No |
| page | `Long?` | No |
| limit | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SearchWebhookChannelsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.webhookChannels.search(search = ObjectMapperFactory.read("{\"value\":\"orders\"}", app.sell.sellapp.models.SearchWebhookChannelsRequestApplicationJsonPropertySearch::class.java), event = app.sell.sellapp.types.Event("order.paid"))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": []
  },
  {
    "oauthAccessToken": [
      "admin"
    ],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## rotate

Rotate the webhook signing secret

[API reference](https://sell.app/docs/api/webhook-channels/rotate-the-signing-secret) · Effect: **consequential**

```kotlin
fun rotate(
        signingSecret: String,
        requestOptions: RequestOptions? = null,
    ): SdkRotateWebhookSigningSecretResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| signingSecret | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkRotateWebhookSigningSecretResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.webhookChannels.rotate(signingSecret = "replace-with-a-random-secret-at-least-32-characters-long")
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": []
  },
  {
    "oauthAccessToken": [
      "admin"
    ],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## get

Retrieve a webhook channel

[API reference](https://sell.app/docs/api/webhook-channels/retrieve-a-webhook-channel) · Effect: **read**

```kotlin
fun get(
        webhookChannel: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetWebhookChannelResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| webhookChannel | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetWebhookChannelResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.webhookChannels.get(webhookChannel = "0f33d01f-f9f8-45e8-80c8-7734d057196d")
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": []
  },
  {
    "oauthAccessToken": [
      "admin"
    ],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## replace

Replace a webhook channel

[API reference](https://sell.app/docs/api/webhook-channels/replace-a-webhook-channel) · Effect: **consequential**

```kotlin
fun replace(
        webhookChannel: String,
        name: String?,
        url: String,
        allowedNotifications: List<Event>,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceWebhookChannelResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| webhookChannel | `String` | Yes |
| name | `String?` | No |
| url | `String` | Yes |
| allowedNotifications | `List<Event>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceWebhookChannelResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.webhookChannels.replace(webhookChannel = "0f33d01f-f9f8-45e8-80c8-7734d057196d", name = "Primary Ship It webhook", url = "https://example.com/webhooks/ship-it", allowedNotifications = listOf(app.sell.sellapp.types.Event("order.paid")))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": []
  },
  {
    "oauthAccessToken": [
      "admin"
    ],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## update

Update a webhook channel

[API reference](https://sell.app/docs/api/webhook-channels/update-a-webhook-channel) · Effect: **consequential**

```kotlin
fun update(
        webhookChannel: String,
        name: PatchField<String?> = PatchField.Absent,
        url: PatchField<String> = PatchField.Absent,
        allowedNotifications: PatchField<List<Event>> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateWebhookChannelResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| webhookChannel | `String` | Yes |
| name | `PatchField<String?>` | No |
| url | `PatchField<String>` | No |
| allowedNotifications | `PatchField<List<Event>>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateWebhookChannelResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.webhookChannels.update(webhookChannel = "0f33d01f-f9f8-45e8-80c8-7734d057196d", name = app.sell.sellapp.common.http.PatchField.Present("Primary Ship It webhook"), allowedNotifications = app.sell.sellapp.common.http.PatchField.Present(listOf(app.sell.sellapp.types.Event("order.paid"))))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": []
  },
  {
    "oauthAccessToken": [
      "admin"
    ],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## delete

Delete a webhook channel

[API reference](https://sell.app/docs/api/webhook-channels/delete-a-webhook-channel) · Effect: **consequential**

```kotlin
fun delete(
        webhookChannel: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| webhookChannel | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.webhookChannels.delete(webhookChannel = "0f33d01f-f9f8-45e8-80c8-7734d057196d")
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": []
  },
  {
    "oauthAccessToken": [
      "admin"
    ],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## send

Send a test webhook

[API reference](https://sell.app/docs/api/webhook-channels/send-a-test-webhook) · Effect: **consequential**

```kotlin
fun send(
        webhookChannel: String,
        event: Event,
        requestOptions: RequestOptions? = null,
    ): SdkSendTestWebhookResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| webhookChannel | `String` | Yes |
| event | `Event` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkSendTestWebhookResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.webhookChannels.send(webhookChannel = "0f33d01f-f9f8-45e8-80c8-7734d057196d", event = app.sell.sellapp.types.Event("order.created"))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": []
  },
  {
    "oauthAccessToken": [
      "admin"
    ],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

