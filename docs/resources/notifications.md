# notifications

[All resources](../methods.md)

## list

List notifications

[API reference](https://sell.app/docs/api/notifications/list-notifications) · Effect: **read**

```kotlin
fun list(
        unseenOnly: Boolean? = null,
        limit: Int? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListNotificationsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| unseenOnly | `Boolean?` | No |
| limit | `Int?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListNotificationsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.notifications.list()
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

## mark

Mark notifications seen

[API reference](https://sell.app/docs/api/notifications/mark-notifications-seen) · Effect: **consequential**

```kotlin
fun mark(
        notificationIds: List<Long>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<MarkNotificationsSeenResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| notificationIds | `List<Long>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<MarkNotificationsSeenResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.notifications.mark(notificationIds = listOf(9182L))
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

