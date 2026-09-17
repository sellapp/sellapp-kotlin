# customerPortal

[All resources](../methods.md)

## getProfile

Retrieve the signed-in customer

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```kotlin
fun getProfile(
        requestOptions: RequestOptions? = null
    ): SdkGetCustomerPortalProfileResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetCustomerPortalProfileResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), customerSession = System.getenv("SELLAPP_CUSTOMER_SESSION"), store = "")
    val result = client.customerPortal.getProfile()
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## updateProfile

Update the signed-in customer

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```kotlin
fun updateProfile(
        email: PatchField<String> = PatchField.Absent,
        name: PatchField<String?> = PatchField.Absent,
        locale: PatchField<String?> = PatchField.Absent,
        metadata: PatchField<UpdateCustomerPortalProfileRequestApplicationJsonPropertyMetadata> =
            PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateCustomerPortalProfileResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| email | `PatchField<String>` | No |
| name | `PatchField<String?>` | No |
| locale | `PatchField<String?>` | No |
| metadata | `PatchField<UpdateCustomerPortalProfileRequestApplicationJsonPropertyMetadata>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateCustomerPortalProfileResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), customerSession = System.getenv("SELLAPP_CUSTOMER_SESSION"), store = "")
    val result = client.customerPortal.updateProfile(locale = app.sell.sellapp.common.http.PatchField.Present("en-US"))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## listOrders

List customer orders

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```kotlin
fun listOrders(requestOptions: RequestOptions? = null): Page<CustomerPortalOrder>
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<CustomerPortalOrder>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), customerSession = System.getenv("SELLAPP_CUSTOMER_SESSION"), store = "")
    val result = client.customerPortal.listOrders()
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## getOrder

Retrieve a customer order

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```kotlin
fun getOrder(
        order: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetCustomerPortalOrderResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetCustomerPortalOrderResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), customerSession = System.getenv("SELLAPP_CUSTOMER_SESSION"), store = "")
    val result = client.customerPortal.getOrder(order = "9001")
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## listSubscriptions

List customer subscriptions

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```kotlin
fun listSubscriptions(
        requestOptions: RequestOptions? = null
    ): SdkListCustomerPortalSubscriptionsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkListCustomerPortalSubscriptionsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), customerSession = System.getenv("SELLAPP_CUSTOMER_SESSION"), store = "")
    val result = client.customerPortal.listSubscriptions()
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## getSubscription

Retrieve a customer subscription

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```kotlin
fun getSubscription(
        subscription: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetCustomerPortalSubscriptionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| subscription | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetCustomerPortalSubscriptionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), customerSession = System.getenv("SELLAPP_CUSTOMER_SESSION"), store = "")
    val result = client.customerPortal.getSubscription(subscription = "991")
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## getSubscriptionCapabilities

Retrieve subscription capabilities

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```kotlin
fun getSubscriptionCapabilities(
        subscription: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetCustomerPortalSubscriptionCapabilitiesResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| subscription | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetCustomerPortalSubscriptionCapabilitiesResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), customerSession = System.getenv("SELLAPP_CUSTOMER_SESSION"), store = "")
    val result = client.customerPortal.getSubscriptionCapabilities(subscription = "42")
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## listEntitlements

List customer entitlements

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```kotlin
fun listEntitlements(
        requestOptions: RequestOptions? = null
    ): SdkListCustomerPortalEntitlementsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkListCustomerPortalEntitlementsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), customerSession = System.getenv("SELLAPP_CUSTOMER_SESSION"), store = "")
    val result = client.customerPortal.listEntitlements()
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## cancelSubscriptionAtPeriodEnd

Cancel at period end

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```kotlin
fun cancelSubscriptionAtPeriodEnd(
        productSubscription: String,
        previewId: String? = null,
        productVariantId: Long? = null,
        renewalDate: String? = null,
        returnUrl: String? = null,
        reason: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCancelCustomerSubscriptionAtPeriodEndResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| previewId | `String?` | No |
| productVariantId | `Long?` | No |
| renewalDate | `String?` | No |
| returnUrl | `String?` | No |
| reason | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCancelCustomerSubscriptionAtPeriodEndResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), customerSession = System.getenv("SELLAPP_CUSTOMER_SESSION"), store = "")
    val result = client.customerPortal.cancelSubscriptionAtPeriodEnd(productSubscription = "42", reason = "Customer requested this change", requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## cancelSubscriptionImmediately

Cancel immediately

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```kotlin
fun cancelSubscriptionImmediately(
        productSubscription: String,
        previewId: String? = null,
        productVariantId: Long? = null,
        renewalDate: String? = null,
        returnUrl: String? = null,
        reason: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCancelCustomerSubscriptionImmediatelyResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| previewId | `String?` | No |
| productVariantId | `Long?` | No |
| renewalDate | `String?` | No |
| returnUrl | `String?` | No |
| reason | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCancelCustomerSubscriptionImmediatelyResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), customerSession = System.getenv("SELLAPP_CUSTOMER_SESSION"), store = "")
    val result = client.customerPortal.cancelSubscriptionImmediately(productSubscription = "42", reason = "Customer requested this change", requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## pauseSubscription

Pause a subscription

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```kotlin
fun pauseSubscription(
        productSubscription: String,
        previewId: String? = null,
        productVariantId: Long? = null,
        renewalDate: String? = null,
        returnUrl: String? = null,
        reason: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkPauseCustomerSubscriptionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| previewId | `String?` | No |
| productVariantId | `Long?` | No |
| renewalDate | `String?` | No |
| returnUrl | `String?` | No |
| reason | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkPauseCustomerSubscriptionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), customerSession = System.getenv("SELLAPP_CUSTOMER_SESSION"), store = "")
    val result = client.customerPortal.pauseSubscription(productSubscription = "42", reason = "Customer requested this change", requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## resumeSubscription

Resume a subscription

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```kotlin
fun resumeSubscription(
        productSubscription: String,
        previewId: String? = null,
        productVariantId: Long? = null,
        renewalDate: String? = null,
        returnUrl: String? = null,
        reason: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkResumeCustomerSubscriptionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| previewId | `String?` | No |
| productVariantId | `Long?` | No |
| renewalDate | `String?` | No |
| returnUrl | `String?` | No |
| reason | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkResumeCustomerSubscriptionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), customerSession = System.getenv("SELLAPP_CUSTOMER_SESSION"), store = "")
    val result = client.customerPortal.resumeSubscription(productSubscription = "42", reason = "Customer requested this change", requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## updateSubscriptionPaymentMethod

Update payment method

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```kotlin
fun updateSubscriptionPaymentMethod(
        productSubscription: String,
        previewId: String? = null,
        productVariantId: Long? = null,
        renewalDate: String? = null,
        returnUrl: String? = null,
        reason: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateCustomerSubscriptionPaymentMethodResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| previewId | `String?` | No |
| productVariantId | `Long?` | No |
| renewalDate | `String?` | No |
| returnUrl | `String?` | No |
| reason | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateCustomerSubscriptionPaymentMethodResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), customerSession = System.getenv("SELLAPP_CUSTOMER_SESSION"), store = "")
    val result = client.customerPortal.updateSubscriptionPaymentMethod(productSubscription = "42", reason = "Customer requested this change", requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## previewSubscriptionPlanChange

Preview a plan change

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```kotlin
fun previewSubscriptionPlanChange(
        productSubscription: String,
        previewId: String? = null,
        productVariantId: Long? = null,
        renewalDate: String? = null,
        returnUrl: String? = null,
        reason: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkPreviewCustomerSubscriptionPlanChangeResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| previewId | `String?` | No |
| productVariantId | `Long?` | No |
| renewalDate | `String?` | No |
| returnUrl | `String?` | No |
| reason | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkPreviewCustomerSubscriptionPlanChangeResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), customerSession = System.getenv("SELLAPP_CUSTOMER_SESSION"), store = "")
    val result = client.customerPortal.previewSubscriptionPlanChange(productSubscription = "42", productVariantId = 84L, requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## confirmSubscriptionPlanChange

Confirm a plan change

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```kotlin
fun confirmSubscriptionPlanChange(
        productSubscription: String,
        previewId: String? = null,
        productVariantId: Long? = null,
        renewalDate: String? = null,
        returnUrl: String? = null,
        reason: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkConfirmCustomerSubscriptionPlanChangeResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| previewId | `String?` | No |
| productVariantId | `Long?` | No |
| renewalDate | `String?` | No |
| returnUrl | `String?` | No |
| reason | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkConfirmCustomerSubscriptionPlanChangeResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), customerSession = System.getenv("SELLAPP_CUSTOMER_SESSION"), store = "")
    val result = client.customerPortal.confirmSubscriptionPlanChange(productSubscription = "42", previewId = "preview_01K4", requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## previewSubscriptionRenewalDateChange

Preview a renewal-date change

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```kotlin
fun previewSubscriptionRenewalDateChange(
        productSubscription: String,
        previewId: String? = null,
        productVariantId: Long? = null,
        renewalDate: String? = null,
        returnUrl: String? = null,
        reason: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkPreviewCustomerSubscriptionRenewalDateChangeResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| previewId | `String?` | No |
| productVariantId | `Long?` | No |
| renewalDate | `String?` | No |
| returnUrl | `String?` | No |
| reason | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkPreviewCustomerSubscriptionRenewalDateChangeResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), customerSession = System.getenv("SELLAPP_CUSTOMER_SESSION"), store = "")
    val result = client.customerPortal.previewSubscriptionRenewalDateChange(productSubscription = "42", renewalDate = "2026-10-15", requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## confirmSubscriptionRenewalDateChange

Confirm a renewal-date change

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```kotlin
fun confirmSubscriptionRenewalDateChange(
        productSubscription: String,
        previewId: String? = null,
        productVariantId: Long? = null,
        renewalDate: String? = null,
        returnUrl: String? = null,
        reason: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkConfirmCustomerSubscriptionRenewalDateChangeResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| previewId | `String?` | No |
| productVariantId | `Long?` | No |
| renewalDate | `String?` | No |
| returnUrl | `String?` | No |
| reason | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkConfirmCustomerSubscriptionRenewalDateChangeResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), customerSession = System.getenv("SELLAPP_CUSTOMER_SESSION"), store = "")
    val result = client.customerPortal.confirmSubscriptionRenewalDateChange(productSubscription = "42", previewId = "preview_01K4", requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

