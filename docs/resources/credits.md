# credits

[All resources](../methods.md)

## record

Record a credit transaction

[API reference](https://sell.app/docs/api/credits/record-a-credit-transaction) · Effect: **consequential**

```kotlin
fun record(
        customerId: Long,
        productId: Long,
        kind: SdkRecordCreditTransactionRequestApplicationJsonKind,
        amountUnits: Long,
        idempotencyKey: String,
        reason: String? = null,
        sourceType: String? = null,
        sourceId: String? = null,
        metadata: RecordCreditTransactionRequestApplicationJsonPropertyMetadata? = null,
        requestOptions: RequestOptions? = null,
    ): SdkRecordCreditTransactionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| customerId | `Long` | Yes |
| productId | `Long` | Yes |
| kind | `SdkRecordCreditTransactionRequestApplicationJsonKind` | Yes |
| amountUnits | `Long` | Yes |
| idempotencyKey | `String` | Yes |
| reason | `String?` | No |
| sourceType | `String?` | No |
| sourceId | `String?` | No |
| metadata | `RecordCreditTransactionRequestApplicationJsonPropertyMetadata?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkRecordCreditTransactionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.credits.record(customerId = 125L, productId = 120L, kind = app.sell.sellapp.types.SdkRecordCreditTransactionRequestApplicationJsonKind("grant"), amountUnits = 1000L, idempotencyKey = "credits-grant-01992a65", reason = "Launch cohort allocation")
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

Documented HTTP responses: 200, 201, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

