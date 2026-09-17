# storeNotificationChannels

[All resources](../methods.md)

## list

List notification channels

[API reference](https://sell.app/docs/api/store-settings/list-notification-channels) · Effect: **read**

```kotlin
fun list(
        requestOptions: RequestOptions? = null
    ): SdkListNotificationChannelsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkListNotificationChannelsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeNotificationChannels.list()
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

Create a notification channel

[API reference](https://sell.app/docs/api/store-settings/create-notification-channel) · Effect: **consequential**

```kotlin
fun create(
        channel: CreateNotificationChannelRequestApplicationJsonPropertyChannel,
        requestOptions: RequestOptions? = null,
    ): SdkCreateNotificationChannelResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| channel | `CreateNotificationChannelRequestApplicationJsonPropertyChannel` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateNotificationChannelResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeNotificationChannels.create(channel = ObjectMapperFactory.read("{\"type\":\"email\",\"email\":\"maya@example.com\",\"allowed_notifications\":[]}", app.sell.sellapp.models.CreateNotificationChannelRequestApplicationJsonPropertyChannel::class.java))
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

## get

Retrieve a notification channel

[API reference](https://sell.app/docs/api/store-settings/manage-notification-channel) · Effect: **read**

```kotlin
fun get(
        notificationChannel: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetNotificationChannelResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| notificationChannel | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetNotificationChannelResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeNotificationChannels.get(notificationChannel = "string_example")
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

Update a notification channel

[API reference](https://sell.app/docs/api/store-settings/manage-notification-channel) · Effect: **consequential**

```kotlin
fun replace(
        notificationChannel: String,
        channel: ReplaceNotificationChannelRequestApplicationJsonPropertyChannel,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceNotificationChannelResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| notificationChannel | `String` | Yes |
| channel | `ReplaceNotificationChannelRequestApplicationJsonPropertyChannel` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceNotificationChannelResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeNotificationChannels.replace(notificationChannel = "string_example", channel = ObjectMapperFactory.read("{\"type\":\"email\",\"email\":\"maya@example.com\",\"allowed_notifications\":[]}", app.sell.sellapp.models.ReplaceNotificationChannelRequestApplicationJsonPropertyChannel::class.java))
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

Update a notification channel

[API reference](https://sell.app/docs/api/store-settings/manage-notification-channel) · Effect: **consequential**

```kotlin
fun update(
        notificationChannel: String,
        channel: UpdateNotificationChannelRequestApplicationJsonPropertyChannel,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateNotificationChannelResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| notificationChannel | `String` | Yes |
| channel | `UpdateNotificationChannelRequestApplicationJsonPropertyChannel` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateNotificationChannelResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeNotificationChannels.update(notificationChannel = "string_example", channel = ObjectMapperFactory.read("{\"allowed_notifications\":[]}", app.sell.sellapp.models.UpdateNotificationChannelRequestApplicationJsonPropertyChannel::class.java))
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

Delete a notification channel

[API reference](https://sell.app/docs/api/store-settings/manage-notification-channel) · Effect: **consequential**

```kotlin
fun delete(
        notificationChannel: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| notificationChannel | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeNotificationChannels.delete(notificationChannel = "string_example")
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

