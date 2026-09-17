# ticketsMessages

[All resources](../methods.md)

## list

List all ticket messages

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```kotlin
fun list(
        ticket: String,
        limit: Int? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListTicketMessagesResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `String` | Yes |
| limit | `Int?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListTicketMessagesResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.ticketsMessages.list(ticket = "1")
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## reply

Reply to ticket

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```kotlin
fun reply(
        ticket: String,
        content: String,
        requestOptions: RequestOptions? = null,
    ): SdkReplyToTicketResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `String` | Yes |
| content | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplyToTicketResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.ticketsMessages.reply(ticket = "1", content = "You can choose from the payment methods shown at checkout.")
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 201, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## get

Retrieve specific ticket message

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```kotlin
fun get(
        ticket: String,
        message: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetTicketMessageResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `String` | Yes |
| message | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetTicketMessageResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.ticketsMessages.get(ticket = "1", message = "2")
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## search

Search ticket messages

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```kotlin
fun search(
        ticket: String,
        filters: List<SearchTicketMessagesRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<SearchTicketMessagesRequestApplicationJsonPropertySortItem>? = null,
        search: SearchTicketMessagesRequestApplicationJsonPropertySearch? = null,
        includes: List<SearchTicketMessagesRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SearchTicketMessagesResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `String` | Yes |
| filters | `List<SearchTicketMessagesRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<SearchTicketMessagesRequestApplicationJsonPropertySortItem>?` | No |
| search | `SearchTicketMessagesRequestApplicationJsonPropertySearch?` | No |
| includes | `List<SearchTicketMessagesRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SearchTicketMessagesResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.ticketsMessages.search(ticket = "1", filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":1}", app.sell.sellapp.models.SearchTicketMessagesRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.SearchTicketMessagesRequestApplicationJsonPropertySortItem::class.java)))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## v2ListTicketMessages

List all ticket messages

[API reference](https://sell.app/docs/api/tickets/list-all-ticket-messages) · Effect: **read**

```kotlin
fun v2ListTicketMessages(
        ticket: String,
        limit: Long? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<V2ListTicketMessagesResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `String` | Yes |
| limit | `Long?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<V2ListTicketMessagesResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.ticketsMessages.v2ListTicketMessages(ticket = "1")
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

## v2ReplyToTicket

Reply to ticket

[API reference](https://sell.app/docs/api/tickets/reply-to-ticket) · Effect: **consequential**

```kotlin
fun v2ReplyToTicket(
        ticket: String,
        content: String,
        requestOptions: RequestOptions? = null,
    ): SdkV2ReplyToTicketResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `String` | Yes |
| content | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2ReplyToTicketResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.ticketsMessages.v2ReplyToTicket(ticket = "1", content = "You can choose from the payment methods shown at checkout.")
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

Documented HTTP responses: 201, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## v2SearchTicketMessages

Search ticket messages

[API reference](https://sell.app/docs/api/tickets/search-ticket-messages) · Effect: **read**

```kotlin
fun v2SearchTicketMessages(
        ticket: String,
        filters: List<V2SearchTicketMessagesRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<V2SearchTicketMessagesRequestApplicationJsonPropertySortItem>? = null,
        search: V2SearchTicketMessagesRequestApplicationJsonPropertySearch? = null,
        includes: List<V2SearchTicketMessagesRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<V2SearchTicketMessagesResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `String` | Yes |
| filters | `List<V2SearchTicketMessagesRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<V2SearchTicketMessagesRequestApplicationJsonPropertySortItem>?` | No |
| search | `V2SearchTicketMessagesRequestApplicationJsonPropertySearch?` | No |
| includes | `List<V2SearchTicketMessagesRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<V2SearchTicketMessagesResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.ticketsMessages.v2SearchTicketMessages(ticket = "1", filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":1}", app.sell.sellapp.models.V2SearchTicketMessagesRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.V2SearchTicketMessagesRequestApplicationJsonPropertySortItem::class.java)))
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

## v2GetTicketMessage

Retrieve specific ticket message

[API reference](https://sell.app/docs/api/tickets/retrieve-specific-ticket-message) · Effect: **read**

```kotlin
fun v2GetTicketMessage(
        ticket: String,
        message: String,
        requestOptions: RequestOptions? = null,
    ): SdkV2GetTicketMessageResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `String` | Yes |
| message | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2GetTicketMessageResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.ticketsMessages.v2GetTicketMessage(ticket = "1", message = "2")
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

