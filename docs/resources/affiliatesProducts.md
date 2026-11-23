# affiliatesProducts

[All resources](../methods.md)

## get

Retrieve affiliate products

[API reference](https://sell.app/docs/api/affiliates/affiliate-products) · Effect: **read**

```kotlin
fun get(
        affiliate: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetAffiliateProductsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| affiliate | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetAffiliateProductsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.affiliatesProducts.get(affiliate = "88")
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

Update affiliate products

[API reference](https://sell.app/docs/api/affiliates/affiliate-products) · Effect: **consequential**

```kotlin
fun update(
        affiliate: String,
        enableSpecificProducts: PatchField<Boolean> = PatchField.Absent,
        products:
            PatchField<List<UpdateAffiliateProductsRequestApplicationJsonPropertyProductsItem>> =
            PatchField.Absent,
        replaceProducts: PatchField<Boolean> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateAffiliateProductsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| affiliate | `String` | Yes |
| enableSpecificProducts | `PatchField<Boolean>` | No |
| products | `PatchField<List<UpdateAffiliateProductsRequestApplicationJsonPropertyProductsItem>>` | No |
| replaceProducts | `PatchField<Boolean>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateAffiliateProductsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.affiliatesProducts.update(affiliate = "88", enableSpecificProducts = app.sell.sellapp.common.http.PatchField.Present(true), products = app.sell.sellapp.common.http.PatchField.Present(listOf(ObjectMapperFactory.read("{\"id\":42,\"enabled\":true,\"commission\":{\"type\":\"percentage\",\"percentage\":\"25\"}}", app.sell.sellapp.models.UpdateAffiliateProductsRequestApplicationJsonPropertyProductsItem::class.java), ObjectMapperFactory.read("{\"id\":43,\"enabled\":true,\"commission\":{\"type\":\"fixed\",\"amount_usd_cents\":550}}", app.sell.sellapp.models.UpdateAffiliateProductsRequestApplicationJsonPropertyProductsItem::class.java))), replaceProducts = app.sell.sellapp.common.http.PatchField.Present(true))
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

