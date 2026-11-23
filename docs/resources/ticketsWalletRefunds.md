# ticketsWalletRefunds

[All resources](../methods.md)

## listOptions

List a ticket's wallet refund options

[API reference](https://sell.app/docs/api/tickets/list-ticket-wallet-refund-options) · Effect: **read**

```kotlin
fun listOptions(
        ticket: String,
        requestOptions: RequestOptions? = null,
    ): SdkV2ListTicketWalletRefundOptionsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2ListTicketWalletRefundOptionsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.ticketsWalletRefunds.listOptions(ticket = "312")
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

## list

List a ticket's wallet refunds

[API reference](https://sell.app/docs/api/tickets/list-ticket-wallet-refunds) · Effect: **read**

```kotlin
fun list(
        ticket: String,
        requestOptions: RequestOptions? = null,
    ): SdkV2ListTicketWalletRefundsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2ListTicketWalletRefundsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.ticketsWalletRefunds.list(ticket = "312")
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

## create

Refund a ticket to the customer's wallet

[API reference](https://sell.app/docs/api/tickets/refund-ticket-to-wallet) · Effect: **consequential**

```kotlin
fun create(
        ticket: String,
        invoiceId: Long,
        amountCents: Long,
        expectedRefundableCents: Long,
        customerNote: String,
        requestOptions: RequestOptions? = null,
    ): SdkV2RefundTicketToWalletResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `String` | Yes |
| invoiceId | `Long` | Yes |
| amountCents | `Long` | Yes |
| expectedRefundableCents | `Long` | Yes |
| customerNote | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2RefundTicketToWalletResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.ticketsWalletRefunds.create(ticket = "312", invoiceId = 5120L, amountCents = 500L, expectedRefundableCents = 1999L, customerNote = "We added \$5.00 to your store wallet for the trouble with your download link.", requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
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

## reverse

Reverse a ticket's wallet refund

[API reference](https://sell.app/docs/api/tickets/reverse-ticket-wallet-refund) · Effect: **consequential**

```kotlin
fun reverse(
        ticket: String,
        walletRefund: String,
        reason: String,
        requestOptions: RequestOptions? = null,
    ): SdkV2ReverseTicketWalletRefundResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `String` | Yes |
| walletRefund | `String` | Yes |
| reason | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2ReverseTicketWalletRefundResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.ticketsWalletRefunds.reverse(ticket = "312", walletRefund = "7001", reason = "Issued on the wrong ticket.")
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

