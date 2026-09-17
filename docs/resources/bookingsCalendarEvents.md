# bookingsCalendarEvents

[All resources](../methods.md)

## list

List booking date overrides

[API reference](https://sell.app/docs/api/bookings/list-booking-date-overrides) · Effect: **read**

```kotlin
fun list(
        productVariantId: Long? = null,
        from: OffsetDateTime? = null,
        to: OffsetDateTime? = null,
        status: BookingsStatus? = null,
        pagination: Boolean? = null,
        limit: Int? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkListBookingDateOverridesResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| productVariantId | `Long?` | No |
| from | `OffsetDateTime?` | No |
| to | `OffsetDateTime?` | No |
| status | `BookingsStatus?` | No |
| pagination | `Boolean?` | No |
| limit | `Int?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkListBookingDateOverridesResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.bookingsCalendarEvents.list()
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

## set

Set booking date availability

[API reference](https://sell.app/docs/api/bookings/set-booking-date-availability) · Effect: **consequential**

```kotlin
fun set(
        dates: List<String>,
        available: Boolean,
        productVariantId: Long? = null,
        requestOptions: RequestOptions? = null,
    ): SdkSetBookingDateAvailabilityResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| dates | `List<String>` | Yes |
| available | `Boolean` | Yes |
| productVariantId | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkSetBookingDateAvailabilityResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.bookingsCalendarEvents.set(productVariantId = 73L, dates = listOf("2028-03-26", "2028-03-27"), available = false)
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

