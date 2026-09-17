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

