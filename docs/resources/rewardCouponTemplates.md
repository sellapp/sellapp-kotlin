# rewardCouponTemplates

[All resources](../methods.md)

## list

List reward coupon templates

[API reference](https://sell.app/docs/api/reward-coupon-templates/list-reward-coupon-templates) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkListRewardCouponTemplatesResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkListRewardCouponTemplatesResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.rewardCouponTemplates.list()
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

Create a reward coupon template

[API reference](https://sell.app/docs/api/reward-coupon-templates/create-a-reward-coupon-template) · Effect: **consequential**

```kotlin
fun create(
        name: String,
        type: SdkCreateCouponRequestApplicationJsonType,
        discount: Any,
        storeWide: Boolean,
        redemptionMode: SdkCreateRewardCouponTemplateRequestApplicationJsonRedemptionMode,
        isActive: Boolean,
        listingIds: List<Long>,
        minimumAmount: Any? = null,
        maximumDiscountAmount: Any? = null,
        expiresAt: OffsetDateTime? = null,
        expiresAfterDays: Long? = null,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateRewardCouponTemplateResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| name | `String` | Yes |
| type | `SdkCreateCouponRequestApplicationJsonType` | Yes |
| discount | `Any` | Yes |
| storeWide | `Boolean` | Yes |
| redemptionMode | `SdkCreateRewardCouponTemplateRequestApplicationJsonRedemptionMode` | Yes |
| isActive | `Boolean` | Yes |
| listingIds | `List<Long>` | Yes |
| minimumAmount | `Any?` | No |
| maximumDiscountAmount | `Any?` | No |
| expiresAt | `OffsetDateTime?` | No |
| expiresAfterDays | `Long?` | No |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateRewardCouponTemplateResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.rewardCouponTemplates.create(name = "Launch Lab thank you", type = app.sell.sellapp.types.SdkCreateCouponRequestApplicationJsonType("PERCENTAGE"), discount = "10.00", storeWide = true, redemptionMode = app.sell.sellapp.types.SdkCreateRewardCouponTemplateRequestApplicationJsonRedemptionMode("customer_locked"), isActive = false, listingIds = listOf())
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

Search reward coupon templates

[API reference](https://sell.app/docs/api/reward-coupon-templates/search-reward-coupon-templates) · Effect: **read**

```kotlin
fun search(
        limit: Long? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        filters: List<SearchRewardRulesRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<SearchRewardRulesRequestApplicationJsonPropertySortItem>? = null,
        search: SearchRewardRulesRequestApplicationJsonPropertySearch? = null,
        includes: List<SearchRewardRulesRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkSearchRewardCouponTemplatesResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Long?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| filters | `List<SearchRewardRulesRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<SearchRewardRulesRequestApplicationJsonPropertySortItem>?` | No |
| search | `SearchRewardRulesRequestApplicationJsonPropertySearch?` | No |
| includes | `List<SearchRewardRulesRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkSearchRewardCouponTemplatesResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.rewardCouponTemplates.search(filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":1}", app.sell.sellapp.models.SearchRewardRulesRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.SearchRewardRulesRequestApplicationJsonPropertySortItem::class.java)))
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

Retrieve a reward coupon template

[API reference](https://sell.app/docs/api/reward-coupon-templates/retrieve-a-reward-coupon-template) · Effect: **read**

```kotlin
fun get(
        rewardCouponTemplate: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetRewardCouponTemplateResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| rewardCouponTemplate | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetRewardCouponTemplateResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.rewardCouponTemplates.get(rewardCouponTemplate = "1")
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

Update a reward coupon template

[API reference](https://sell.app/docs/api/reward-coupon-templates/update-a-reward-coupon-template) · Effect: **consequential**

```kotlin
fun replace(
        rewardCouponTemplate: String,
        name: String? = null,
        type: SdkCreateCouponRequestApplicationJsonType? = null,
        discount: Any? = null,
        storeWide: Boolean? = null,
        minimumAmount: Any? = null,
        maximumDiscountAmount: Any? = null,
        expiresAt: OffsetDateTime? = null,
        expiresAfterDays: Long? = null,
        redemptionMode: SdkCreateRewardCouponTemplateRequestApplicationJsonRedemptionMode? = null,
        isActive: Boolean? = null,
        listingIds: List<Long>? = null,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceRewardCouponTemplateResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| rewardCouponTemplate | `String` | Yes |
| name | `String?` | No |
| type | `SdkCreateCouponRequestApplicationJsonType?` | No |
| discount | `Any?` | No |
| storeWide | `Boolean?` | No |
| minimumAmount | `Any?` | No |
| maximumDiscountAmount | `Any?` | No |
| expiresAt | `OffsetDateTime?` | No |
| expiresAfterDays | `Long?` | No |
| redemptionMode | `SdkCreateRewardCouponTemplateRequestApplicationJsonRedemptionMode?` | No |
| isActive | `Boolean?` | No |
| listingIds | `List<Long>?` | No |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceRewardCouponTemplateResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.rewardCouponTemplates.replace(rewardCouponTemplate = "1", isActive = false)
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

Update a reward coupon template

[API reference](https://sell.app/docs/api/reward-coupon-templates/update-a-reward-coupon-template) · Effect: **consequential**

```kotlin
fun update(
        rewardCouponTemplate: String,
        name: PatchField<String> = PatchField.Absent,
        type: PatchField<SdkCreateCouponRequestApplicationJsonType> = PatchField.Absent,
        discount: PatchField<Any> = PatchField.Absent,
        storeWide: PatchField<Boolean> = PatchField.Absent,
        minimumAmount: PatchField<Any?> = PatchField.Absent,
        maximumDiscountAmount: PatchField<Any?> = PatchField.Absent,
        expiresAt: PatchField<OffsetDateTime?> = PatchField.Absent,
        expiresAfterDays: PatchField<Long?> = PatchField.Absent,
        redemptionMode:
            PatchField<SdkCreateRewardCouponTemplateRequestApplicationJsonRedemptionMode> =
            PatchField.Absent,
        isActive: PatchField<Boolean> = PatchField.Absent,
        listingIds: PatchField<List<Long>> = PatchField.Absent,
        expectedUpdatedAt: PatchField<OffsetDateTime> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateRewardCouponTemplateResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| rewardCouponTemplate | `String` | Yes |
| name | `PatchField<String>` | No |
| type | `PatchField<SdkCreateCouponRequestApplicationJsonType>` | No |
| discount | `PatchField<Any>` | No |
| storeWide | `PatchField<Boolean>` | No |
| minimumAmount | `PatchField<Any?>` | No |
| maximumDiscountAmount | `PatchField<Any?>` | No |
| expiresAt | `PatchField<OffsetDateTime?>` | No |
| expiresAfterDays | `PatchField<Long?>` | No |
| redemptionMode | `PatchField<SdkCreateRewardCouponTemplateRequestApplicationJsonRedemptionMode>` | No |
| isActive | `PatchField<Boolean>` | No |
| listingIds | `PatchField<List<Long>>` | No |
| expectedUpdatedAt | `PatchField<OffsetDateTime>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateRewardCouponTemplateResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.rewardCouponTemplates.update(rewardCouponTemplate = "1", isActive = app.sell.sellapp.common.http.PatchField.Present(false))
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

