# supportAutomationRules

[All resources](../methods.md)

## list

List support automation rules

[API reference](https://sell.app/docs/api/support-automation-rules/list-support-automation-rules) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        activeState: SupportReasonsActiveState? = null,
        archiveState: SupportAutomationRulesArchiveState? = null,
        search: String? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListSupportAutomationRulesResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| activeState | `SupportReasonsActiveState?` | No |
| archiveState | `SupportAutomationRulesArchiveState?` | No |
| search | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListSupportAutomationRulesResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportAutomationRules.list()
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

Create a support automation rule

[API reference](https://sell.app/docs/api/support-automation-rules/create-a-support-automation-rule) · Effect: **consequential**

```kotlin
fun create(
        name: String,
        responseTemplateId: Long?,
        matchReasonSource: MatchReasonSource? = null,
        matchReasonCode: String? = null,
        matchProductIds: List<Long>? = null,
        matchCustomerFilter: MatchCustomerFilter? = null,
        historyWindow: HistoryWindow? = null,
        matchMinOrderTotalCents: Long? = null,
        matchMaxOrderTotalCents: Long? = null,
        minCompletedOrders: Long? = null,
        maxCompletedOrders: Long? = null,
        minLifetimeSpendCents: Long? = null,
        maxLifetimeSpendCents: Long? = null,
        minPriorTicketCount: Long? = null,
        maxPriorTicketCount: Long? = null,
        minPriorSupportRefundCount: Long? = null,
        maxPriorSupportRefundCount: Long? = null,
        minPriorSupportRefundCents: Long? = null,
        maxPriorSupportRefundCents: Long? = null,
        customerAgeDaysMin: Long? = null,
        customerAgeDaysMax: Long? = null,
        actionRefundKind: ActionRefundKind? = null,
        actionRefundPercentBasis: Long? = null,
        actionRefundFixedCents: Long? = null,
        actionRefundCapCents: Long? = null,
        actionCloseOutcome: Outcome? = null,
        isActive: Boolean? = null,
        id: Long? = null,
        archived: Boolean? = null,
        currency: String? = null,
        createdAt: OffsetDateTime? = null,
        updatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateSupportAutomationRuleResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| name | `String` | Yes |
| responseTemplateId | `Long?` | No |
| matchReasonSource | `MatchReasonSource?` | No |
| matchReasonCode | `String?` | No |
| matchProductIds | `List<Long>?` | No |
| matchCustomerFilter | `MatchCustomerFilter?` | No |
| historyWindow | `HistoryWindow?` | No |
| matchMinOrderTotalCents | `Long?` | No |
| matchMaxOrderTotalCents | `Long?` | No |
| minCompletedOrders | `Long?` | No |
| maxCompletedOrders | `Long?` | No |
| minLifetimeSpendCents | `Long?` | No |
| maxLifetimeSpendCents | `Long?` | No |
| minPriorTicketCount | `Long?` | No |
| maxPriorTicketCount | `Long?` | No |
| minPriorSupportRefundCount | `Long?` | No |
| maxPriorSupportRefundCount | `Long?` | No |
| minPriorSupportRefundCents | `Long?` | No |
| maxPriorSupportRefundCents | `Long?` | No |
| customerAgeDaysMin | `Long?` | No |
| customerAgeDaysMax | `Long?` | No |
| actionRefundKind | `ActionRefundKind?` | No |
| actionRefundPercentBasis | `Long?` | No |
| actionRefundFixedCents | `Long?` | No |
| actionRefundCapCents | `Long?` | No |
| actionCloseOutcome | `Outcome?` | No |
| isActive | `Boolean?` | No |
| id | `Long?` | No |
| archived | `Boolean?` | No |
| currency | `String?` | No |
| createdAt | `OffsetDateTime?` | No |
| updatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateSupportAutomationRuleResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportAutomationRules.create(name = "Expired download links", matchReasonSource = app.sell.sellapp.types.MatchReasonSource("store"), matchReasonCode = "download-link-expired", matchProductIds = listOf(120L), matchMaxOrderTotalCents = 5000L, maxPriorSupportRefundCount = 0L, responseTemplateId = 32L, actionRefundKind = app.sell.sellapp.types.ActionRefundKind("partial"), actionRefundPercentBasis = 5000L, actionRefundCapCents = 1000L, actionCloseOutcome = app.sell.sellapp.types.Outcome("refunded_partial"))
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

## get

Retrieve a support automation rule

[API reference](https://sell.app/docs/api/support-automation-rules/retrieve-a-support-automation-rule) · Effect: **read**

```kotlin
fun get(
        supportAutomationRule: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetSupportAutomationRuleResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportAutomationRule | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetSupportAutomationRuleResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportAutomationRules.get(supportAutomationRule = "7")
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

Update a support automation rule

[API reference](https://sell.app/docs/api/support-automation-rules/update-a-support-automation-rule) · Effect: **consequential**

```kotlin
fun replace(
        supportAutomationRule: String,
        name: String? = null,
        matchReasonSource: MatchReasonSource? = null,
        matchReasonCode: String? = null,
        matchProductIds: List<Long>? = null,
        matchCustomerFilter: MatchCustomerFilter? = null,
        historyWindow: HistoryWindow? = null,
        matchMinOrderTotalCents: Long? = null,
        matchMaxOrderTotalCents: Long? = null,
        minCompletedOrders: Long? = null,
        maxCompletedOrders: Long? = null,
        minLifetimeSpendCents: Long? = null,
        maxLifetimeSpendCents: Long? = null,
        minPriorTicketCount: Long? = null,
        maxPriorTicketCount: Long? = null,
        minPriorSupportRefundCount: Long? = null,
        maxPriorSupportRefundCount: Long? = null,
        minPriorSupportRefundCents: Long? = null,
        maxPriorSupportRefundCents: Long? = null,
        customerAgeDaysMin: Long? = null,
        customerAgeDaysMax: Long? = null,
        responseTemplateId: Long? = null,
        actionRefundKind: ActionRefundKind? = null,
        actionRefundPercentBasis: Long? = null,
        actionRefundFixedCents: Long? = null,
        actionRefundCapCents: Long? = null,
        actionCloseOutcome: Outcome? = null,
        isActive: Boolean? = null,
        clear: List<SdkUpdateSupportAutomationRuleRequestApplicationJsonClear>? = null,
        expectedUpdatedAt: OffsetDateTime? = null,
        id: Long? = null,
        archived: Boolean? = null,
        priority: Long? = null,
        currency: String? = null,
        createdAt: OffsetDateTime? = null,
        updatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceSupportAutomationRuleResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportAutomationRule | `String` | Yes |
| name | `String?` | No |
| matchReasonSource | `MatchReasonSource?` | No |
| matchReasonCode | `String?` | No |
| matchProductIds | `List<Long>?` | No |
| matchCustomerFilter | `MatchCustomerFilter?` | No |
| historyWindow | `HistoryWindow?` | No |
| matchMinOrderTotalCents | `Long?` | No |
| matchMaxOrderTotalCents | `Long?` | No |
| minCompletedOrders | `Long?` | No |
| maxCompletedOrders | `Long?` | No |
| minLifetimeSpendCents | `Long?` | No |
| maxLifetimeSpendCents | `Long?` | No |
| minPriorTicketCount | `Long?` | No |
| maxPriorTicketCount | `Long?` | No |
| minPriorSupportRefundCount | `Long?` | No |
| maxPriorSupportRefundCount | `Long?` | No |
| minPriorSupportRefundCents | `Long?` | No |
| maxPriorSupportRefundCents | `Long?` | No |
| customerAgeDaysMin | `Long?` | No |
| customerAgeDaysMax | `Long?` | No |
| responseTemplateId | `Long?` | No |
| actionRefundKind | `ActionRefundKind?` | No |
| actionRefundPercentBasis | `Long?` | No |
| actionRefundFixedCents | `Long?` | No |
| actionRefundCapCents | `Long?` | No |
| actionCloseOutcome | `Outcome?` | No |
| isActive | `Boolean?` | No |
| clear | `List<SdkUpdateSupportAutomationRuleRequestApplicationJsonClear>?` | No |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| id | `Long?` | No |
| archived | `Boolean?` | No |
| priority | `Long?` | No |
| currency | `String?` | No |
| createdAt | `OffsetDateTime?` | No |
| updatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceSupportAutomationRuleResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportAutomationRules.replace(supportAutomationRule = "7", name = "Expired download links, first refund only", clear = listOf(app.sell.sellapp.types.SdkUpdateSupportAutomationRuleRequestApplicationJsonClear("match_max_order_total_cents")), expectedUpdatedAt = java.time.OffsetDateTime.parse("2026-07-03T09:20:00.000000Z"))
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

Update a support automation rule

[API reference](https://sell.app/docs/api/support-automation-rules/update-a-support-automation-rule) · Effect: **consequential**

```kotlin
fun update(
        supportAutomationRule: String,
        name: PatchField<String> = PatchField.Absent,
        matchReasonSource: PatchField<MatchReasonSource?> = PatchField.Absent,
        matchReasonCode: PatchField<String?> = PatchField.Absent,
        matchProductIds: PatchField<List<Long>> = PatchField.Absent,
        matchCustomerFilter: PatchField<MatchCustomerFilter?> = PatchField.Absent,
        historyWindow: PatchField<HistoryWindow?> = PatchField.Absent,
        matchMinOrderTotalCents: PatchField<Long?> = PatchField.Absent,
        matchMaxOrderTotalCents: PatchField<Long?> = PatchField.Absent,
        minCompletedOrders: PatchField<Long?> = PatchField.Absent,
        maxCompletedOrders: PatchField<Long?> = PatchField.Absent,
        minLifetimeSpendCents: PatchField<Long?> = PatchField.Absent,
        maxLifetimeSpendCents: PatchField<Long?> = PatchField.Absent,
        minPriorTicketCount: PatchField<Long?> = PatchField.Absent,
        maxPriorTicketCount: PatchField<Long?> = PatchField.Absent,
        minPriorSupportRefundCount: PatchField<Long?> = PatchField.Absent,
        maxPriorSupportRefundCount: PatchField<Long?> = PatchField.Absent,
        minPriorSupportRefundCents: PatchField<Long?> = PatchField.Absent,
        maxPriorSupportRefundCents: PatchField<Long?> = PatchField.Absent,
        customerAgeDaysMin: PatchField<Long?> = PatchField.Absent,
        customerAgeDaysMax: PatchField<Long?> = PatchField.Absent,
        responseTemplateId: PatchField<Long?> = PatchField.Absent,
        actionRefundKind: PatchField<ActionRefundKind?> = PatchField.Absent,
        actionRefundPercentBasis: PatchField<Long?> = PatchField.Absent,
        actionRefundFixedCents: PatchField<Long?> = PatchField.Absent,
        actionRefundCapCents: PatchField<Long?> = PatchField.Absent,
        actionCloseOutcome: PatchField<Outcome?> = PatchField.Absent,
        isActive: PatchField<Boolean> = PatchField.Absent,
        clear: PatchField<List<SdkUpdateSupportAutomationRuleRequestApplicationJsonClear>> =
            PatchField.Absent,
        expectedUpdatedAt: PatchField<OffsetDateTime> = PatchField.Absent,
        id: PatchField<Long> = PatchField.Absent,
        archived: PatchField<Boolean> = PatchField.Absent,
        priority: PatchField<Long> = PatchField.Absent,
        currency: PatchField<String> = PatchField.Absent,
        createdAt: PatchField<OffsetDateTime?> = PatchField.Absent,
        updatedAt: PatchField<OffsetDateTime?> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateSupportAutomationRuleResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportAutomationRule | `String` | Yes |
| name | `PatchField<String>` | No |
| matchReasonSource | `PatchField<MatchReasonSource?>` | No |
| matchReasonCode | `PatchField<String?>` | No |
| matchProductIds | `PatchField<List<Long>>` | No |
| matchCustomerFilter | `PatchField<MatchCustomerFilter?>` | No |
| historyWindow | `PatchField<HistoryWindow?>` | No |
| matchMinOrderTotalCents | `PatchField<Long?>` | No |
| matchMaxOrderTotalCents | `PatchField<Long?>` | No |
| minCompletedOrders | `PatchField<Long?>` | No |
| maxCompletedOrders | `PatchField<Long?>` | No |
| minLifetimeSpendCents | `PatchField<Long?>` | No |
| maxLifetimeSpendCents | `PatchField<Long?>` | No |
| minPriorTicketCount | `PatchField<Long?>` | No |
| maxPriorTicketCount | `PatchField<Long?>` | No |
| minPriorSupportRefundCount | `PatchField<Long?>` | No |
| maxPriorSupportRefundCount | `PatchField<Long?>` | No |
| minPriorSupportRefundCents | `PatchField<Long?>` | No |
| maxPriorSupportRefundCents | `PatchField<Long?>` | No |
| customerAgeDaysMin | `PatchField<Long?>` | No |
| customerAgeDaysMax | `PatchField<Long?>` | No |
| responseTemplateId | `PatchField<Long?>` | No |
| actionRefundKind | `PatchField<ActionRefundKind?>` | No |
| actionRefundPercentBasis | `PatchField<Long?>` | No |
| actionRefundFixedCents | `PatchField<Long?>` | No |
| actionRefundCapCents | `PatchField<Long?>` | No |
| actionCloseOutcome | `PatchField<Outcome?>` | No |
| isActive | `PatchField<Boolean>` | No |
| clear | `PatchField<List<SdkUpdateSupportAutomationRuleRequestApplicationJsonClear>>` | No |
| expectedUpdatedAt | `PatchField<OffsetDateTime>` | No |
| id | `PatchField<Long>` | No |
| archived | `PatchField<Boolean>` | No |
| priority | `PatchField<Long>` | No |
| currency | `PatchField<String>` | No |
| createdAt | `PatchField<OffsetDateTime?>` | No |
| updatedAt | `PatchField<OffsetDateTime?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateSupportAutomationRuleResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportAutomationRules.update(supportAutomationRule = "7", name = app.sell.sellapp.common.http.PatchField.Present("Expired download links, first refund only"), clear = app.sell.sellapp.common.http.PatchField.Present(listOf(app.sell.sellapp.types.SdkUpdateSupportAutomationRuleRequestApplicationJsonClear("match_max_order_total_cents"))), expectedUpdatedAt = app.sell.sellapp.common.http.PatchField.Present(java.time.OffsetDateTime.parse("2026-07-03T09:20:00.000000Z")))
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

## updateState

Update a support automation rule state

[API reference](https://sell.app/docs/api/support-automation-rules/change-a-support-automation-rule-state) · Effect: **consequential**

```kotlin
fun updateState(
        supportAutomationRule: String,
        state: SdkUpdateSupportAutomationRuleStateRequestApplicationJsonState,
        expectedUpdatedAt: PatchField<OffsetDateTime> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateSupportAutomationRuleStateResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportAutomationRule | `String` | Yes |
| state | `SdkUpdateSupportAutomationRuleStateRequestApplicationJsonState` | Yes |
| expectedUpdatedAt | `PatchField<OffsetDateTime>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateSupportAutomationRuleStateResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportAutomationRules.updateState(supportAutomationRule = "1", state = app.sell.sellapp.types.SdkUpdateSupportAutomationRuleStateRequestApplicationJsonState("active"), expectedUpdatedAt = app.sell.sellapp.common.http.PatchField.Present(java.time.OffsetDateTime.parse("2026-07-03T09:20:00.000000Z")))
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

## reorder

Reorder support automation rules

[API reference](https://sell.app/docs/api/support-automation-rules/reorder-support-automation-rules) · Effect: **consequential**

```kotlin
fun reorder(
        orderedRuleIds: List<Long>,
        requestOptions: RequestOptions? = null,
    ): SdkReorderSupportAutomationRulesResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| orderedRuleIds | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReorderSupportAutomationRulesResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportAutomationRules.reorder(orderedRuleIds = listOf(7L))
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

## dryRun

Dry run support automation rules

[API reference](https://sell.app/docs/api/support-automation-rules/dry-run-support-automation-rules) · Effect: **read**

```kotlin
fun dryRun(
        ticketId: Long,
        requestOptions: RequestOptions? = null,
    ): SdkDryRunSupportAutomationRulesResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticketId | `Long` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkDryRunSupportAutomationRulesResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportAutomationRules.dryRun(ticketId = 4821L)
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

