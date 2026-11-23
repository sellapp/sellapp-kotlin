# walletTransactions

[All resources](../methods.md)

## reverse

Reverse a wallet transaction

[API reference](https://sell.app/docs/api/wallet/reverse-wallet-transaction) · Effect: **consequential**

```kotlin
fun reverse(
        customer: String,
        transaction: String,
        note: String,
        expectedBalanceCents: Long? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReverseWalletTransactionResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| customer | `String` | Yes |
| transaction | `String` | Yes |
| note | `String` | Yes |
| expectedBalanceCents | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReverseWalletTransactionResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.walletTransactions.reverse(customer = "42", transaction = "501", note = "Credit went to the wrong customer", expectedBalanceCents = 2500L)
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

## list

List wallet transactions

[API reference](https://sell.app/docs/api/wallet/retrieve-customer-wallet) · Effect: **read**

```kotlin
fun list(
        customer: String,
        page: Long? = null,
        limit: Int? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListWalletTransactionsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| customer | `String` | Yes |
| page | `Long?` | No |
| limit | `Int?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListWalletTransactionsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.walletTransactions.list(customer = "42")
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

