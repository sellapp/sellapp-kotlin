# creditsBalances

[All resources](../methods.md)

## list

List credit balances

[API reference](https://sell.app/docs/api/credits/list-credit-balances) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        customerId: Long? = null,
        productId: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkListCreditBalancesResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| customerId | `Long?` | No |
| productId | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkListCreditBalancesResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.creditsBalances.list()
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

## get

Retrieve a credit balance

[API reference](https://sell.app/docs/api/credits/retrieve-a-credit-balance) · Effect: **read**

```kotlin
fun get(
        customer: String,
        creditProduct: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetCreditBalanceResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| customer | `String` | Yes |
| creditProduct | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetCreditBalanceResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.creditsBalances.get(customer = "1", creditProduct = "1")
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

