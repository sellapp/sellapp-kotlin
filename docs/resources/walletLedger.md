# walletLedger

[All resources](../methods.md)

## list

List store wallet transactions

[API reference](https://sell.app/docs/api/wallet/list-store-wallet-transactions) · Effect: **read**

```kotlin
fun list(
        period: WalletPeriod? = null,
        type: WalletType? = null,
        customerId: Long? = null,
        email: String? = null,
        limit: Int? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListStoreWalletTransactionsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| period | `WalletPeriod?` | No |
| type | `WalletType?` | No |
| customerId | `Long?` | No |
| email | `String?` | No |
| limit | `Int?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListStoreWalletTransactionsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.walletLedger.list()
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

Documented HTTP responses: 200, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

