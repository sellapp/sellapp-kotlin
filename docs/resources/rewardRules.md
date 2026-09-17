# rewardRules

[All resources](../methods.md)

## list

List reward rules

[API reference](https://sell.app/docs/api/reward-rules/list-reward-rules) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkListRewardRulesResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkListRewardRulesResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.rewardRules.list()
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

Create a reward rule

[API reference](https://sell.app/docs/api/reward-rules/create-a-reward-rule) · Effect: **consequential**

```kotlin
fun create(
        name: String,
        isActive: Boolean,
        triggerType: SdkCreateRewardRuleRequestApplicationJsonTriggerType,
        triggerThreshold: Long,
        outputs: List<CreateRewardRuleRequestApplicationJsonPropertyOutputsItem>,
        description: String? = null,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateRewardRuleResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| name | `String` | Yes |
| isActive | `Boolean` | Yes |
| triggerType | `SdkCreateRewardRuleRequestApplicationJsonTriggerType` | Yes |
| triggerThreshold | `Long` | Yes |
| outputs | `List<CreateRewardRuleRequestApplicationJsonPropertyOutputsItem>` | Yes |
| description | `String?` | No |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateRewardRuleResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.rewardRules.create(name = "Launch Lab regular", isActive = false, triggerType = app.sell.sellapp.types.SdkCreateRewardRuleRequestApplicationJsonTriggerType("PURCHASE_COUNT"), triggerThreshold = 3L, outputs = listOf(ObjectMapperFactory.read("{\"type\":\"BADGE\",\"label\":\"Launch Lab regular\",\"color\":\"violet\"}", app.sell.sellapp.models.CreateRewardRuleRequestApplicationJsonPropertyOutputsItem::class.java)))
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

Search reward rules

[API reference](https://sell.app/docs/api/reward-rules/search-reward-rules) · Effect: **read**

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
    ): Page<SdkSearchRewardRulesResponseValue200ApplicationJson>
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

Returns: `Page<SdkSearchRewardRulesResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.rewardRules.search(filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":1}", app.sell.sellapp.models.SearchRewardRulesRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.SearchRewardRulesRequestApplicationJsonPropertySortItem::class.java)))
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

Retrieve a reward rule

[API reference](https://sell.app/docs/api/reward-rules/retrieve-a-reward-rule) · Effect: **read**

```kotlin
fun get(
        rewardRule: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetRewardRuleResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| rewardRule | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetRewardRuleResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.rewardRules.get(rewardRule = "1")
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

Update a reward rule

[API reference](https://sell.app/docs/api/reward-rules/update-a-reward-rule) · Effect: **consequential**

```kotlin
fun replace(
        rewardRule: String,
        name: String? = null,
        description: String? = null,
        isActive: Boolean? = null,
        triggerType: SdkCreateRewardRuleRequestApplicationJsonTriggerType? = null,
        triggerThreshold: Long? = null,
        outputs: List<ReplaceRewardRuleRequestApplicationJsonPropertyOutputsItem>? = null,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceRewardRuleResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| rewardRule | `String` | Yes |
| name | `String?` | No |
| description | `String?` | No |
| isActive | `Boolean?` | No |
| triggerType | `SdkCreateRewardRuleRequestApplicationJsonTriggerType?` | No |
| triggerThreshold | `Long?` | No |
| outputs | `List<ReplaceRewardRuleRequestApplicationJsonPropertyOutputsItem>?` | No |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceRewardRuleResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.rewardRules.replace(rewardRule = "1", isActive = false)
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

Update a reward rule

[API reference](https://sell.app/docs/api/reward-rules/update-a-reward-rule) · Effect: **consequential**

```kotlin
fun update(
        rewardRule: String,
        name: PatchField<String> = PatchField.Absent,
        description: PatchField<String?> = PatchField.Absent,
        isActive: PatchField<Boolean> = PatchField.Absent,
        triggerType: PatchField<SdkCreateRewardRuleRequestApplicationJsonTriggerType> =
            PatchField.Absent,
        triggerThreshold: PatchField<Long> = PatchField.Absent,
        outputs: PatchField<List<UpdateRewardRuleRequestApplicationJsonPropertyOutputsItem>> =
            PatchField.Absent,
        expectedUpdatedAt: PatchField<OffsetDateTime> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateRewardRuleResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| rewardRule | `String` | Yes |
| name | `PatchField<String>` | No |
| description | `PatchField<String?>` | No |
| isActive | `PatchField<Boolean>` | No |
| triggerType | `PatchField<SdkCreateRewardRuleRequestApplicationJsonTriggerType>` | No |
| triggerThreshold | `PatchField<Long>` | No |
| outputs | `PatchField<List<UpdateRewardRuleRequestApplicationJsonPropertyOutputsItem>>` | No |
| expectedUpdatedAt | `PatchField<OffsetDateTime>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateRewardRuleResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.rewardRules.update(rewardRule = "1", isActive = app.sell.sellapp.common.http.PatchField.Present(false))
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

