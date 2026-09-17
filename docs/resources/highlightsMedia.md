# highlightsMedia

[All resources](../methods.md)

## list

List highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **read**

```kotlin
fun list(
        highlight: String,
        requestOptions: RequestOptions? = null,
    ): SdkListHighlightMediaResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkListHighlightMediaResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.highlightsMedia.list(highlight = "1")
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

## add

Add highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **write**

```kotlin
fun add(
        highlight: String,
        file: ByteArray,
        ctaTitle: String? = null,
        productId: Long? = null,
        requestOptions: RequestOptions? = null,
    ): SdkAddHighlightMediaResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `String` | Yes |
| file | `ByteArray` | Yes |
| ctaTitle | `String?` | No |
| productId | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkAddHighlightMediaResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.highlightsMedia.add(highlight = "1", file = java.io.File("/path/to/example.png").readBytes(), ctaTitle = "View product", productId = 123L)
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

## reorder

Reorder highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **consequential**

```kotlin
fun reorder(
        highlight: String,
        resources: List<Long>,
        requestOptions: RequestOptions? = null,
    ): SdkReorderHighlightMediaResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `String` | Yes |
| resources | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReorderHighlightMediaResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.highlightsMedia.reorder(highlight = "1", resources = listOf(42L, 41L))
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

Replace highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **write**

```kotlin
fun replace(
        highlight: String,
        media: String,
        file: ByteArray,
        ctaTitle: String? = null,
        productId: Long? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceHighlightMediaResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `String` | Yes |
| media | `String` | Yes |
| file | `ByteArray` | Yes |
| ctaTitle | `String?` | No |
| productId | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceHighlightMediaResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.highlightsMedia.replace(highlight = "1", media = "84", file = java.io.File("/path/to/example.png").readBytes(), ctaTitle = "View product", productId = 123L)
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

## replaceMetadata

Update highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **write**

```kotlin
fun replaceMetadata(
        highlight: String,
        media: String,
        ctaTitle: String? = null,
        productId: Long? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceHighlightMediaMetadataResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `String` | Yes |
| media | `String` | Yes |
| ctaTitle | `String?` | No |
| productId | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceHighlightMediaMetadataResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.highlightsMedia.replaceMetadata(highlight = "1", media = "84", ctaTitle = "View product", productId = 123L)
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

Update highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **write**

```kotlin
fun update(
        highlight: String,
        media: String,
        ctaTitle: PatchField<String> = PatchField.Absent,
        productId: PatchField<Long?> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateHighlightMediaResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `String` | Yes |
| media | `String` | Yes |
| ctaTitle | `PatchField<String>` | No |
| productId | `PatchField<Long?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateHighlightMediaResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.highlightsMedia.update(highlight = "1", media = "84", ctaTitle = app.sell.sellapp.common.http.PatchField.Present("View product"), productId = app.sell.sellapp.common.http.PatchField.Present(123L))
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

Delete highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **consequential**

```kotlin
fun delete(
        highlight: String,
        media: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `String` | Yes |
| media | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.highlightsMedia.delete(highlight = "1", media = "84")
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

