# productVariantsSubscriptionSettings

[All resources](../methods.md)

## get

Retrieve variant subscription settings

[API reference](https://sell.app/docs/api/product-variants/variant-subscription-settings) · Effect: **read**

```kotlin
fun get(
        product: String,
        variant: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetVariantSubscriptionSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetVariantSubscriptionSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariantsSubscriptionSettings.get(product = "1", variant = "4")
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

Update variant subscription settings

[API reference](https://sell.app/docs/api/product-variants/variant-subscription-settings) · Effect: **write**

```kotlin
fun update(
        product: String,
        variant: String,
        pausePolicy:
            PatchField<UpdateVariantSubscriptionSettingsRequestApplicationJsonPropertyPausePolicy> =
            PatchField.Absent,
        billingDatePolicy:
            PatchField<
                UpdateVariantSubscriptionSettingsRequestApplicationJsonPropertyBillingDatePolicy
            > =
            PatchField.Absent,
        renewalPolicy:
            PatchField<
                UpdateVariantSubscriptionSettingsRequestApplicationJsonPropertyRenewalPolicy
            > =
            PatchField.Absent,
        expectedState: PatchField<String?> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateVariantSubscriptionSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| pausePolicy | `PatchField<UpdateVariantSubscriptionSettingsRequestApplicationJsonPropertyPausePolicy>` | No |
| billingDatePolicy | `PatchField<
                UpdateVariantSubscriptionSettingsRequestApplicationJsonPropertyBillingDatePolicy
            >` | No |
| renewalPolicy | `PatchField<
                UpdateVariantSubscriptionSettingsRequestApplicationJsonPropertyRenewalPolicy
            >` | No |
| expectedState | `PatchField<String?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateVariantSubscriptionSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariantsSubscriptionSettings.update(product = "1", variant = "4", pausePolicy = app.sell.sellapp.common.http.PatchField.Present(ObjectMapperFactory.read("{\"max_pause_days\":30}", app.sell.sellapp.models.UpdateVariantSubscriptionSettingsRequestApplicationJsonPropertyPausePolicy::class.java)), renewalPolicy = app.sell.sellapp.common.http.PatchField.Present(ObjectMapperFactory.read("{\"redeliver_on_renewal\":false}", app.sell.sellapp.models.UpdateVariantSubscriptionSettingsRequestApplicationJsonPropertyRenewalPolicy::class.java)), expectedState = app.sell.sellapp.common.http.PatchField.Present("3f9a1c0e7b2d4a6f8e1c5b9d0a7f3e2c4b6d8a0f1e3c5a7b9d2f4e6a8c0b1d3e"))
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

