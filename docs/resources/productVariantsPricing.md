# productVariantsPricing

[All resources](../methods.md)

## replace

Replace product variant pricing

[API reference](https://sell.app/docs/api/product-variants) · Effect: **write**

```kotlin
fun replace(
        product: String,
        variant: String,
        pricing: ReplaceProductVariantPricingRequestApplicationJsonPropertyPricing,
        paymentMethods: List<PaymentMethod>,
        customPaymentMethodIds: List<String>? = null,
        bulkDiscount:
            List<ReplaceProductVariantPricingRequestApplicationJsonPropertyBulkDiscountItem>? =
            null,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceProductVariantPricingResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| pricing | `ReplaceProductVariantPricingRequestApplicationJsonPropertyPricing` | Yes |
| paymentMethods | `List<PaymentMethod>` | Yes |
| customPaymentMethodIds | `List<String>?` | No |
| bulkDiscount | `List<ReplaceProductVariantPricingRequestApplicationJsonPropertyBulkDiscountItem>?` | No |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceProductVariantPricingResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariantsPricing.replace(product = "120", variant = "4321", pricing = ObjectMapperFactory.read("{\"type\":\"SUBSCRIPTION\",\"humble\":false,\"price\":{\"price\":1999,\"currency\":\"USD\"},\"frequency\":{\"value\":1,\"interval\":\"MONTH\"}}", app.sell.sellapp.models.ReplaceProductVariantPricingRequestApplicationJsonPropertyPricing::class.java), paymentMethods = listOf(app.sell.sellapp.types.PaymentMethod("STRIPE")))
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

Partially update product variant pricing

[API reference](https://sell.app/docs/api/product-variants/update-product-variant-pricing) · Effect: **write**

```kotlin
fun update(
        product: String,
        variant: String,
        pricing: PatchField<UpdateProductVariantPricingRequestApplicationJsonPropertyPricing> =
            PatchField.Absent,
        paymentMethods: PatchField<List<PaymentMethod>> = PatchField.Absent,
        customPaymentMethodIds: PatchField<List<String>> = PatchField.Absent,
        bulkDiscount:
            PatchField<
                List<UpdateProductVariantPricingRequestApplicationJsonPropertyBulkDiscountItem>
            > =
            PatchField.Absent,
        expectedUpdatedAt: PatchField<OffsetDateTime> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateProductVariantPricingResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| pricing | `PatchField<UpdateProductVariantPricingRequestApplicationJsonPropertyPricing>` | No |
| paymentMethods | `PatchField<List<PaymentMethod>>` | No |
| customPaymentMethodIds | `PatchField<List<String>>` | No |
| bulkDiscount | `PatchField<
                List<UpdateProductVariantPricingRequestApplicationJsonPropertyBulkDiscountItem>
            >` | No |
| expectedUpdatedAt | `PatchField<OffsetDateTime>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateProductVariantPricingResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariantsPricing.update(product = "120", variant = "4321", pricing = app.sell.sellapp.common.http.PatchField.Present(ObjectMapperFactory.read("{\"price\":{\"price\":2499,\"currency\":\"USD\"}}", app.sell.sellapp.models.UpdateProductVariantPricingRequestApplicationJsonPropertyPricing::class.java)))
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

