# bookings

[All resources](../methods.md)

## list

List appointments

[API reference](https://sell.app/docs/api/bookings/list-appointments) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkListAppointmentsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkListAppointmentsResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.bookings.list()
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

## search

Search appointments

[API reference](https://sell.app/docs/api/bookings/search-appointments) · Effect: **read**

```kotlin
fun search(
        limit: Long? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        filters: List<SearchAppointmentsRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<SearchAppointmentsRequestApplicationJsonPropertySortItem>? = null,
        search: SearchAppointmentsRequestApplicationJsonPropertySearch? = null,
        includes: List<SearchAppointmentsRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkSearchAppointmentsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Long?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| filters | `List<SearchAppointmentsRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<SearchAppointmentsRequestApplicationJsonPropertySortItem>?` | No |
| search | `SearchAppointmentsRequestApplicationJsonPropertySearch?` | No |
| includes | `List<SearchAppointmentsRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkSearchAppointmentsResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.bookings.search(filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":\"018f61d6-1c46-7b42-8a94-522bc6b5c53f\"}", app.sell.sellapp.models.SearchAppointmentsRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.SearchAppointmentsRequestApplicationJsonPropertySortItem::class.java)))
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

Retrieve an appointment

[API reference](https://sell.app/docs/api/bookings/retrieve-an-appointment) · Effect: **read**

```kotlin
fun get(
        booking: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetAppointmentResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| booking | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetAppointmentResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.bookings.get(booking = "018f61d6-1c46-7b42-8a94-522bc6b5c53f")
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

Update an appointment

[API reference](https://sell.app/docs/api/bookings/update-an-appointment) · Effect: **consequential**

```kotlin
fun update(
        booking: String,
        slotStartAt: OffsetDateTime,
        timezone: PatchField<String?> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateAppointmentResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| booking | `String` | Yes |
| slotStartAt | `OffsetDateTime` | Yes |
| timezone | `PatchField<String?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateAppointmentResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.bookings.update(booking = "018f61d6-1c46-7b42-8a94-522bc6b5c53f", slotStartAt = java.time.OffsetDateTime.parse("2028-03-27T10:00:00+01:00"), timezone = app.sell.sellapp.common.http.PatchField.Present("Europe/London"))
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

## cancel

Cancel an appointment

[API reference](https://sell.app/docs/api/bookings/update-an-appointment) · Effect: **consequential**

```kotlin
fun cancel(
        booking: String,
        status: String,
        requestOptions: RequestOptions? = null,
    ): SdkCancelAppointmentResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| booking | `String` | Yes |
| status | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCancelAppointmentResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.bookings.cancel(booking = "018f61d6-1c46-7b42-8a94-522bc6b5c53f", status = "cancelled")
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

Create a booking product

[API reference](https://sell.app/docs/api/bookings/create-a-booking-product) · Effect: **consequential**

```kotlin
fun create(
        title: String,
        priceCents: Long,
        description: String? = null,
        visibility: CatalogVisibility? = null,
        variantTitle: String? = null,
        variantDescription: String? = null,
        compareAtPriceCents: Long? = null,
        currency: SdkCreateBookingProductRequestApplicationJsonCurrency? = null,
        paymentMethods: List<PaymentMethod>? = null,
        timezone: String? = null,
        durationMinutes: Long? = null,
        minNoticeMinutes: Long? = null,
        maxAdvanceDays: Long? = null,
        bufferBeforeMinutes: Long? = null,
        bufferAfterMinutes: Long? = null,
        providerConnectionIds: List<Long>? = null,
        videoProvider: SdkCreateBookingProductRequestApplicationJsonVideoProvider? = null,
        videoProviderConnectionId: Long? = null,
        remindersEnabled: Boolean? = null,
        reminderOffsetValue: Long? = null,
        reminderOffsetUnit: SdkCreateBookingProductRequestApplicationJsonReminderOffsetUnit? = null,
        availability: List<CreateBookingProductRequestApplicationJsonPropertyAvailabilityItem>? =
            null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateBookingProductResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| title | `String` | Yes |
| priceCents | `Long` | Yes |
| description | `String?` | No |
| visibility | `CatalogVisibility?` | No |
| variantTitle | `String?` | No |
| variantDescription | `String?` | No |
| compareAtPriceCents | `Long?` | No |
| currency | `SdkCreateBookingProductRequestApplicationJsonCurrency?` | No |
| paymentMethods | `List<PaymentMethod>?` | No |
| timezone | `String?` | No |
| durationMinutes | `Long?` | No |
| minNoticeMinutes | `Long?` | No |
| maxAdvanceDays | `Long?` | No |
| bufferBeforeMinutes | `Long?` | No |
| bufferAfterMinutes | `Long?` | No |
| providerConnectionIds | `List<Long>?` | No |
| videoProvider | `SdkCreateBookingProductRequestApplicationJsonVideoProvider?` | No |
| videoProviderConnectionId | `Long?` | No |
| remindersEnabled | `Boolean?` | No |
| reminderOffsetValue | `Long?` | No |
| reminderOffsetUnit | `SdkCreateBookingProductRequestApplicationJsonReminderOffsetUnit?` | No |
| availability | `List<CreateBookingProductRequestApplicationJsonPropertyAvailabilityItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateBookingProductResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.bookings.create(title = "Strategy consultation", description = "<p>A private strategy session for your next launch.</p>", variantTitle = "60 minute session", priceCents = 2500L, currency = app.sell.sellapp.types.SdkCreateBookingProductRequestApplicationJsonCurrency("USD"), paymentMethods = listOf(app.sell.sellapp.types.PaymentMethod("STRIPE")), timezone = "Europe/London", durationMinutes = 60L, availability = listOf(ObjectMapperFactory.read("{\"day\":1,\"enabled\":true,\"start\":\"09:00\",\"end\":\"12:00\"}", app.sell.sellapp.models.CreateBookingProductRequestApplicationJsonPropertyAvailabilityItem::class.java), ObjectMapperFactory.read("{\"day\":3,\"enabled\":true,\"start\":\"13:00\",\"end\":\"17:00\"}", app.sell.sellapp.models.CreateBookingProductRequestApplicationJsonPropertyAvailabilityItem::class.java)))
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

