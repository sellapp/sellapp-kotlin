# promotions

[All resources](../methods.md)

## list

List promotions

[API reference](https://sell.app/docs/api/promotions/list-promotions) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkListPromotionsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkListPromotionsResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.promotions.list()
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

Create a promotion

[API reference](https://sell.app/docs/api/promotions/create-promotion) · Effect: **consequential**

```kotlin
fun create(
        name: String,
        status: SdkCreatePromotionRequestApplicationJsonStatus,
        priority: Long,
        isStackable: Boolean,
        phases: List<CreatePromotionRequestApplicationJsonPropertyPhasesItem>,
        startsAt: OffsetDateTime? = null,
        endsAt: OffsetDateTime? = null,
        maxRedemptions: Long? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreatePromotionResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| name | `String` | Yes |
| status | `SdkCreatePromotionRequestApplicationJsonStatus` | Yes |
| priority | `Long` | Yes |
| isStackable | `Boolean` | Yes |
| phases | `List<CreatePromotionRequestApplicationJsonPropertyPhasesItem>` | Yes |
| startsAt | `OffsetDateTime?` | No |
| endsAt | `OffsetDateTime?` | No |
| maxRedemptions | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreatePromotionResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.promotions.create(name = "Ship Week", status = app.sell.sellapp.types.SdkCreatePromotionRequestApplicationJsonStatus("active"), startsAt = java.time.OffsetDateTime.parse("2026-08-01T00:00:00Z"), endsAt = java.time.OffsetDateTime.parse("2026-08-08T00:00:00Z"), priority = 1L, isStackable = false, maxRedemptions = 500L, phases = listOf(ObjectMapperFactory.read("{\"discount_type\":\"percentage\",\"discount_value\":\"20\",\"ends_at\":\"2026-08-04T00:00:00Z\",\"max_redemptions\":200,\"minimum_amount\":\"10\"}", app.sell.sellapp.models.CreatePromotionRequestApplicationJsonPropertyPhasesItem::class.java), ObjectMapperFactory.read("{\"discount_type\":\"fixed\",\"discount_value\":\"5\",\"ends_at\":null,\"max_redemptions\":null,\"minimum_amount\":\"25\"}", app.sell.sellapp.models.CreatePromotionRequestApplicationJsonPropertyPhasesItem::class.java)))
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

Search promotions

[API reference](https://sell.app/docs/api/promotions/search-promotions) · Effect: **read**

```kotlin
fun search(
        limit: Long? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        filters: List<SearchPromotionsRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<SearchPromotionsRequestApplicationJsonPropertySortItem>? = null,
        search: SearchPromotionsRequestApplicationJsonPropertySearch? = null,
        includes: List<SearchPromotionsRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkSearchPromotionsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Long?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| filters | `List<SearchPromotionsRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<SearchPromotionsRequestApplicationJsonPropertySortItem>?` | No |
| search | `SearchPromotionsRequestApplicationJsonPropertySearch?` | No |
| includes | `List<SearchPromotionsRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkSearchPromotionsResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.promotions.search(filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":1}", app.sell.sellapp.models.SearchPromotionsRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.SearchPromotionsRequestApplicationJsonPropertySortItem::class.java)))
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

Retrieve a promotion

[API reference](https://sell.app/docs/api/promotions/retrieve-promotion) · Effect: **read**

```kotlin
fun get(
        promotion: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetPromotionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| promotion | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetPromotionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.promotions.get(promotion = "1")
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

Update a promotion

[API reference](https://sell.app/docs/api/promotions/update-promotion) · Effect: **consequential**

```kotlin
fun replace(
        promotion: String,
        name: String? = null,
        status: SdkCreatePromotionRequestApplicationJsonStatus? = null,
        startsAt: OffsetDateTime? = null,
        endsAt: OffsetDateTime? = null,
        priority: Long? = null,
        isStackable: Boolean? = null,
        maxRedemptions: Long? = null,
        phases: List<ReplacePromotionRequestApplicationJsonPropertyPhasesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplacePromotionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| promotion | `String` | Yes |
| name | `String?` | No |
| status | `SdkCreatePromotionRequestApplicationJsonStatus?` | No |
| startsAt | `OffsetDateTime?` | No |
| endsAt | `OffsetDateTime?` | No |
| priority | `Long?` | No |
| isStackable | `Boolean?` | No |
| maxRedemptions | `Long?` | No |
| phases | `List<ReplacePromotionRequestApplicationJsonPropertyPhasesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplacePromotionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.promotions.replace(promotion = "1", name = "One More Sprint", isStackable = true)
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

Update a promotion

[API reference](https://sell.app/docs/api/promotions/update-promotion) · Effect: **consequential**

```kotlin
fun update(
        promotion: String,
        name: PatchField<String> = PatchField.Absent,
        status: PatchField<SdkCreatePromotionRequestApplicationJsonStatus> = PatchField.Absent,
        startsAt: PatchField<OffsetDateTime?> = PatchField.Absent,
        endsAt: PatchField<OffsetDateTime?> = PatchField.Absent,
        priority: PatchField<Long> = PatchField.Absent,
        isStackable: PatchField<Boolean> = PatchField.Absent,
        maxRedemptions: PatchField<Long?> = PatchField.Absent,
        phases: PatchField<List<UpdatePromotionRequestApplicationJsonPropertyPhasesItem>> =
            PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdatePromotionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| promotion | `String` | Yes |
| name | `PatchField<String>` | No |
| status | `PatchField<SdkCreatePromotionRequestApplicationJsonStatus>` | No |
| startsAt | `PatchField<OffsetDateTime?>` | No |
| endsAt | `PatchField<OffsetDateTime?>` | No |
| priority | `PatchField<Long>` | No |
| isStackable | `PatchField<Boolean>` | No |
| maxRedemptions | `PatchField<Long?>` | No |
| phases | `PatchField<List<UpdatePromotionRequestApplicationJsonPropertyPhasesItem>>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdatePromotionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.promotions.update(promotion = "1", name = app.sell.sellapp.common.http.PatchField.Present("One More Sprint"), isStackable = app.sell.sellapp.common.http.PatchField.Present(true))
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

Delete a promotion

[API reference](https://sell.app/docs/api/promotions/delete-promotion) · Effect: **consequential**

```kotlin
fun delete(
        promotion: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| promotion | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.promotions.delete(promotion = "1")
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

## restore

Restore a promotion

[API reference](https://sell.app/docs/api/promotions/restore-promotion) · Effect: **consequential**

```kotlin
fun restore(
        promotion: String,
        name: String,
        status: SdkCreatePromotionRequestApplicationJsonStatus,
        priority: Long,
        isStackable: Boolean,
        phases: List<RestorePromotionRequestApplicationJsonPropertyPhasesItem>,
        startsAt: OffsetDateTime? = null,
        endsAt: OffsetDateTime? = null,
        maxRedemptions: Long? = null,
        requestOptions: RequestOptions? = null,
    ): SdkRestorePromotionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| promotion | `String` | Yes |
| name | `String` | Yes |
| status | `SdkCreatePromotionRequestApplicationJsonStatus` | Yes |
| priority | `Long` | Yes |
| isStackable | `Boolean` | Yes |
| phases | `List<RestorePromotionRequestApplicationJsonPropertyPhasesItem>` | Yes |
| startsAt | `OffsetDateTime?` | No |
| endsAt | `OffsetDateTime?` | No |
| maxRedemptions | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkRestorePromotionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.promotions.restore(promotion = "1", name = "Ship Week", status = app.sell.sellapp.types.SdkCreatePromotionRequestApplicationJsonStatus("active"), startsAt = java.time.OffsetDateTime.parse("2026-08-01T00:00:00Z"), endsAt = java.time.OffsetDateTime.parse("2026-08-08T00:00:00Z"), priority = 1L, isStackable = false, maxRedemptions = 500L, phases = listOf(ObjectMapperFactory.read("{\"discount_type\":\"percentage\",\"discount_value\":\"20\",\"ends_at\":\"2026-08-04T00:00:00Z\",\"max_redemptions\":200,\"minimum_amount\":\"10\"}", app.sell.sellapp.models.RestorePromotionRequestApplicationJsonPropertyPhasesItem::class.java), ObjectMapperFactory.read("{\"discount_type\":\"fixed\",\"discount_value\":\"5\",\"ends_at\":null,\"max_redemptions\":null,\"minimum_amount\":\"25\"}", app.sell.sellapp.models.RestorePromotionRequestApplicationJsonPropertyPhasesItem::class.java)))
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

