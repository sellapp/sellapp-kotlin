# variantDeliverableFolders

[All resources](../methods.md)

## list

List variant deliverable folders

[API reference](https://sell.app/docs/api/product-variants) · Effect: **read**

```kotlin
fun list(
        product: String,
        variant: String,
        requestOptions: RequestOptions? = null,
    ): SdkListVariantDeliverableFoldersResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkListVariantDeliverableFoldersResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.variantDeliverableFolders.list(product = "string_example", variant = "1")
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

## create

Create a variant deliverable folder

[API reference](https://sell.app/docs/api/product-variants) · Effect: **write**

```kotlin
fun create(
        product: String,
        variant: String,
        name: String,
        description: String? = null,
        parentId: Long? = null,
        sortOrder: Long? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateVariantDeliverableFolderResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| name | `String` | Yes |
| description | `String?` | No |
| parentId | `Long?` | No |
| sortOrder | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateVariantDeliverableFolderResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.variantDeliverableFolders.create(product = "string_example", variant = "1", name = "Design kit", description = "Files included with your purchase.")
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

## get

Retrieve a variant deliverable folder

[API reference](https://sell.app/docs/api/product-variants) · Effect: **read**

```kotlin
fun get(
        product: String,
        variant: String,
        folder: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetVariantDeliverableFolderResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| folder | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetVariantDeliverableFolderResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.variantDeliverableFolders.get(product = "string_example", variant = "1", folder = "1")
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

Replace variant deliverable folder settings

[API reference](https://sell.app/docs/api/product-variants) · Effect: **write**

```kotlin
fun replace(
        product: String,
        variant: String,
        folder: String,
        name: String? = null,
        description: String? = null,
        parentId: Long? = null,
        sortOrder: Long? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceVariantDeliverableFolderSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| folder | `String` | Yes |
| name | `String?` | No |
| description | `String?` | No |
| parentId | `Long?` | No |
| sortOrder | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceVariantDeliverableFolderSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.variantDeliverableFolders.replace(product = "string_example", variant = "1", folder = "1", name = "Design kit")
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

Update a variant deliverable folder

[API reference](https://sell.app/docs/api/product-variants) · Effect: **write**

```kotlin
fun update(
        product: String,
        variant: String,
        folder: String,
        name: PatchField<String> = PatchField.Absent,
        description: PatchField<String?> = PatchField.Absent,
        parentId: PatchField<Long?> = PatchField.Absent,
        sortOrder: PatchField<Long> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateVariantDeliverableFolderResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| folder | `String` | Yes |
| name | `PatchField<String>` | No |
| description | `PatchField<String?>` | No |
| parentId | `PatchField<Long?>` | No |
| sortOrder | `PatchField<Long>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateVariantDeliverableFolderResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.variantDeliverableFolders.update(product = "string_example", variant = "1", folder = "1", name = app.sell.sellapp.common.http.PatchField.Present("Design kit"))
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

Delete a variant deliverable folder

[API reference](https://sell.app/docs/api/product-variants) · Effect: **consequential**

```kotlin
fun delete(
        product: String,
        variant: String,
        folder: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| folder | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.variantDeliverableFolders.delete(product = "string_example", variant = "1", folder = "1")
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

