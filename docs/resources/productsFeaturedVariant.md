# productsFeaturedVariant

[All resources](../methods.md)

## get

Retrieve product featured variant

[API reference](https://sell.app/docs/api/products/product-featured-variant) · Effect: **read**

```kotlin
fun get(
        product: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetProductFeaturedVariantResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetProductFeaturedVariantResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productsFeaturedVariant.get(product = "1")
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

Replace product featured variant

[API reference](https://sell.app/docs/api/products/product-featured-variant) · Effect: **write**

```kotlin
fun replace(
        product: String,
        variantId: Long?,
        highlightLabel: HighlightLabel? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceProductFeaturedVariantResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variantId | `Long?` | No |
| highlightLabel | `HighlightLabel?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceProductFeaturedVariantResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productsFeaturedVariant.replace(product = "1", variantId = 2L, highlightLabel = app.sell.sellapp.types.HighlightLabel("best_value"))
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

