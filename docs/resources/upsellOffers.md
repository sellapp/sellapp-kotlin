# upsellOffers

[All resources](../methods.md)

## list

List upsell offers

[API reference](https://sell.app/docs/api/products) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkListUpsellOffersResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkListUpsellOffersResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.upsellOffers.list()
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

Create an upsell offer

[API reference](https://sell.app/docs/api/products) · Effect: **consequential**

```kotlin
fun create(
        name: String,
        isActive: Boolean,
        sourceListingId: Long,
        items: List<CreateUpsellOfferRequestApplicationJsonPropertyItemsItem>,
        description: String? = null,
        sourceVariantId: Long? = null,
        minimumOrderTotalUsdCents: Long? = null,
        maximumOrderTotalUsdCents: Long? = null,
        startsAt: OffsetDateTime? = null,
        endsAt: OffsetDateTime? = null,
        availableForDays: Long? = null,
        maxAcceptsPerCustomer: Long? = null,
        expectedVersion: Long? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateUpsellOfferResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| name | `String` | Yes |
| isActive | `Boolean` | Yes |
| sourceListingId | `Long` | Yes |
| items | `List<CreateUpsellOfferRequestApplicationJsonPropertyItemsItem>` | Yes |
| description | `String?` | No |
| sourceVariantId | `Long?` | No |
| minimumOrderTotalUsdCents | `Long?` | No |
| maximumOrderTotalUsdCents | `Long?` | No |
| startsAt | `OffsetDateTime?` | No |
| endsAt | `OffsetDateTime?` | No |
| availableForDays | `Long?` | No |
| maxAcceptsPerCustomer | `Long?` | No |
| expectedVersion | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateUpsellOfferResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.upsellOffers.create(name = "One More Feature", description = "Offer the advanced package with additional resources.", isActive = true, sourceListingId = 120L, sourceVariantId = 880L, minimumOrderTotalUsdCents = 1000L, maximumOrderTotalUsdCents = 25000L, availableForDays = 14L, maxAcceptsPerCustomer = 1L, items = listOf(ObjectMapperFactory.read("{\"target_listing_id\":121,\"target_variant_id\":881,\"headline\":\"Upgrade today\",\"description\":\"Unlock dark mode, webhooks, and the premium launch checklist.\",\"discount_type\":\"percentage\",\"discount_value\":\"15.00\",\"maximum_discount_amount\":\"25.00\"}", app.sell.sellapp.models.CreateUpsellOfferRequestApplicationJsonPropertyItemsItem::class.java)))
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

## search

Search upsell offers

[API reference](https://sell.app/docs/api/products) · Effect: **read**

```kotlin
fun search(
        limit: Long? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        filters: List<SearchUpsellOffersRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<SearchUpsellOffersRequestApplicationJsonPropertySortItem>? = null,
        search: SearchUpsellOffersRequestApplicationJsonPropertySearch? = null,
        includes: List<SearchUpsellOffersRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkSearchUpsellOffersResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Long?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| filters | `List<SearchUpsellOffersRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<SearchUpsellOffersRequestApplicationJsonPropertySortItem>?` | No |
| search | `SearchUpsellOffersRequestApplicationJsonPropertySearch?` | No |
| includes | `List<SearchUpsellOffersRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkSearchUpsellOffersResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.upsellOffers.search(filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":71}", app.sell.sellapp.models.SearchUpsellOffersRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.SearchUpsellOffersRequestApplicationJsonPropertySortItem::class.java)))
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

Retrieve an upsell offer

[API reference](https://sell.app/docs/api/products) · Effect: **read**

```kotlin
fun get(
        upsellOffer: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetUpsellOfferResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| upsellOffer | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetUpsellOfferResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.upsellOffers.get(upsellOffer = "71")
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

Update an upsell offer

[API reference](https://sell.app/docs/api/products) · Effect: **consequential**

```kotlin
fun replace(
        upsellOffer: String,
        expectedVersion: Long,
        name: String? = null,
        description: String? = null,
        isActive: Boolean? = null,
        sourceListingId: Long? = null,
        sourceVariantId: Long? = null,
        minimumOrderTotalUsdCents: Long? = null,
        maximumOrderTotalUsdCents: Long? = null,
        startsAt: OffsetDateTime? = null,
        endsAt: OffsetDateTime? = null,
        availableForDays: Long? = null,
        maxAcceptsPerCustomer: Long? = null,
        items: List<ReplaceUpsellOfferRequestApplicationJsonPropertyItemsItem>? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceUpsellOfferResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| upsellOffer | `String` | Yes |
| expectedVersion | `Long` | Yes |
| name | `String?` | No |
| description | `String?` | No |
| isActive | `Boolean?` | No |
| sourceListingId | `Long?` | No |
| sourceVariantId | `Long?` | No |
| minimumOrderTotalUsdCents | `Long?` | No |
| maximumOrderTotalUsdCents | `Long?` | No |
| startsAt | `OffsetDateTime?` | No |
| endsAt | `OffsetDateTime?` | No |
| availableForDays | `Long?` | No |
| maxAcceptsPerCustomer | `Long?` | No |
| items | `List<ReplaceUpsellOfferRequestApplicationJsonPropertyItemsItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceUpsellOfferResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.upsellOffers.replace(upsellOffer = "71", name = "One More Feature 2.0", isActive = false, expectedVersion = 1L)
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

Update an upsell offer

[API reference](https://sell.app/docs/api/products) · Effect: **consequential**

```kotlin
fun update(
        upsellOffer: String,
        expectedVersion: Long,
        name: PatchField<String> = PatchField.Absent,
        description: PatchField<String?> = PatchField.Absent,
        isActive: PatchField<Boolean> = PatchField.Absent,
        sourceListingId: PatchField<Long> = PatchField.Absent,
        sourceVariantId: PatchField<Long?> = PatchField.Absent,
        minimumOrderTotalUsdCents: PatchField<Long?> = PatchField.Absent,
        maximumOrderTotalUsdCents: PatchField<Long?> = PatchField.Absent,
        startsAt: PatchField<OffsetDateTime?> = PatchField.Absent,
        endsAt: PatchField<OffsetDateTime?> = PatchField.Absent,
        availableForDays: PatchField<Long?> = PatchField.Absent,
        maxAcceptsPerCustomer: PatchField<Long?> = PatchField.Absent,
        items: PatchField<List<UpdateUpsellOfferRequestApplicationJsonPropertyItemsItem>> =
            PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateUpsellOfferResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| upsellOffer | `String` | Yes |
| expectedVersion | `Long` | Yes |
| name | `PatchField<String>` | No |
| description | `PatchField<String?>` | No |
| isActive | `PatchField<Boolean>` | No |
| sourceListingId | `PatchField<Long>` | No |
| sourceVariantId | `PatchField<Long?>` | No |
| minimumOrderTotalUsdCents | `PatchField<Long?>` | No |
| maximumOrderTotalUsdCents | `PatchField<Long?>` | No |
| startsAt | `PatchField<OffsetDateTime?>` | No |
| endsAt | `PatchField<OffsetDateTime?>` | No |
| availableForDays | `PatchField<Long?>` | No |
| maxAcceptsPerCustomer | `PatchField<Long?>` | No |
| items | `PatchField<List<UpdateUpsellOfferRequestApplicationJsonPropertyItemsItem>>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateUpsellOfferResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.upsellOffers.update(upsellOffer = "71", name = app.sell.sellapp.common.http.PatchField.Present("One More Feature 2.0"), isActive = app.sell.sellapp.common.http.PatchField.Present(false), expectedVersion = 1L)
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

## delete

Delete an upsell offer

[API reference](https://sell.app/docs/api/products) · Effect: **consequential**

```kotlin
fun delete(
        upsellOffer: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| upsellOffer | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.upsellOffers.delete(upsellOffer = "71")
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

