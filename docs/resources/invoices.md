# invoices

[All resources](../methods.md)

## list

List all invoices

[API reference](https://sell.app/docs/api/invoices/list-all-invoices) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        search: String? = null,
        searchBy: InvoicesSearchBy? = null,
        id: String? = null,
        email: String? = null,
        transactionId: String? = null,
        serialCode: String? = null,
        additionalInfo: String? = null,
        productName: String? = null,
        discordData: String? = null,
        cryptoTxid: String? = null,
        cryptoAddress: String? = null,
        couponCode: String? = null,
        status: List<Status>? = null,
        paymentMethods: List<PaymentMethod>? = null,
        sort: InvoicesSort? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListInvoicesResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| search | `String?` | No |
| searchBy | `InvoicesSearchBy?` | No |
| id | `String?` | No |
| email | `String?` | No |
| transactionId | `String?` | No |
| serialCode | `String?` | No |
| additionalInfo | `String?` | No |
| productName | `String?` | No |
| discordData | `String?` | No |
| cryptoTxid | `String?` | No |
| cryptoAddress | `String?` | No |
| couponCode | `String?` | No |
| status | `List<Status>?` | No |
| paymentMethods | `List<PaymentMethod>?` | No |
| sort | `InvoicesSort?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListInvoicesResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.invoices.list()
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

## create

Create an invoice

[API reference](https://sell.app/docs/api/invoices/create-an-invoice) · Effect: **consequential**

```kotlin
fun create(
        customerEmail: String,
        paymentMethod: PaymentMethod,
        productVariants: CreateInvoiceRequestApplicationJsonPropertyProductVariants,
        customerIp: String? = null,
        coupon: String? = null,
        vatId: String? = null,
        country: String? = null,
        affiliate: String? = null,
        extra: CreateInvoiceRequestApplicationJsonPropertyExtra? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateInvoiceResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| customerEmail | `String` | Yes |
| paymentMethod | `PaymentMethod` | Yes |
| productVariants | `CreateInvoiceRequestApplicationJsonPropertyProductVariants` | Yes |
| customerIp | `String?` | No |
| coupon | `String?` | No |
| vatId | `String?` | No |
| country | `String?` | No |
| affiliate | `String?` | No |
| extra | `CreateInvoiceRequestApplicationJsonPropertyExtra?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateInvoiceResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.invoices.create(customerEmail = "maya.chen@example.com", paymentMethod = app.sell.sellapp.types.PaymentMethod("STRIPE"), productVariants = ObjectMapperFactory.read("{\"4321\":{\"quantity\":1}}", app.sell.sellapp.models.CreateInvoiceRequestApplicationJsonPropertyProductVariants::class.java))
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

Documented HTTP responses: 201, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## search

Search invoices

[API reference](https://sell.app/docs/api/invoices/search-invoices) · Effect: **read**

```kotlin
fun search(
        search: String? = null,
        searchBy: InvoicesSearchBy? = null,
        id: String? = null,
        email: String? = null,
        transactionId: String? = null,
        serialCode: String? = null,
        additionalInfo: String? = null,
        productName: String? = null,
        discordData: String? = null,
        cryptoTxid: String? = null,
        cryptoAddress: String? = null,
        couponCode: String? = null,
        status: List<Status>? = null,
        paymentMethods: List<PaymentMethod>? = null,
        sort: InvoicesSort? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SearchInvoicesResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| search | `String?` | No |
| searchBy | `InvoicesSearchBy?` | No |
| id | `String?` | No |
| email | `String?` | No |
| transactionId | `String?` | No |
| serialCode | `String?` | No |
| additionalInfo | `String?` | No |
| productName | `String?` | No |
| discordData | `String?` | No |
| cryptoTxid | `String?` | No |
| cryptoAddress | `String?` | No |
| couponCode | `String?` | No |
| status | `List<Status>?` | No |
| paymentMethods | `List<PaymentMethod>?` | No |
| sort | `InvoicesSort?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SearchInvoicesResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.invoices.search(id = "1", sort = app.sell.sellapp.types.InvoicesSort("-created_at"))
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

Retrieve an invoice

[API reference](https://sell.app/docs/api/invoices/retrieve-an-invoice) · Effect: **read**

```kotlin
fun get(
        invoice: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetInvoiceResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| invoice | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetInvoiceResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.invoices.get(invoice = "1")
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

## goToCheckout

Create a checkout session

[API reference](https://sell.app/docs/api/invoices/create-a-checkout-session) · Effect: **consequential**

```kotlin
fun goToCheckout(
        invoice: String,
        requestOptions: RequestOptions? = null,
    ): SdkCreateCheckoutSessionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| invoice | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateCheckoutSessionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.invoices.goToCheckout(invoice = "9001")
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

Documented HTTP responses: 200, 201, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## getDeliverables

View invoice deliverables

[API reference](https://sell.app/docs/api/invoices/view-invoice-deliverables) · Effect: **read**

```kotlin
fun getDeliverables(
        invoice: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetInvoiceDeliverablesResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| invoice | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetInvoiceDeliverablesResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.invoices.getDeliverables(invoice = "1234")
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

## markCompleted

Mark pending invoice completed

[API reference](https://sell.app/docs/api/invoices/mark-pending-invoice-completed) · Effect: **consequential**

```kotlin
fun markCompleted(
        invoice: String,
        expectedStatus: PatchField<ExpectedStatus?> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkMarkPendingInvoiceCompletedResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| invoice | `String` | Yes |
| expectedStatus | `PatchField<ExpectedStatus?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkMarkPendingInvoiceCompletedResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.invoices.markCompleted(invoice = "1", expectedStatus = app.sell.sellapp.common.http.PatchField.Present(app.sell.sellapp.types.ExpectedStatus("PENDING")))
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

## markVoided

Mark pending invoice voided

[API reference](https://sell.app/docs/api/invoices/mark-pending-invoice-voided) · Effect: **consequential**

```kotlin
fun markVoided(
        invoice: String,
        expectedStatus: PatchField<ExpectedStatus?> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkMarkPendingInvoiceVoidedResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| invoice | `String` | Yes |
| expectedStatus | `PatchField<ExpectedStatus?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkMarkPendingInvoiceVoidedResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.invoices.markVoided(invoice = "1", expectedStatus = app.sell.sellapp.common.http.PatchField.Present(app.sell.sellapp.types.ExpectedStatus("PENDING")))
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

## issueReplacement

Issue replacement for completed invoice

[API reference](https://sell.app/docs/api/invoices/issue-replacement-for-completed-invoice) · Effect: **consequential**

```kotlin
fun issueReplacement(
        invoice: String,
        productVariants:
            IssueReplacementForCompletedInvoiceRequestApplicationJsonPropertyProductVariants,
        requestOptions: RequestOptions? = null,
    ): SdkIssueReplacementForCompletedInvoiceResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| invoice | `String` | Yes |
| productVariants | `IssueReplacementForCompletedInvoiceRequestApplicationJsonPropertyProductVariants` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkIssueReplacementForCompletedInvoiceResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.invoices.issueReplacement(invoice = "1", productVariants = ObjectMapperFactory.read("[117214]", app.sell.sellapp.models.IssueReplacementForCompletedInvoiceRequestApplicationJsonPropertyProductVariants::class.java))
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

## updateStatus

Update invoice status

[API reference](https://sell.app/docs/api/invoices/update-invoice-status) · Effect: **consequential**

```kotlin
fun updateStatus(
        invoice: String,
        status: SdkUpdateOrderStatusRequestApplicationJsonStatus,
        expectedStatus: PatchField<ExpectedStatus?> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateInvoiceStatusResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| invoice | `String` | Yes |
| status | `SdkUpdateOrderStatusRequestApplicationJsonStatus` | Yes |
| expectedStatus | `PatchField<ExpectedStatus?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateInvoiceStatusResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.invoices.updateStatus(invoice = "1", status = app.sell.sellapp.types.SdkUpdateOrderStatusRequestApplicationJsonStatus("REVIEW"), expectedStatus = app.sell.sellapp.common.http.PatchField.Present(app.sell.sellapp.types.ExpectedStatus("PENDING")))
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

## createRefund

Create invoice refund

[API reference](https://sell.app/docs/api/invoices/refund-an-invoice) · Effect: **consequential**

```kotlin
fun createRefund(
        invoice: String,
        amount: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateInvoiceRefundResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| invoice | `String` | Yes |
| amount | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateInvoiceRefundResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.invoices.createRefund(invoice = "1", amount = "12.50")
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

## retryFulfillment

Create fulfillment retry

[API reference](https://sell.app/docs/api/invoices/retry-invoice-fulfillment) · Effect: **consequential**

```kotlin
fun retryFulfillment(
        invoice: String,
        email: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateFulfillmentRetryResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| invoice | `String` | Yes |
| email | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateFulfillmentRetryResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.invoices.retryFulfillment(invoice = "1")
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

## retryDynamicDelivery

Create dynamic delivery retry

[API reference](https://sell.app/docs/api/invoices/retry-dynamic-delivery) · Effect: **consequential**

```kotlin
fun retryDynamicDelivery(
        invoice: String,
        deliveredProductId: Long,
        requestOptions: RequestOptions? = null,
    ): SdkCreateDynamicDeliveryRetryResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| invoice | `String` | Yes |
| deliveredProductId | `Long` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateDynamicDeliveryRetryResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.invoices.retryDynamicDelivery(invoice = "1", deliveredProductId = 42L)
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

## notifyFulfillment

Create fulfillment notifications

[API reference](https://sell.app/docs/api/invoices/resend-invoice-deliverables) · Effect: **consequential**

```kotlin
fun notifyFulfillment(
        invoice: String,
        email: String? = null,
        productVariantIds: List<Long>? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateFulfillmentNotificationsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| invoice | `String` | Yes |
| email | `String?` | No |
| productVariantIds | `List<Long>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateFulfillmentNotificationsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.invoices.notifyFulfillment(invoice = "1")
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

