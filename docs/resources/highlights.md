# highlights

[All resources](../methods.md)

## list

List highlights

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkListHighlightsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkListHighlightsResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.highlights.list()
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

Create a highlight

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **write**

```kotlin
fun create(
        title: String,
        hidden: Boolean,
        files: List<ByteArray>,
        requestOptions: RequestOptions? = null,
    ): SdkCreateHighlightResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| title | `String` | Yes |
| hidden | `Boolean` | Yes |
| files | `List<ByteArray>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateHighlightResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.highlights.create(title = "Stealth-mode launch", hidden = false, files = listOf(java.io.File("/path/to/example.png").readBytes()))
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

## search

Search highlights

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **read**

```kotlin
fun search(
        limit: Long? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        filters: List<SearchHighlightsRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<SearchHighlightsRequestApplicationJsonPropertySortItem>? = null,
        search: SearchHighlightsRequestApplicationJsonPropertySearch? = null,
        includes: List<SearchHighlightsRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkSearchHighlightsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Long?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| filters | `List<SearchHighlightsRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<SearchHighlightsRequestApplicationJsonPropertySortItem>?` | No |
| search | `SearchHighlightsRequestApplicationJsonPropertySearch?` | No |
| includes | `List<SearchHighlightsRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkSearchHighlightsResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.highlights.search(filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":42}", app.sell.sellapp.models.SearchHighlightsRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.SearchHighlightsRequestApplicationJsonPropertySortItem::class.java)))
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

## reorder

Reorder highlights

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **consequential**

```kotlin
fun reorder(
        resources: List<Long>,
        requestOptions: RequestOptions? = null,
    ): SdkReorderHighlightsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| resources | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReorderHighlightsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.highlights.reorder(resources = listOf(42L, 41L))
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

## get

Retrieve a highlight

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **read**

```kotlin
fun get(
        highlight: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetHighlightResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetHighlightResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.highlights.get(highlight = "42")
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

Update a highlight

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **write**

```kotlin
fun replace(
        highlight: String,
        title: String? = null,
        hidden: Boolean? = null,
        published: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceHighlightResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `String` | Yes |
| title | `String?` | No |
| hidden | `Boolean?` | No |
| published | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceHighlightResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.highlights.replace(highlight = "42", title = "Stealth-mode launch", hidden = false)
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

Update a highlight

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **write**

```kotlin
fun update(
        highlight: String,
        title: PatchField<String> = PatchField.Absent,
        hidden: PatchField<Boolean> = PatchField.Absent,
        published: PatchField<Boolean> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateHighlightResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `String` | Yes |
| title | `PatchField<String>` | No |
| hidden | `PatchField<Boolean>` | No |
| published | `PatchField<Boolean>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateHighlightResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.highlights.update(highlight = "42", title = app.sell.sellapp.common.http.PatchField.Present("Stealth-mode launch"), hidden = app.sell.sellapp.common.http.PatchField.Present(false))
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

Delete a highlight

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **consequential**

```kotlin
fun delete(
        highlight: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.highlights.delete(highlight = "42")
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

