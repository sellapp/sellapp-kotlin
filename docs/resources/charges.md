# charges

[All resources](../methods.md)

## list

List all charges

[API reference](https://sell.app/docs/api/charges/list-all-charges) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListChargesResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListChargesResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.charges.list()
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

Create a charge

[API reference](https://sell.app/docs/api/charges/create-a-charge) · Effect: **consequential**

```kotlin
fun create(
        email: String,
        returnUrl: String,
        cancelUrl: String? = null,
        webhook: String? = null,
        reference: String? = null,
        description: String? = null,
        currency: String? = null,
        total: Long? = null,
        paymentMethod: PaymentMethod? = null,
        paymentMethods: List<PaymentMethod>? = null,
        customPaymentMethodId: String? = null,
        customPaymentMethodIds: List<String>? = null,
        useAllPaymentMethods: Boolean? = null,
        deliverable: CreateChargeRequestApplicationJsonPropertyDeliverable? = null,
        metadata: CreateChargeRequestApplicationJsonPropertyMetadata? = null,
        couponCode: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateChargeResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| email | `String` | Yes |
| returnUrl | `String` | Yes |
| cancelUrl | `String?` | No |
| webhook | `String?` | No |
| reference | `String?` | No |
| description | `String?` | No |
| currency | `String?` | No |
| total | `Long?` | No |
| paymentMethod | `PaymentMethod?` | No |
| paymentMethods | `List<PaymentMethod>?` | No |
| customPaymentMethodId | `String?` | No |
| customPaymentMethodIds | `List<String>?` | No |
| useAllPaymentMethods | `Boolean?` | No |
| deliverable | `CreateChargeRequestApplicationJsonPropertyDeliverable?` | No |
| metadata | `CreateChargeRequestApplicationJsonPropertyMetadata?` | No |
| couponCode | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateChargeResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.charges.create(email = "sofia.rivera@example.com", returnUrl = "https://example.com/launch-complete", reference = "One more thing launch", currency = "USD", total = 10000L, paymentMethod = app.sell.sellapp.types.PaymentMethod("PAYPAL"))
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

## get

Retrieve a charge

[API reference](https://sell.app/docs/api/charges/retrieve-a-charge) · Effect: **read**

```kotlin
fun get(
        charge: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetChargeResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| charge | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetChargeResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.charges.get(charge = "1")
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

Mark pending charge completed

[API reference](https://sell.app/docs/api/charges/mark-pending-charge-completed) · Effect: **consequential**

```kotlin
fun markCompleted(
        chargeId: String,
        requestOptions: RequestOptions? = null,
    ): SdkMarkPendingChargeCompletedResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| chargeId | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkMarkPendingChargeCompletedResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.charges.markCompleted(chargeId = "1")
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

Mark pending charge voided

[API reference](https://sell.app/docs/api/charges/mark-pending-charge-voided) · Effect: **consequential**

```kotlin
fun markVoided(
        chargeId: String,
        requestOptions: RequestOptions? = null,
    ): SdkMarkPendingChargeVoidedResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| chargeId | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkMarkPendingChargeVoidedResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.charges.markVoided(chargeId = "1")
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

