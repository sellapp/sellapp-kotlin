# feedback

[All resources](../methods.md)

## list

List all feedback

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListFeedbackResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListFeedbackResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.feedback.list()
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

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## get

Retrieve specific feedback

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```kotlin
fun get(
        feedback: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetFeedbackResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| feedback | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetFeedbackResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.feedback.get(feedback = "1")
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

Reply to feedback

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```kotlin
fun reply(
        feedback: String,
        reply: String,
        requestOptions: RequestOptions? = null,
    ): SdkReplyToFeedbackResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| feedback | `String` | Yes |
| reply | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplyToFeedbackResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.feedback.reply(feedback = "1", reply = "Please contact support if you need help with your download.")
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

Search feedback

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```kotlin
fun search(
        filters: List<SearchFeedbackRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<SearchFeedbackRequestApplicationJsonPropertySortItem>? = null,
        search: SearchFeedbackRequestApplicationJsonPropertySearch? = null,
        includes: List<SearchFeedbackRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SearchFeedbackResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| filters | `List<SearchFeedbackRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<SearchFeedbackRequestApplicationJsonPropertySortItem>?` | No |
| search | `SearchFeedbackRequestApplicationJsonPropertySearch?` | No |
| includes | `List<SearchFeedbackRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SearchFeedbackResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.feedback.search(filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":1}", app.sell.sellapp.models.SearchFeedbackRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.SearchFeedbackRequestApplicationJsonPropertySortItem::class.java)))
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

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## v2ListFeedback

List all feedback

[API reference](https://sell.app/docs/api/feedback/list-all-feedback) · Effect: **read**

```kotlin
fun v2ListFeedback(
        limit: Long? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<V2ListFeedbackResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Long?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<V2ListFeedbackResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.feedback.v2ListFeedback()
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

## v2SearchFeedback

Search feedback

[API reference](https://sell.app/docs/api/feedback/search-feedback) · Effect: **read**

```kotlin
fun v2SearchFeedback(
        filters: List<V2SearchFeedbackRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<V2SearchFeedbackRequestApplicationJsonPropertySortItem>? = null,
        search: V2SearchFeedbackRequestApplicationJsonPropertySearch? = null,
        includes: List<V2SearchFeedbackRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<V2SearchFeedbackResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| filters | `List<V2SearchFeedbackRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<V2SearchFeedbackRequestApplicationJsonPropertySortItem>?` | No |
| search | `V2SearchFeedbackRequestApplicationJsonPropertySearch?` | No |
| includes | `List<V2SearchFeedbackRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<V2SearchFeedbackResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.feedback.v2SearchFeedback(filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":1}", app.sell.sellapp.models.V2SearchFeedbackRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.V2SearchFeedbackRequestApplicationJsonPropertySortItem::class.java)))
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

## v2GetFeedback

Retrieve specific feedback

[API reference](https://sell.app/docs/api/feedback/retrieve-specific-feedback) · Effect: **read**

```kotlin
fun v2GetFeedback(
        feedback: String,
        requestOptions: RequestOptions? = null,
    ): SdkV2GetFeedbackResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| feedback | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2GetFeedbackResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.feedback.v2GetFeedback(feedback = "1")
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

## v2ReplaceFeedback

Reply to feedback

[API reference](https://sell.app/docs/api/feedback) · Effect: **consequential**

```kotlin
fun v2ReplaceFeedback(
        feedback: String,
        reply: String,
        requestOptions: RequestOptions? = null,
    ): SdkV2ReplaceFeedbackResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| feedback | `String` | Yes |
| reply | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2ReplaceFeedbackResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.feedback.v2ReplaceFeedback(feedback = "1", reply = "Please contact support if you need help with your download.")
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

## v2ReplyToFeedback

Reply to feedback

[API reference](https://sell.app/docs/api/feedback/reply-to-feedback) · Effect: **consequential**

```kotlin
fun v2ReplyToFeedback(
        feedback: String,
        reply: String,
        requestOptions: RequestOptions? = null,
    ): SdkV2ReplyToFeedbackResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| feedback | `String` | Yes |
| reply | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2ReplyToFeedbackResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.feedback.v2ReplyToFeedback(feedback = "1", reply = "Please contact support if you need help with your download.")
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

