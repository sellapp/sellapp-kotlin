# productsSimilarProducts

[All resources](../methods.md)

## list

List product similar products

[API reference](https://sell.app/docs/api/products/product-similar-products) · Effect: **read**

```kotlin
fun list(
        product: String,
        requestOptions: RequestOptions? = null,
    ): SdkListProductSimilarProductsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkListProductSimilarProductsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productsSimilarProducts.list(product = "30")
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

Replace product similar products

[API reference](https://sell.app/docs/api/products/product-similar-products) · Effect: **write**

```kotlin
fun replace(
        product: String,
        variantIds: List<Long>,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceProductSimilarProductsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variantIds | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceProductSimilarProductsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productsSimilarProducts.replace(product = "30", variantIds = listOf(31L, 41L))
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

