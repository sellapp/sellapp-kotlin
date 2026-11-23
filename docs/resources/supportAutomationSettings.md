# supportAutomationSettings

[All resources](../methods.md)

## get

Retrieve support automation settings

[API reference](https://sell.app/docs/api/support-automation-settings/retrieve-support-automation-settings) · Effect: **read**

```kotlin
fun get(
        requestOptions: RequestOptions? = null
    ): SdkGetSupportAutomationSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetSupportAutomationSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportAutomationSettings.get()
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

## replace

Update support automation settings

[API reference](https://sell.app/docs/api/support-automation-settings/update-support-automation-settings) · Effect: **consequential**

```kotlin
fun replace(
        automationEnabled: Boolean? = null,
        dailyRefundCapCents: Long? = null,
        expectedAutomationEnabled: Boolean? = null,
        expectedDailyRefundCapCents: Long? = null,
        currency: String? = null,
        activeRulesCount: Long? = null,
        activeRefundRulesCount: Long? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceSupportAutomationSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| automationEnabled | `Boolean?` | No |
| dailyRefundCapCents | `Long?` | No |
| expectedAutomationEnabled | `Boolean?` | No |
| expectedDailyRefundCapCents | `Long?` | No |
| currency | `String?` | No |
| activeRulesCount | `Long?` | No |
| activeRefundRulesCount | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceSupportAutomationSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportAutomationSettings.replace(automationEnabled = true, dailyRefundCapCents = 5000L, expectedAutomationEnabled = false, expectedDailyRefundCapCents = null)
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

## update

Update support automation settings

[API reference](https://sell.app/docs/api/support-automation-settings/update-support-automation-settings) · Effect: **consequential**

```kotlin
fun update(
        automationEnabled: PatchField<Boolean> = PatchField.Absent,
        dailyRefundCapCents: PatchField<Long?> = PatchField.Absent,
        expectedAutomationEnabled: PatchField<Boolean> = PatchField.Absent,
        expectedDailyRefundCapCents: PatchField<Long?> = PatchField.Absent,
        currency: PatchField<String> = PatchField.Absent,
        activeRulesCount: PatchField<Long> = PatchField.Absent,
        activeRefundRulesCount: PatchField<Long> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateSupportAutomationSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| automationEnabled | `PatchField<Boolean>` | No |
| dailyRefundCapCents | `PatchField<Long?>` | No |
| expectedAutomationEnabled | `PatchField<Boolean>` | No |
| expectedDailyRefundCapCents | `PatchField<Long?>` | No |
| currency | `PatchField<String>` | No |
| activeRulesCount | `PatchField<Long>` | No |
| activeRefundRulesCount | `PatchField<Long>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateSupportAutomationSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportAutomationSettings.update(automationEnabled = app.sell.sellapp.common.http.PatchField.Present(true), dailyRefundCapCents = app.sell.sellapp.common.http.PatchField.Present(5000L), expectedAutomationEnabled = app.sell.sellapp.common.http.PatchField.Present(false), expectedDailyRefundCapCents = app.sell.sellapp.common.http.PatchField.Present(null))
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

