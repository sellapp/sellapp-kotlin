# variantSerials

[All resources](../methods.md)

## list

List variant serial inventory

[API reference](https://sell.app/docs/api/product-variants) · Effect: **read**

```kotlin
fun list(
        product: String,
        variant: String,
        search: String? = null,
        limit: Int? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListVariantSerialInventoryResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| search | `String?` | No |
| limit | `Int?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListVariantSerialInventoryResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.variantSerials.list(product = "1", variant = "1")
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

## append

Append variant serial inventory

[API reference](https://sell.app/docs/api/product-variants) · Effect: **consequential**

```kotlin
fun append(
        product: String,
        variant: String,
        serials: List<String>,
        removeDuplicates: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): SdkAppendVariantSerialInventoryResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| serials | `List<String>` | Yes |
| removeDuplicates | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkAppendVariantSerialInventoryResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.variantSerials.append(product = "1", variant = "1", serials = listOf("LICENSE-KEY-001", "LICENSE-KEY-002"), removeDuplicates = true)
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

## replace

Replace variant serial inventory

[API reference](https://sell.app/docs/api/product-variants) · Effect: **consequential**

```kotlin
fun replace(
        product: String,
        variant: String,
        serials: List<String>,
        removeDuplicates: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceVariantSerialInventoryResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| serials | `List<String>` | Yes |
| removeDuplicates | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceVariantSerialInventoryResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.variantSerials.replace(product = "1", variant = "1", serials = listOf("LICENSE-KEY-001", "LICENSE-KEY-002"), removeDuplicates = true)
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

## queue

Queue a variant serial import

[API reference](https://sell.app/docs/api/product-variants) · Effect: **consequential**

```kotlin
fun queue(
        product: String,
        variant: String,
        file: ByteArray,
        parsingMode: SdkQueueVariantSerialImportRequestMultipartFormDataParsingMode,
        customDelimiter: String? = null,
        removeDuplicates: Boolean? = null,
        mode: SdkQueueVariantSerialImportRequestMultipartFormDataMode? = null,
        requestOptions: RequestOptions? = null,
    ): SdkQueueVariantSerialImportResponseValue202ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| file | `ByteArray` | Yes |
| parsingMode | `SdkQueueVariantSerialImportRequestMultipartFormDataParsingMode` | Yes |
| customDelimiter | `String?` | No |
| removeDuplicates | `Boolean?` | No |
| mode | `SdkQueueVariantSerialImportRequestMultipartFormDataMode?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkQueueVariantSerialImportResponseValue202ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.variantSerials.queue(product = "1", variant = "1", file = java.io.File("serials.txt").readBytes(), parsingMode = app.sell.sellapp.types.SdkQueueVariantSerialImportRequestMultipartFormDataParsingMode("NEW_LINE"), removeDuplicates = true, mode = app.sell.sellapp.types.SdkQueueVariantSerialImportRequestMultipartFormDataMode("append"))
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

Documented HTTP responses: 202, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## delete

Delete a variant serial

[API reference](https://sell.app/docs/api/product-variants) · Effect: **consequential**

```kotlin
fun delete(
        product: String,
        variant: String,
        serial: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| serial | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.variantSerials.delete(product = "1", variant = "1", serial = "string_example")
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

