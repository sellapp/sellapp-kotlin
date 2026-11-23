# affiliatesCoupon

[All resources](../methods.md)

## get

Retrieve an affiliate coupon

[API reference](https://sell.app/docs/api/affiliates/affiliate-coupon) · Effect: **read**

```kotlin
fun get(
        affiliate: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetAffiliateCouponResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| affiliate | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetAffiliateCouponResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.affiliatesCoupon.get(affiliate = "88")
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

## save

Save an affiliate coupon

[API reference](https://sell.app/docs/api/affiliates/affiliate-coupon) · Effect: **consequential**

```kotlin
fun save(
        affiliate: String,
        code: PatchField<String> = PatchField.Absent,
        type: PatchField<SdkCreateCouponRequestApplicationJsonType> = PatchField.Absent,
        discount: PatchField<Any> = PatchField.Absent,
        storeWide: PatchField<Boolean> = PatchField.Absent,
        products: PatchField<List<Long>> = PatchField.Absent,
        productVariants: PatchField<List<Long>> = PatchField.Absent,
        limit: PatchField<Long?> = PatchField.Absent,
        expiresAt: PatchField<OffsetDateTime?> = PatchField.Absent,
        minimumAmount: PatchField<Any?> = PatchField.Absent,
        appliesTo: PatchField<SdkCreateCouponRequestApplicationJsonAppliesTo> = PatchField.Absent,
        subscriptionPayments: PatchField<Long?> = PatchField.Absent,
        maximumDiscountAmount: PatchField<String?> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkSaveAffiliateCouponResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| affiliate | `String` | Yes |
| code | `PatchField<String>` | No |
| type | `PatchField<SdkCreateCouponRequestApplicationJsonType>` | No |
| discount | `PatchField<Any>` | No |
| storeWide | `PatchField<Boolean>` | No |
| products | `PatchField<List<Long>>` | No |
| productVariants | `PatchField<List<Long>>` | No |
| limit | `PatchField<Long?>` | No |
| expiresAt | `PatchField<OffsetDateTime?>` | No |
| minimumAmount | `PatchField<Any?>` | No |
| appliesTo | `PatchField<SdkCreateCouponRequestApplicationJsonAppliesTo>` | No |
| subscriptionPayments | `PatchField<Long?>` | No |
| maximumDiscountAmount | `PatchField<String?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkSaveAffiliateCouponResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.affiliatesCoupon.save(affiliate = "88", code = app.sell.sellapp.common.http.PatchField.Present("ALEX15"), type = app.sell.sellapp.common.http.PatchField.Present(app.sell.sellapp.types.SdkCreateCouponRequestApplicationJsonType("PERCENTAGE")), discount = app.sell.sellapp.common.http.PatchField.Present("15"), storeWide = app.sell.sellapp.common.http.PatchField.Present(true), maximumDiscountAmount = app.sell.sellapp.common.http.PatchField.Present("20"))
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

## disable

Disable an affiliate coupon

[API reference](https://sell.app/docs/api/affiliates/affiliate-coupon) · Effect: **consequential**

```kotlin
fun disable(
        affiliate: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| affiliate | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.affiliatesCoupon.disable(affiliate = "88")
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

