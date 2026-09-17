# addOnsParentProducts

[All resources](../methods.md)

## list

List an add-on's parent products

[API reference](https://sell.app/docs/api/add-ons/list-parent-products) · Effect: **read**

```kotlin
fun list(
        addon: String,
        limit: Int? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkListAddOnSParentProductsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| addon | `String` | Yes |
| limit | `Int?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkListAddOnSParentProductsResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.addOnsParentProducts.list(addon = "1")
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

Replace an add-on's parent products

[API reference](https://sell.app/docs/api/add-ons/replace-parent-products) · Effect: **consequential**

```kotlin
fun replace(
        addon: String,
        resources: List<Long>,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceAddOnSParentProductsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| addon | `String` | Yes |
| resources | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceAddOnSParentProductsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.addOnsParentProducts.replace(addon = "410", resources = listOf(121L, 120L))
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

