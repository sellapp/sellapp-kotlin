# paymentMethodsModifier

[All resources](../methods.md)

## get

Retrieve a payment method modifier

[API reference](https://sell.app/docs/api/payment-methods/payment-method-modifier) · Effect: **read**

```kotlin
fun get(
        paymentMethod: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetPaymentMethodModifierResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| paymentMethod | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetPaymentMethodModifierResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.paymentMethodsModifier.get(paymentMethod = "STRIPE")
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

Update a payment method modifier

[API reference](https://sell.app/docs/api/payment-methods/payment-method-modifier) · Effect: **consequential**

```kotlin
fun replace(
        paymentMethod: String,
        kind: SdkReplacePaymentMethodModifierRequestApplicationJsonKind,
        percentage: String?,
        fixedAmount: String?,
        condition: Condition? = null,
        threshold: Any? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplacePaymentMethodModifierResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| paymentMethod | `String` | Yes |
| kind | `SdkReplacePaymentMethodModifierRequestApplicationJsonKind` | Yes |
| percentage | `String?` | No |
| fixedAmount | `String?` | No |
| condition | `Condition?` | No |
| threshold | `Any?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplacePaymentMethodModifierResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.paymentMethodsModifier.replace(paymentMethod = "STRIPE", kind = app.sell.sellapp.types.SdkReplacePaymentMethodModifierRequestApplicationJsonKind("fee"), percentage = "3.00", fixedAmount = "0.30", condition = app.sell.sellapp.types.Condition("below"), threshold = "20.00")
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

