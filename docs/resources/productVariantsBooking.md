# productVariantsBooking

[All resources](../methods.md)

## listAvailability

List booking availability

[API reference](https://sell.app/docs/api/product-variants/list-booking-availability) · Effect: **read**

```kotlin
fun listAvailability(
        product: String,
        variant: String,
        from: String? = null,
        to: String? = null,
        quantity: Long? = null,
        requestOptions: RequestOptions? = null,
    ): SdkListBookingAvailabilityResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| from | `String?` | No |
| to | `String?` | No |
| quantity | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkListBookingAvailabilityResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariantsBooking.listAvailability(product = "1", variant = "1")
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

## createHold

Create a booking hold

[API reference](https://sell.app/docs/api/product-variants/create-booking-hold) · Effect: **consequential**

```kotlin
fun createHold(
        product: String,
        variant: String,
        slotStartAt: OffsetDateTime,
        quantity: Long? = null,
        customerKey: String? = null,
        meta: CreateBookingHoldRequestApplicationJsonPropertyMeta? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateBookingHoldResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| slotStartAt | `OffsetDateTime` | Yes |
| quantity | `Long?` | No |
| customerKey | `String?` | No |
| meta | `CreateBookingHoldRequestApplicationJsonPropertyMeta?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateBookingHoldResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariantsBooking.createHold(product = "1", variant = "1", slotStartAt = java.time.OffsetDateTime.parse("2026-06-22T14:00:00+00:00"), quantity = 1L, customerKey = "visitor-session-123", meta = ObjectMapperFactory.read("{\"customer_timezone\":\"America/New_York\"}", app.sell.sellapp.models.CreateBookingHoldRequestApplicationJsonPropertyMeta::class.java))
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

## releaseHold

Release a booking hold

[API reference](https://sell.app/docs/api/product-variants/release-booking-hold) · Effect: **consequential**

```kotlin
fun releaseHold(
        product: String,
        hold: String,
        customerKey: String? = null,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| hold | `String` | Yes |
| customerKey | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariantsBooking.releaseHold(product = "1", hold = "string_example", customerKey = "visitor-session-123")
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

## get

Retrieve booking configuration

[API reference](https://sell.app/docs/api/bookings/retrieve-booking-configuration) · Effect: **read**

```kotlin
fun get(
        product: String,
        variant: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetBookingConfigurationResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetBookingConfigurationResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariantsBooking.get(product = "41", variant = "73")
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

## replace

Update booking configuration

[API reference](https://sell.app/docs/api/bookings/update-booking-configuration) · Effect: **consequential**

```kotlin
fun replace(
        product: String,
        variant: String,
        mode: String? = null,
        conflictScope: SdkUpdateBookingConfigurationRequestApplicationJsonConflictScope? = null,
        timezone: String? = null,
        durationMinutes: Long? = null,
        capacityPerSlot: Long? = null,
        minNoticeMinutes: Long? = null,
        maxAdvanceDays: Long? = null,
        bufferBeforeMinutes: Long? = null,
        bufferAfterMinutes: Long? = null,
        availability:
            List<ReplaceBookingConfigurationRequestApplicationJsonPropertyAvailabilityItem>? =
            null,
        providerConnectionIds: List<Long>? = null,
        videoProvider: SdkUpdateBookingConfigurationRequestApplicationJsonVideoProvider? = null,
        videoProviderConnectionId: Long? = null,
        remindersEnabled: Boolean? = null,
        reminderOffsetValue: Long? = null,
        reminderOffsetUnit: SdkUpdateBookingConfigurationRequestApplicationJsonReminderOffsetUnit? =
            null,
        meta: ReplaceBookingConfigurationRequestApplicationJsonPropertyMeta? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceBookingConfigurationResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| mode | `String?` | No |
| conflictScope | `SdkUpdateBookingConfigurationRequestApplicationJsonConflictScope?` | No |
| timezone | `String?` | No |
| durationMinutes | `Long?` | No |
| capacityPerSlot | `Long?` | No |
| minNoticeMinutes | `Long?` | No |
| maxAdvanceDays | `Long?` | No |
| bufferBeforeMinutes | `Long?` | No |
| bufferAfterMinutes | `Long?` | No |
| availability | `List<ReplaceBookingConfigurationRequestApplicationJsonPropertyAvailabilityItem>?` | No |
| providerConnectionIds | `List<Long>?` | No |
| videoProvider | `SdkUpdateBookingConfigurationRequestApplicationJsonVideoProvider?` | No |
| videoProviderConnectionId | `Long?` | No |
| remindersEnabled | `Boolean?` | No |
| reminderOffsetValue | `Long?` | No |
| reminderOffsetUnit | `SdkUpdateBookingConfigurationRequestApplicationJsonReminderOffsetUnit?` | No |
| meta | `ReplaceBookingConfigurationRequestApplicationJsonPropertyMeta?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceBookingConfigurationResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariantsBooking.replace(product = "41", variant = "73", timezone = "Europe/London", durationMinutes = 60L, capacityPerSlot = 1L, minNoticeMinutes = 1440L, maxAdvanceDays = 60L)
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

## update

Update booking configuration

[API reference](https://sell.app/docs/api/bookings/update-booking-configuration) · Effect: **consequential**

```kotlin
fun update(
        product: String,
        variant: String,
        mode: PatchField<String> = PatchField.Absent,
        conflictScope:
            PatchField<SdkUpdateBookingConfigurationRequestApplicationJsonConflictScope> =
            PatchField.Absent,
        timezone: PatchField<String> = PatchField.Absent,
        durationMinutes: PatchField<Long> = PatchField.Absent,
        capacityPerSlot: PatchField<Long> = PatchField.Absent,
        minNoticeMinutes: PatchField<Long> = PatchField.Absent,
        maxAdvanceDays: PatchField<Long> = PatchField.Absent,
        bufferBeforeMinutes: PatchField<Long> = PatchField.Absent,
        bufferAfterMinutes: PatchField<Long> = PatchField.Absent,
        availability:
            PatchField<
                List<UpdateBookingConfigurationRequestApplicationJsonPropertyAvailabilityItem>
            > =
            PatchField.Absent,
        providerConnectionIds: PatchField<List<Long>> = PatchField.Absent,
        videoProvider:
            PatchField<SdkUpdateBookingConfigurationRequestApplicationJsonVideoProvider> =
            PatchField.Absent,
        videoProviderConnectionId: PatchField<Long?> = PatchField.Absent,
        remindersEnabled: PatchField<Boolean> = PatchField.Absent,
        reminderOffsetValue: PatchField<Long> = PatchField.Absent,
        reminderOffsetUnit:
            PatchField<SdkUpdateBookingConfigurationRequestApplicationJsonReminderOffsetUnit> =
            PatchField.Absent,
        meta: PatchField<UpdateBookingConfigurationRequestApplicationJsonPropertyMeta> =
            PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateBookingConfigurationResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| mode | `PatchField<String>` | No |
| conflictScope | `PatchField<SdkUpdateBookingConfigurationRequestApplicationJsonConflictScope>` | No |
| timezone | `PatchField<String>` | No |
| durationMinutes | `PatchField<Long>` | No |
| capacityPerSlot | `PatchField<Long>` | No |
| minNoticeMinutes | `PatchField<Long>` | No |
| maxAdvanceDays | `PatchField<Long>` | No |
| bufferBeforeMinutes | `PatchField<Long>` | No |
| bufferAfterMinutes | `PatchField<Long>` | No |
| availability | `PatchField<
                List<UpdateBookingConfigurationRequestApplicationJsonPropertyAvailabilityItem>
            >` | No |
| providerConnectionIds | `PatchField<List<Long>>` | No |
| videoProvider | `PatchField<SdkUpdateBookingConfigurationRequestApplicationJsonVideoProvider>` | No |
| videoProviderConnectionId | `PatchField<Long?>` | No |
| remindersEnabled | `PatchField<Boolean>` | No |
| reminderOffsetValue | `PatchField<Long>` | No |
| reminderOffsetUnit | `PatchField<SdkUpdateBookingConfigurationRequestApplicationJsonReminderOffsetUnit>` | No |
| meta | `PatchField<UpdateBookingConfigurationRequestApplicationJsonPropertyMeta>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateBookingConfigurationResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariantsBooking.update(product = "41", variant = "73", timezone = app.sell.sellapp.common.http.PatchField.Present("Europe/London"), durationMinutes = app.sell.sellapp.common.http.PatchField.Present(60L), capacityPerSlot = app.sell.sellapp.common.http.PatchField.Present(1L), minNoticeMinutes = app.sell.sellapp.common.http.PatchField.Present(1440L), maxAdvanceDays = app.sell.sellapp.common.http.PatchField.Present(60L))
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

