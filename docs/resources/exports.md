# exports

[All resources](../methods.md)

## list

List exports

[API reference](https://sell.app/docs/api/exports) · Effect: **read**

```kotlin
fun list(
        requestOptions: RequestOptions? = null
    ): Page<ListExportsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListExportsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.exports.list()
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

## create

Create an export

[API reference](https://sell.app/docs/api/exports) · Effect: **consequential**

```kotlin
fun create(
        type: SdkCreateExportRequestApplicationJsonType,
        format: SdkCreateExportRequestApplicationJsonFormat,
        parameters: CreateExportRequestApplicationJsonPropertyParameters? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateExportResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| type | `SdkCreateExportRequestApplicationJsonType` | Yes |
| format | `SdkCreateExportRequestApplicationJsonFormat` | Yes |
| parameters | `CreateExportRequestApplicationJsonPropertyParameters?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateExportResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.exports.create(type = app.sell.sellapp.types.SdkCreateExportRequestApplicationJsonType("sales"), format = app.sell.sellapp.types.SdkCreateExportRequestApplicationJsonFormat("csv"), parameters = ObjectMapperFactory.read("{\"from\":\"2026-08-01\",\"to\":\"2026-08-31\"}", app.sell.sellapp.models.CreateExportRequestApplicationJsonPropertyParameters::class.java))
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

Documented HTTP responses: 201, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## get

Retrieve an export

[API reference](https://sell.app/docs/api/exports) · Effect: **read**

```kotlin
fun get(
        export: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetExportResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| export | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetExportResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.exports.get(export = "01992a65-e064-71ba-b38f-902b7966a6be")
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

## download

Download an export

[API reference](https://sell.app/docs/api/exports) · Effect: **read**

```kotlin
fun download(
        export: String,
        expires: Long,
        signature: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| export | `String` | Yes |
| expires | `Long` | Yes |
| signature | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.exports.download(export = "01992a65-e064-71ba-b38f-902b7966a6be", expires = 1788513423L, signature = "2c91df645a086ec399153a932b741f809d2b85c69740eaf3612384ebfb913a65")
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

Documented HTTP responses: 302, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

