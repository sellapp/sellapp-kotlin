# walletTopups

[All resources](../methods.md)

## create

Create a wallet top-up payment link

[API reference](https://sell.app/docs/api/wallet/create-wallet-top-up) · Effect: **consequential**

```kotlin
fun create(
        customer: String,
        amountCents: Long,
        paymentMethod: PaymentMethod,
        customPaymentMethodId: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateWalletTopUpResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| customer | `String` | Yes |
| amountCents | `Long` | Yes |
| paymentMethod | `PaymentMethod` | Yes |
| customPaymentMethodId | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateWalletTopUpResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.walletTopups.create(customer = "42", amountCents = 2500L, paymentMethod = app.sell.sellapp.types.PaymentMethod("STRIPE"), requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
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

Documented HTTP responses: 201, 400, 401, 403, 404, 409, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

