# orders

[All resources](../methods.md)

## list

List orders

[API reference](https://sell.app/docs/api/orders/list-orders) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListOrdersResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListOrdersResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.orders.list()
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

Create an order

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```kotlin
fun create(
        customerEmail: String,
        paymentMethod: PaymentMethod,
        productVariants: CreateOrderRequestApplicationJsonPropertyProductVariants,
        customerIp: String? = null,
        coupon: String? = null,
        vatId: String? = null,
        country: String? = null,
        affiliate: String? = null,
        extra: CreateOrderRequestApplicationJsonPropertyExtra? = null,
        customPaymentMethodId: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateOrderResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| customerEmail | `String` | Yes |
| paymentMethod | `PaymentMethod` | Yes |
| productVariants | `CreateOrderRequestApplicationJsonPropertyProductVariants` | Yes |
| customerIp | `String?` | No |
| coupon | `String?` | No |
| vatId | `String?` | No |
| country | `String?` | No |
| affiliate | `String?` | No |
| extra | `CreateOrderRequestApplicationJsonPropertyExtra?` | No |
| customPaymentMethodId | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateOrderResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.orders.create(customerEmail = "maya@example.com", paymentMethod = app.sell.sellapp.types.PaymentMethod("STRIPE"), productVariants = ObjectMapperFactory.read("{\"4321\":{\"quantity\":1}}", app.sell.sellapp.models.CreateOrderRequestApplicationJsonPropertyProductVariants::class.java), requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
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

Documented HTTP responses: 201, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## search

Search orders

[API reference](https://sell.app/docs/api/orders/search-orders) · Effect: **read**

```kotlin
fun search(
        filters: List<SearchOrdersRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<SearchOrdersRequestApplicationJsonPropertySortItem>? = null,
        pagination: SearchOrdersRequestApplicationJsonPropertyPagination? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SearchOrdersResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| filters | `List<SearchOrdersRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<SearchOrdersRequestApplicationJsonPropertySortItem>?` | No |
| pagination | `SearchOrdersRequestApplicationJsonPropertyPagination?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SearchOrdersResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.orders.search(filters = listOf(ObjectMapperFactory.read("{\"field\":\"transaction_id\",\"operator\":\"contains\",\"value\":\"pi_3Example\"}", app.sell.sellapp.models.SearchOrdersRequestApplicationJsonPropertyFiltersItem::class.java), ObjectMapperFactory.read("{\"field\":\"status\",\"operator\":\"in\",\"value\":[\"COMPLETED\"]}", app.sell.sellapp.models.SearchOrdersRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.SearchOrdersRequestApplicationJsonPropertySortItem::class.java)), pagination = ObjectMapperFactory.read("{\"page\":1,\"limit\":25}", app.sell.sellapp.models.SearchOrdersRequestApplicationJsonPropertyPagination::class.java))
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

Retrieve an order

[API reference](https://sell.app/docs/api/orders/retrieve-an-order) · Effect: **read**

```kotlin
fun get(
        order: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetOrderResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetOrderResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.orders.get(order = "1042")
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

Update order status

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```kotlin
fun updateStatus(
        order: String,
        status: SdkUpdateOrderStatusRequestApplicationJsonStatus,
        expectedStatus: PatchField<ExpectedStatus?> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateOrderStatusResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `String` | Yes |
| status | `SdkUpdateOrderStatusRequestApplicationJsonStatus` | Yes |
| expectedStatus | `PatchField<ExpectedStatus?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateOrderStatusResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.orders.updateStatus(order = "9001", status = app.sell.sellapp.types.SdkUpdateOrderStatusRequestApplicationJsonStatus("COMPLETED"), expectedStatus = app.sell.sellapp.common.http.PatchField.Present(app.sell.sellapp.types.ExpectedStatus("PAID")), requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## createCheckout

Create order checkout

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```kotlin
fun createCheckout(
        order: String,
        expectedStatus: ExpectedStatus? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateOrderCheckoutResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `String` | Yes |
| expectedStatus | `ExpectedStatus?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateOrderCheckoutResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.orders.createCheckout(order = "9001", requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
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

Documented HTTP responses: 200, 201, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## createReplacement

Issue replacements

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```kotlin
fun createReplacement(
        order: String,
        productVariants: CreateOrderReplacementRequestApplicationJsonPropertyProductVariants,
        requestOptions: RequestOptions? = null,
    ): SdkCreateOrderReplacementResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `String` | Yes |
| productVariants | `CreateOrderReplacementRequestApplicationJsonPropertyProductVariants` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateOrderReplacementResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.orders.createReplacement(order = "9001", productVariants = ObjectMapperFactory.read("[4321]", app.sell.sellapp.models.CreateOrderReplacementRequestApplicationJsonPropertyProductVariants::class.java), requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## createRefund

Refund an order

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```kotlin
fun createRefund(
        order: String,
        amount: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateOrderRefundResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `String` | Yes |
| amount | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateOrderRefundResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.orders.createRefund(order = "9001", amount = "5.00", requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## retryFulfillment

Retry fulfillment

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```kotlin
fun retryFulfillment(
        order: String,
        email: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkRetryOrderFulfillmentResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `String` | Yes |
| email | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkRetryOrderFulfillmentResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.orders.retryFulfillment(order = "9001", email = "maya@example.com", requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## retryDynamicDelivery

Retry dynamic delivery

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```kotlin
fun retryDynamicDelivery(
        order: String,
        deliveredProductId: Long,
        requestOptions: RequestOptions? = null,
    ): SdkRetryOrderDynamicDeliveryResponseValue202ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `String` | Yes |
| deliveredProductId | `Long` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkRetryOrderDynamicDeliveryResponseValue202ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.orders.retryDynamicDelivery(order = "9001", deliveredProductId = 81L, requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
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

Documented HTTP responses: 202, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## sendFulfillmentNotifications

Send fulfillment notifications

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```kotlin
fun sendFulfillmentNotifications(
        order: String,
        email: String? = null,
        productVariantIds: List<Long>? = null,
        requestOptions: RequestOptions? = null,
    ): SdkSendOrderFulfillmentNotificationsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `String` | Yes |
| email | `String?` | No |
| productVariantIds | `List<Long>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkSendOrderFulfillmentNotificationsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.orders.sendFulfillmentNotifications(order = "9001", email = "maya@example.com", productVariantIds = listOf(4321L), requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## listDeliverables

List order deliverables

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **read**

```kotlin
fun listDeliverables(
        order: String,
        requestOptions: RequestOptions? = null,
    ): SdkListOrderDeliverablesResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkListOrderDeliverablesResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.orders.listDeliverables(order = "9001")
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## createFromWallet

Create and pay an order from a wallet

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```kotlin
fun createFromWallet(
        customerEmail: String,
        productVariants: CreateWalletOrderRequestApplicationJsonPropertyProductVariants,
        customerIp: String? = null,
        coupon: String? = null,
        vatId: String? = null,
        country: String? = null,
        affiliate: String? = null,
        extra: CreateWalletOrderRequestApplicationJsonPropertyExtra? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateWalletOrderResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| customerEmail | `String` | Yes |
| productVariants | `CreateWalletOrderRequestApplicationJsonPropertyProductVariants` | Yes |
| customerIp | `String?` | No |
| coupon | `String?` | No |
| vatId | `String?` | No |
| country | `String?` | No |
| affiliate | `String?` | No |
| extra | `CreateWalletOrderRequestApplicationJsonPropertyExtra?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateWalletOrderResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.orders.createFromWallet(customerEmail = "maya.chen@example.com", country = "US", productVariants = ObjectMapperFactory.read("{\"4321\":{\"quantity\":1}}", app.sell.sellapp.models.CreateWalletOrderRequestApplicationJsonPropertyProductVariants::class.java), requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
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

Documented HTTP responses: 201, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## payFromWallet

Pay an existing order from its customer wallet

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```kotlin
fun payFromWallet(
        order: String,
        expectedStatus: ExpectedStatus? = null,
        requestOptions: RequestOptions? = null,
    ): SdkPayOrderFromWalletResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `String` | Yes |
| expectedStatus | `ExpectedStatus?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkPayOrderFromWalletResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.orders.payFromWallet(order = "42", expectedStatus = app.sell.sellapp.types.ExpectedStatus("PENDING"), requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
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

