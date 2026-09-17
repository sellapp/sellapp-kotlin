# creditsBalancesTransactions

[All resources](../methods.md)

## list

List credit balance transactions

[API reference](https://sell.app/docs/api/credits/retrieve-a-credit-balance) · Effect: **read**

```kotlin
fun list(
        customer: String,
        creditProduct: String,
        page: Long? = null,
        limit: Int? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListCreditBalanceTransactionsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| customer | `String` | Yes |
| creditProduct | `String` | Yes |
| page | `Long?` | No |
| limit | `Int?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListCreditBalanceTransactionsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.creditsBalancesTransactions.list(customer = "42", creditProduct = "42")
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

