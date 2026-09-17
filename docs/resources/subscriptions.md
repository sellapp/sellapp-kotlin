# subscriptions

[All resources](../methods.md)

## cancel

Cancel a subscription

[API reference](https://sell.app/docs/api/subscriptions/cancel-a-subscription-immediately-with-a-refund) · Effect: **consequential**

```kotlin
fun cancel(
        subscription: String,
        cancelAtPeriodEnd: Boolean,
        refundLastPayment: PatchField<Boolean> = PatchField.Absent,
        proRatedRefund: PatchField<Boolean> = PatchField.Absent,
        idempotencyKey: PatchField<String?> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkCancelSubscriptionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| subscription | `String` | Yes |
| cancelAtPeriodEnd | `Boolean` | Yes |
| refundLastPayment | `PatchField<Boolean>` | No |
| proRatedRefund | `PatchField<Boolean>` | No |
| idempotencyKey | `PatchField<String?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCancelSubscriptionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.subscriptions.cancel(subscription = "55", cancelAtPeriodEnd = true, idempotencyKey = app.sell.sellapp.common.http.PatchField.Present("design-kit-subscription-55-cancel-v1"))
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

## getCapabilities

View subscription capabilities

[API reference](https://sell.app/docs/api/subscriptions/view-subscription-capabilities) · Effect: **read**

```kotlin
fun getCapabilities(
        productSubscription: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetSubscriptionCapabilitiesResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetSubscriptionCapabilitiesResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.subscriptions.getCapabilities(productSubscription = "1")
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

## cancelAtPeriodEnd

Cancel a subscription at period end

[API reference](https://sell.app/docs/api/subscriptions/cancel-at-period-end) · Effect: **consequential**

```kotlin
fun cancelAtPeriodEnd(
        productSubscription: String,
        idempotencyKey: String? = null,
        reason: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCancelSubscriptionAtPeriodEndResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| idempotencyKey | `String?` | No |
| reason | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCancelSubscriptionAtPeriodEndResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.subscriptions.cancelAtPeriodEnd(productSubscription = "55", reason = "Customer request")
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

## cancelImmediately

Cancel a subscription immediately

[API reference](https://sell.app/docs/api/subscriptions/cancel-immediately) · Effect: **consequential**

```kotlin
fun cancelImmediately(
        productSubscription: String,
        idempotencyKey: String? = null,
        reason: String? = null,
        refundLastPayment: Boolean? = null,
        proRatedRefund: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCancelSubscriptionImmediatelyResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| idempotencyKey | `String?` | No |
| reason | `String?` | No |
| refundLastPayment | `Boolean?` | No |
| proRatedRefund | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCancelSubscriptionImmediatelyResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.subscriptions.cancelImmediately(productSubscription = "55", reason = "Customer request")
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

## pause

Pause a subscription

[API reference](https://sell.app/docs/api/subscriptions/pause-a-subscription) · Effect: **consequential**

```kotlin
fun pause(
        productSubscription: String,
        idempotencyKey: String? = null,
        resumeAt: OffsetDateTime? = null,
        reason: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkPauseSubscriptionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| idempotencyKey | `String?` | No |
| resumeAt | `OffsetDateTime?` | No |
| reason | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkPauseSubscriptionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.subscriptions.pause(productSubscription = "55", resumeAt = java.time.OffsetDateTime.parse("2026-10-10T12:00:00Z"), reason = "Customer request")
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

## resume

Resume a subscription

[API reference](https://sell.app/docs/api/subscriptions/resume-a-subscription) · Effect: **consequential**

```kotlin
fun resume(
        productSubscription: String,
        idempotencyKey: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkResumeSubscriptionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| idempotencyKey | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkResumeSubscriptionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.subscriptions.resume(productSubscription = "55")
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

## updatePaymentMethod

Update a subscription payment method

[API reference](https://sell.app/docs/api/subscriptions/update-payment-method) · Effect: **consequential**

```kotlin
fun updatePaymentMethod(
        productSubscription: String,
        idempotencyKey: String? = null,
        requestOptions: RequestOptions? = null,
    ): String
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| idempotencyKey | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `String`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.subscriptions.updatePaymentMethod(productSubscription = "1")
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

Documented HTTP responses: 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## previewPlanChange

Preview a subscription plan change

[API reference](https://sell.app/docs/api/subscriptions/preview-plan-change) · Effect: **consequential**

```kotlin
fun previewPlanChange(
        productSubscription: String,
        targetVariantId: Long,
        idempotencyKey: String? = null,
        effectiveTiming: SdkConfirmSubscriptionPlanChangeRequestApplicationJsonEffectiveTiming? =
            null,
        prorationBehavior:
            SdkConfirmSubscriptionPlanChangeRequestApplicationJsonProrationBehavior? =
            null,
        metadata: PreviewSubscriptionPlanChangeRequestApplicationJsonPropertyMetadata? = null,
        requestOptions: RequestOptions? = null,
    ): String
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| targetVariantId | `Long` | Yes |
| idempotencyKey | `String?` | No |
| effectiveTiming | `SdkConfirmSubscriptionPlanChangeRequestApplicationJsonEffectiveTiming?` | No |
| prorationBehavior | `SdkConfirmSubscriptionPlanChangeRequestApplicationJsonProrationBehavior?` | No |
| metadata | `PreviewSubscriptionPlanChangeRequestApplicationJsonPropertyMetadata?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `String`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.subscriptions.previewPlanChange(productSubscription = "1", targetVariantId = 4321L, effectiveTiming = app.sell.sellapp.types.SdkConfirmSubscriptionPlanChangeRequestApplicationJsonEffectiveTiming("immediate"), prorationBehavior = app.sell.sellapp.types.SdkConfirmSubscriptionPlanChangeRequestApplicationJsonProrationBehavior("provider_default"))
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

Documented HTTP responses: 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## confirmPlanChange

Confirm a subscription plan change

[API reference](https://sell.app/docs/api/subscriptions/confirm-plan-change) · Effect: **consequential**

```kotlin
fun confirmPlanChange(
        productSubscription: String,
        targetVariantId: Long,
        previewToken: String,
        idempotencyKey: String? = null,
        effectiveTiming: SdkConfirmSubscriptionPlanChangeRequestApplicationJsonEffectiveTiming? =
            null,
        prorationBehavior:
            SdkConfirmSubscriptionPlanChangeRequestApplicationJsonProrationBehavior? =
            null,
        metadata: ConfirmSubscriptionPlanChangeRequestApplicationJsonPropertyMetadata? = null,
        requestOptions: RequestOptions? = null,
    ): String
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| targetVariantId | `Long` | Yes |
| previewToken | `String` | Yes |
| idempotencyKey | `String?` | No |
| effectiveTiming | `SdkConfirmSubscriptionPlanChangeRequestApplicationJsonEffectiveTiming?` | No |
| prorationBehavior | `SdkConfirmSubscriptionPlanChangeRequestApplicationJsonProrationBehavior?` | No |
| metadata | `ConfirmSubscriptionPlanChangeRequestApplicationJsonPropertyMetadata?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `String`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.subscriptions.confirmPlanChange(productSubscription = "1", targetVariantId = 4321L, previewToken = "subprev_9c4b2f")
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

Documented HTTP responses: 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## previewRenewalDate

Preview a subscription renewal date change

[API reference](https://sell.app/docs/api/subscriptions/preview-renewal-date-change) · Effect: **consequential**

```kotlin
fun previewRenewalDate(
        productSubscription: String,
        renewalDate: OffsetDateTime,
        idempotencyKey: String? = null,
        reason: String? = null,
        metadata: PreviewSubscriptionRenewalDateChangeRequestApplicationJsonPropertyMetadata? =
            null,
        requestOptions: RequestOptions? = null,
    ): SdkPreviewSubscriptionRenewalDateChangeResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| renewalDate | `OffsetDateTime` | Yes |
| idempotencyKey | `String?` | No |
| reason | `String?` | No |
| metadata | `PreviewSubscriptionRenewalDateChangeRequestApplicationJsonPropertyMetadata?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkPreviewSubscriptionRenewalDateChangeResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.subscriptions.previewRenewalDate(productSubscription = "1", renewalDate = java.time.OffsetDateTime.parse("2026-10-01T12:00:00Z"), reason = "Align Maya's membership with the monthly reading circle.")
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

## confirmRenewalDate

Confirm a subscription renewal date change

[API reference](https://sell.app/docs/api/subscriptions/confirm-renewal-date-change) · Effect: **consequential**

```kotlin
fun confirmRenewalDate(
        productSubscription: String,
        renewalDate: OffsetDateTime,
        idempotencyKey: String? = null,
        previewToken: String? = null,
        reason: String? = null,
        metadata: ConfirmSubscriptionRenewalDateChangeRequestApplicationJsonPropertyMetadata? =
            null,
        requestOptions: RequestOptions? = null,
    ): SdkConfirmSubscriptionRenewalDateChangeResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| renewalDate | `OffsetDateTime` | Yes |
| idempotencyKey | `String?` | No |
| previewToken | `String?` | No |
| reason | `String?` | No |
| metadata | `ConfirmSubscriptionRenewalDateChangeRequestApplicationJsonPropertyMetadata?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkConfirmSubscriptionRenewalDateChangeResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.subscriptions.confirmRenewalDate(productSubscription = "1", renewalDate = java.time.OffsetDateTime.parse("2026-10-01T12:00:00Z"), previewToken = "subprev_project_library_55", reason = "Align Maya's membership with the monthly reading circle.")
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

List subscriptions

[API reference](https://sell.app/docs/api/subscriptions/read-subscriptions) · Effect: **read**

```kotlin
fun list(
        requestOptions: RequestOptions? = null
    ): Page<ListSubscriptionsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListSubscriptionsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.subscriptions.list()
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

## search

Search subscriptions

[API reference](https://sell.app/docs/api/subscriptions/read-subscriptions) · Effect: **read**

```kotlin
fun search(
        search: String? = null,
        status: String? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SearchSubscriptionsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| search | `String?` | No |
| status | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SearchSubscriptionsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.subscriptions.search(search = "maya.chen@example.com", status = "active")
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

## get

Retrieve a subscription

[API reference](https://sell.app/docs/api/subscriptions/read-subscriptions) · Effect: **read**

```kotlin
fun get(
        productSubscription: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetSubscriptionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetSubscriptionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.subscriptions.get(productSubscription = "991")
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

