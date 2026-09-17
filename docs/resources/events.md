# events

[All resources](../methods.md)

## listIntegrationEvents

List integration events

[API reference](https://sell.app/docs/api/events) · Effect: **read**

```kotlin
fun listIntegrationEvents(
        cursor: String? = null,
        limit: Int? = null,
        type: String? = null,
        subjectType: String? = null,
        subjectId: String? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListIntegrationEventsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| cursor | `String?` | No |
| limit | `Int?` | No |
| type | `String?` | No |
| subjectType | `String?` | No |
| subjectId | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListIntegrationEventsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.events.listIntegrationEvents()
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## listOrderEvents

List order events

[API reference](https://sell.app/docs/api/events) · Effect: **read**

```kotlin
fun listOrderEvents(
        order: String,
        cursor: String? = null,
        limit: Int? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListOrderEventsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `String` | Yes |
| cursor | `String?` | No |
| limit | `Int?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListOrderEventsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.events.listOrderEvents(order = "42")
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

