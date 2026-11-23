# storeSettings

[All resources](../methods.md)

## get

Retrieve store settings

[API reference](https://sell.app/docs/api/store-settings/retrieve-store-settings) · Effect: **read**

```kotlin
fun get(
        requestOptions: RequestOptions? = null
    ): SdkGetStoreSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetStoreSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.get()
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

## replaceGeneral

Update general store settings

[API reference](https://sell.app/docs/api/store-settings/update-general-settings) · Effect: **consequential**

```kotlin
fun replaceGeneral(
        name: String,
        visibility: StoreVisibility,
        timezone: String,
        currency: String,
        darkMode: DarkMode? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceGeneralStoreSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| name | `String` | Yes |
| visibility | `StoreVisibility` | Yes |
| timezone | `String` | Yes |
| currency | `String` | Yes |
| darkMode | `DarkMode?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceGeneralStoreSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.replaceGeneral(name = "Launch Lab", visibility = app.sell.sellapp.types.StoreVisibility("HIDDEN"), timezone = "Europe/London", currency = "USD")
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

## updateGeneral

Update general store settings

[API reference](https://sell.app/docs/api/store-settings/update-general-settings) · Effect: **consequential**

```kotlin
fun updateGeneral(
        name: PatchField<String> = PatchField.Absent,
        visibility: PatchField<StoreVisibility> = PatchField.Absent,
        timezone: PatchField<String> = PatchField.Absent,
        currency: PatchField<String> = PatchField.Absent,
        darkMode: PatchField<DarkMode?> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateGeneralStoreSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| name | `PatchField<String>` | No |
| visibility | `PatchField<StoreVisibility>` | No |
| timezone | `PatchField<String>` | No |
| currency | `PatchField<String>` | No |
| darkMode | `PatchField<DarkMode?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateGeneralStoreSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.updateGeneral(name = app.sell.sellapp.common.http.PatchField.Present("Launch Lab"))
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

## replaceAnalytics

Update analytics settings

[API reference](https://sell.app/docs/api/store-settings/update-analytics-settings) · Effect: **consequential**

```kotlin
fun replaceAnalytics(
        ga4MeasurementId: String? = null,
        metaPixelId: String? = null,
        tiktokPixelId: String? = null,
        ga4ApiSecret: String? = null,
        metaAccessToken: String? = null,
        tiktokAccessToken: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceAnalyticsSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| ga4MeasurementId | `String?` | No |
| metaPixelId | `String?` | No |
| tiktokPixelId | `String?` | No |
| ga4ApiSecret | `String?` | No |
| metaAccessToken | `String?` | No |
| tiktokAccessToken | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceAnalyticsSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.replaceAnalytics(ga4MeasurementId = null)
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

## updateAnalytics

Update analytics settings

[API reference](https://sell.app/docs/api/store-settings/update-analytics-settings) · Effect: **consequential**

```kotlin
fun updateAnalytics(
        ga4MeasurementId: PatchField<String?> = PatchField.Absent,
        metaPixelId: PatchField<String?> = PatchField.Absent,
        tiktokPixelId: PatchField<String?> = PatchField.Absent,
        ga4ApiSecret: PatchField<String?> = PatchField.Absent,
        metaAccessToken: PatchField<String?> = PatchField.Absent,
        tiktokAccessToken: PatchField<String?> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateAnalyticsSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| ga4MeasurementId | `PatchField<String?>` | No |
| metaPixelId | `PatchField<String?>` | No |
| tiktokPixelId | `PatchField<String?>` | No |
| ga4ApiSecret | `PatchField<String?>` | No |
| metaAccessToken | `PatchField<String?>` | No |
| tiktokAccessToken | `PatchField<String?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateAnalyticsSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.updateAnalytics(ga4MeasurementId = app.sell.sellapp.common.http.PatchField.Present(null))
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

## replaceMarketing

Update marketing settings

[API reference](https://sell.app/docs/api/store-settings/update-marketing-settings) · Effect: **consequential**

```kotlin
fun replaceMarketing(
        abandonedCart: ReplaceMarketingSettingsRequestApplicationJsonPropertyAbandonedCart,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceMarketingSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| abandonedCart | `ReplaceMarketingSettingsRequestApplicationJsonPropertyAbandonedCart` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceMarketingSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.replaceMarketing(abandonedCart = ObjectMapperFactory.read("{\"enabled\":false}", app.sell.sellapp.models.ReplaceMarketingSettingsRequestApplicationJsonPropertyAbandonedCart::class.java))
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

## updateMarketing

Update marketing settings

[API reference](https://sell.app/docs/api/store-settings/update-marketing-settings) · Effect: **consequential**

```kotlin
fun updateMarketing(
        abandonedCart: UpdateMarketingSettingsRequestApplicationJsonPropertyAbandonedCart,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateMarketingSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| abandonedCart | `UpdateMarketingSettingsRequestApplicationJsonPropertyAbandonedCart` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateMarketingSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.updateMarketing(abandonedCart = ObjectMapperFactory.read("{\"enabled\":false}", app.sell.sellapp.models.UpdateMarketingSettingsRequestApplicationJsonPropertyAbandonedCart::class.java))
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

## getCheckout

Retrieve checkout settings

[API reference](https://sell.app/docs/api/store-settings/checkout-settings) · Effect: **read**

```kotlin
fun getCheckout(
        requestOptions: RequestOptions? = null
    ): SdkGetCheckoutSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetCheckoutSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.getCheckout()
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

## replaceCheckout

Update checkout settings

[API reference](https://sell.app/docs/api/store-settings/checkout-settings) · Effect: **consequential**

```kotlin
fun replaceCheckout(
        shoppingCartEnabled: Boolean,
        customerEmailRequired: Boolean,
        allowVpnPurchases: Boolean,
        blacklistOnDispute: Boolean,
        minimumSpend: String?,
        billingDescriptor: String?,
        attemptsPerCustomer: Long,
        attemptsPerIp: Long?,
        attemptsPerEmail: Long?,
        attemptsPerFingerprint: Long?,
        rateLimitWindowSeconds: Long,
        crypto: ReplaceCheckoutSettingsRequestApplicationJsonPropertyCrypto? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceCheckoutSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| shoppingCartEnabled | `Boolean` | Yes |
| customerEmailRequired | `Boolean` | Yes |
| allowVpnPurchases | `Boolean` | Yes |
| blacklistOnDispute | `Boolean` | Yes |
| minimumSpend | `String?` | No |
| billingDescriptor | `String?` | No |
| attemptsPerCustomer | `Long` | Yes |
| attemptsPerIp | `Long?` | No |
| attemptsPerEmail | `Long?` | No |
| attemptsPerFingerprint | `Long?` | No |
| rateLimitWindowSeconds | `Long` | Yes |
| crypto | `ReplaceCheckoutSettingsRequestApplicationJsonPropertyCrypto?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceCheckoutSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.replaceCheckout(shoppingCartEnabled = true, customerEmailRequired = true, allowVpnPurchases = true, blacklistOnDispute = true, minimumSpend = "5.00", billingDescriptor = "LAUNCH LAB", attemptsPerCustomer = 5L, attemptsPerIp = 20L, attemptsPerEmail = null, attemptsPerFingerprint = null, rateLimitWindowSeconds = 3600L, crypto = ObjectMapperFactory.read("{\"underpaid_percentage\":2,\"minimum_confirmations\":2}", app.sell.sellapp.models.ReplaceCheckoutSettingsRequestApplicationJsonPropertyCrypto::class.java))
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

## updateCheckout

Update checkout settings

[API reference](https://sell.app/docs/api/store-settings/checkout-settings) · Effect: **consequential**

```kotlin
fun updateCheckout(
        shoppingCartEnabled: PatchField<Boolean> = PatchField.Absent,
        customerEmailRequired: PatchField<Boolean> = PatchField.Absent,
        allowVpnPurchases: PatchField<Boolean> = PatchField.Absent,
        blacklistOnDispute: PatchField<Boolean> = PatchField.Absent,
        minimumSpend: PatchField<String?> = PatchField.Absent,
        billingDescriptor: PatchField<String?> = PatchField.Absent,
        attemptsPerCustomer: PatchField<Long> = PatchField.Absent,
        attemptsPerIp: PatchField<Long?> = PatchField.Absent,
        attemptsPerEmail: PatchField<Long?> = PatchField.Absent,
        attemptsPerFingerprint: PatchField<Long?> = PatchField.Absent,
        rateLimitWindowSeconds: PatchField<Long> = PatchField.Absent,
        crypto: PatchField<UpdateCheckoutSettingsRequestApplicationJsonPropertyCrypto?> =
            PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateCheckoutSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| shoppingCartEnabled | `PatchField<Boolean>` | No |
| customerEmailRequired | `PatchField<Boolean>` | No |
| allowVpnPurchases | `PatchField<Boolean>` | No |
| blacklistOnDispute | `PatchField<Boolean>` | No |
| minimumSpend | `PatchField<String?>` | No |
| billingDescriptor | `PatchField<String?>` | No |
| attemptsPerCustomer | `PatchField<Long>` | No |
| attemptsPerIp | `PatchField<Long?>` | No |
| attemptsPerEmail | `PatchField<Long?>` | No |
| attemptsPerFingerprint | `PatchField<Long?>` | No |
| rateLimitWindowSeconds | `PatchField<Long>` | No |
| crypto | `PatchField<UpdateCheckoutSettingsRequestApplicationJsonPropertyCrypto?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateCheckoutSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.updateCheckout(minimumSpend = app.sell.sellapp.common.http.PatchField.Present("10.00"), attemptsPerEmail = app.sell.sellapp.common.http.PatchField.Present(10L))
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

## getTaxes

Retrieve tax settings

[API reference](https://sell.app/docs/api/store-settings/tax-settings) · Effect: **read**

```kotlin
fun getTaxes(
        requestOptions: RequestOptions? = null
    ): SdkGetTaxSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetTaxSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.getTaxes()
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

## replaceTaxes

Update tax settings

[API reference](https://sell.app/docs/api/store-settings/tax-settings) · Effect: **consequential**

```kotlin
fun replaceTaxes(
        vatEnabled: Boolean,
        vatInclusivePricing: Boolean,
        collectBillingDetails: Boolean,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceTaxSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| vatEnabled | `Boolean` | Yes |
| vatInclusivePricing | `Boolean` | Yes |
| collectBillingDetails | `Boolean` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceTaxSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.replaceTaxes(vatEnabled = true, vatInclusivePricing = true, collectBillingDetails = false)
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

## updateTaxes

Update tax settings

[API reference](https://sell.app/docs/api/store-settings/tax-settings) · Effect: **consequential**

```kotlin
fun updateTaxes(
        vatEnabled: PatchField<Boolean> = PatchField.Absent,
        vatInclusivePricing: PatchField<Boolean> = PatchField.Absent,
        collectBillingDetails: PatchField<Boolean> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateTaxSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| vatEnabled | `PatchField<Boolean>` | No |
| vatInclusivePricing | `PatchField<Boolean>` | No |
| collectBillingDetails | `PatchField<Boolean>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateTaxSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.updateTaxes(vatInclusivePricing = app.sell.sellapp.common.http.PatchField.Present(true))
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

## getCustomerEmails

Retrieve customer email settings

[API reference](https://sell.app/docs/api/store-settings/customer-email-settings) · Effect: **read**

```kotlin
fun getCustomerEmails(
        requestOptions: RequestOptions? = null
    ): SdkGetCustomerEmailSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetCustomerEmailSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.getCustomerEmails()
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

## replaceCustomerEmails

Update customer email settings

[API reference](https://sell.app/docs/api/store-settings/customer-email-settings) · Effect: **consequential**

```kotlin
fun replaceCustomerEmails(
        sendDeliveryEmail: Boolean,
        sendPaymentFailureEmail: Boolean,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceCustomerEmailSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| sendDeliveryEmail | `Boolean` | Yes |
| sendPaymentFailureEmail | `Boolean` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceCustomerEmailSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.replaceCustomerEmails(sendDeliveryEmail = true, sendPaymentFailureEmail = false)
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

## updateCustomerEmails

Update customer email settings

[API reference](https://sell.app/docs/api/store-settings/customer-email-settings) · Effect: **consequential**

```kotlin
fun updateCustomerEmails(
        sendDeliveryEmail: PatchField<Boolean> = PatchField.Absent,
        sendPaymentFailureEmail: PatchField<Boolean> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateCustomerEmailSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| sendDeliveryEmail | `PatchField<Boolean>` | No |
| sendPaymentFailureEmail | `PatchField<Boolean>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateCustomerEmailSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.updateCustomerEmails(sendPaymentFailureEmail = app.sell.sellapp.common.http.PatchField.Present(false))
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

## getAlerts

Retrieve store alert settings

[API reference](https://sell.app/docs/api/store-settings/store-alert-settings) · Effect: **read**

```kotlin
fun getAlerts(
        requestOptions: RequestOptions? = null
    ): SdkGetStoreAlertSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetStoreAlertSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.getAlerts()
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

## replaceAlerts

Update store alert settings

[API reference](https://sell.app/docs/api/store-settings/store-alert-settings) · Effect: **consequential**

```kotlin
fun replaceAlerts(
        saleEmailsEnabled: Boolean,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceStoreAlertSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| saleEmailsEnabled | `Boolean` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceStoreAlertSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.replaceAlerts(saleEmailsEnabled = false)
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

## updateAlerts

Update store alert settings

[API reference](https://sell.app/docs/api/store-settings/store-alert-settings) · Effect: **consequential**

```kotlin
fun updateAlerts(
        saleEmailsEnabled: PatchField<Boolean> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateStoreAlertSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| saleEmailsEnabled | `PatchField<Boolean>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateStoreAlertSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.updateAlerts(saleEmailsEnabled = app.sell.sellapp.common.http.PatchField.Present(false))
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

## getPersonalization

Retrieve personalization settings

[API reference](https://sell.app/docs/api/store-settings/personalization-settings) · Effect: **read**

```kotlin
fun getPersonalization(
        requestOptions: RequestOptions? = null
    ): SdkGetPersonalizationSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetPersonalizationSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.getPersonalization()
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

## replacePersonalization

Update personalization settings

[API reference](https://sell.app/docs/api/store-settings/personalization-settings) · Effect: **consequential**

```kotlin
fun replacePersonalization(
        supportEmail: String?,
        trustpilotEmail: String?,
        senderName: String?,
        storeAddress: String?,
        storeCity: String?,
        storeState: String?,
        storeZip: String?,
        storeCountry: String?,
        storeTax: String?,
        backLinkLabel: String?,
        backLinkUrl: String?,
        senderEmail: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplacePersonalizationSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportEmail | `String?` | No |
| trustpilotEmail | `String?` | No |
| senderName | `String?` | No |
| storeAddress | `String?` | No |
| storeCity | `String?` | No |
| storeState | `String?` | No |
| storeZip | `String?` | No |
| storeCountry | `String?` | No |
| storeTax | `String?` | No |
| backLinkLabel | `String?` | No |
| backLinkUrl | `String?` | No |
| senderEmail | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplacePersonalizationSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.replacePersonalization(supportEmail = "support@launch-lab.example.com", trustpilotEmail = null, senderName = "Launch Lab", senderEmail = "orders@launch-lab.example.com", storeAddress = "651 N Broad St, Suite 206", storeCity = "Middletown", storeState = "Delaware", storeZip = "19709", storeCountry = "United States", storeTax = "EIN 98-7654321", backLinkLabel = "Back to Launch Lab", backLinkUrl = "https://launch-lab.example.com")
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

## updatePersonalization

Update personalization settings

[API reference](https://sell.app/docs/api/store-settings/personalization-settings) · Effect: **consequential**

```kotlin
fun updatePersonalization(
        supportEmail: PatchField<String?> = PatchField.Absent,
        trustpilotEmail: PatchField<String?> = PatchField.Absent,
        senderName: PatchField<String?> = PatchField.Absent,
        senderEmail: PatchField<String?> = PatchField.Absent,
        storeAddress: PatchField<String?> = PatchField.Absent,
        storeCity: PatchField<String?> = PatchField.Absent,
        storeState: PatchField<String?> = PatchField.Absent,
        storeZip: PatchField<String?> = PatchField.Absent,
        storeCountry: PatchField<String?> = PatchField.Absent,
        storeTax: PatchField<String?> = PatchField.Absent,
        backLinkLabel: PatchField<String?> = PatchField.Absent,
        backLinkUrl: PatchField<String?> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdatePersonalizationSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportEmail | `PatchField<String?>` | No |
| trustpilotEmail | `PatchField<String?>` | No |
| senderName | `PatchField<String?>` | No |
| senderEmail | `PatchField<String?>` | No |
| storeAddress | `PatchField<String?>` | No |
| storeCity | `PatchField<String?>` | No |
| storeState | `PatchField<String?>` | No |
| storeZip | `PatchField<String?>` | No |
| storeCountry | `PatchField<String?>` | No |
| storeTax | `PatchField<String?>` | No |
| backLinkLabel | `PatchField<String?>` | No |
| backLinkUrl | `PatchField<String?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdatePersonalizationSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.updatePersonalization(backLinkLabel = app.sell.sellapp.common.http.PatchField.Present("Return to the shop"), backLinkUrl = app.sell.sellapp.common.http.PatchField.Present("https://launch-lab.example.com/shop"))
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

## replaceCryptoCheckout

Update crypto checkout settings

[API reference](https://sell.app/docs/api/store-settings/crypto-checkout-settings) · Effect: **consequential**

```kotlin
fun replaceCryptoCheckout(
        underpaidPercentage: Long,
        minimumConfirmations: Long,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceCryptoCheckoutSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| underpaidPercentage | `Long` | Yes |
| minimumConfirmations | `Long` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceCryptoCheckoutSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.replaceCryptoCheckout(underpaidPercentage = 1L, minimumConfirmations = 3L)
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

## updateCryptoCheckout

Update crypto checkout settings

[API reference](https://sell.app/docs/api/store-settings/crypto-checkout-settings) · Effect: **consequential**

```kotlin
fun updateCryptoCheckout(
        underpaidPercentage: PatchField<Long> = PatchField.Absent,
        minimumConfirmations: PatchField<Long> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateCryptoCheckoutSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| underpaidPercentage | `PatchField<Long>` | No |
| minimumConfirmations | `PatchField<Long>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateCryptoCheckoutSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSettings.updateCryptoCheckout(minimumConfirmations = app.sell.sellapp.common.http.PatchField.Present(3L))
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

