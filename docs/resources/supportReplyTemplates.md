# supportReplyTemplates

[All resources](../methods.md)

## list

List support reply templates

[API reference](https://sell.app/docs/api/support-reply-templates/list-support-reply-templates) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        activeState: SupportReasonsActiveState? = null,
        availability: SupportReplyTemplatesAvailability? = null,
        search: String? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListSupportReplyTemplatesResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| activeState | `SupportReasonsActiveState?` | No |
| availability | `SupportReplyTemplatesAvailability?` | No |
| search | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListSupportReplyTemplatesResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportReplyTemplates.list()
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

Create a support reply template

[API reference](https://sell.app/docs/api/support-reply-templates/create-a-support-reply-template) · Effect: **consequential**

```kotlin
fun create(
        label: String,
        body: String,
        isActive: Boolean? = null,
        supportsManual: Boolean? = null,
        supportsAutoRespond: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateSupportReplyTemplateResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| label | `String` | Yes |
| body | `String` | Yes |
| isActive | `Boolean?` | No |
| supportsManual | `Boolean?` | No |
| supportsAutoRespond | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateSupportReplyTemplateResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportReplyTemplates.create(label = "Refund credited", body = "Hi {customer_email}, we credited {refund_amount} to your {store_name} wallet for {product_title}. Your wallet balance is now {wallet_balance}.", supportsAutoRespond = true)
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

Retrieve a support reply template

[API reference](https://sell.app/docs/api/support-reply-templates/retrieve-a-support-reply-template) · Effect: **read**

```kotlin
fun get(
        supportReplyTemplate: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetSupportReplyTemplateResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReplyTemplate | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetSupportReplyTemplateResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportReplyTemplates.get(supportReplyTemplate = "32")
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

Update a support reply template

[API reference](https://sell.app/docs/api/support-reply-templates/update-a-support-reply-template) · Effect: **consequential**

```kotlin
fun replace(
        supportReplyTemplate: String,
        label: String? = null,
        body: String? = null,
        isActive: Boolean? = null,
        supportsManual: Boolean? = null,
        supportsAutoRespond: Boolean? = null,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceSupportReplyTemplateResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReplyTemplate | `String` | Yes |
| label | `String?` | No |
| body | `String?` | No |
| isActive | `Boolean?` | No |
| supportsManual | `Boolean?` | No |
| supportsAutoRespond | `Boolean?` | No |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceSupportReplyTemplateResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportReplyTemplates.replace(supportReplyTemplate = "31", isActive = false, expectedUpdatedAt = java.time.OffsetDateTime.parse("2026-07-03T09:12:00.000000Z"))
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

Update a support reply template

[API reference](https://sell.app/docs/api/support-reply-templates/update-a-support-reply-template) · Effect: **consequential**

```kotlin
fun update(
        supportReplyTemplate: String,
        label: PatchField<String> = PatchField.Absent,
        body: PatchField<String> = PatchField.Absent,
        isActive: PatchField<Boolean> = PatchField.Absent,
        supportsManual: PatchField<Boolean> = PatchField.Absent,
        supportsAutoRespond: PatchField<Boolean> = PatchField.Absent,
        expectedUpdatedAt: PatchField<OffsetDateTime> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateSupportReplyTemplateResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReplyTemplate | `String` | Yes |
| label | `PatchField<String>` | No |
| body | `PatchField<String>` | No |
| isActive | `PatchField<Boolean>` | No |
| supportsManual | `PatchField<Boolean>` | No |
| supportsAutoRespond | `PatchField<Boolean>` | No |
| expectedUpdatedAt | `PatchField<OffsetDateTime>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateSupportReplyTemplateResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportReplyTemplates.update(supportReplyTemplate = "31", isActive = app.sell.sellapp.common.http.PatchField.Present(false), expectedUpdatedAt = app.sell.sellapp.common.http.PatchField.Present(java.time.OffsetDateTime.parse("2026-07-03T09:12:00.000000Z")))
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

Delete a support reply template

[API reference](https://sell.app/docs/api/support-reply-templates/delete-a-support-reply-template) · Effect: **consequential**

```kotlin
fun delete(
        supportReplyTemplate: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReplyTemplate | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportReplyTemplates.delete(supportReplyTemplate = "33")
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

## render

Render a support reply template

[API reference](https://sell.app/docs/api/support-reply-templates/render-a-support-reply-template) · Effect: **consequential**

```kotlin
fun render(
        supportReplyTemplate: String,
        ticketId: Long,
        values: RenderSupportReplyTemplateRequestApplicationJsonPropertyValues? = null,
        invoiceId: Long? = null,
        refundAmountCents: Long? = null,
        requestOptions: RequestOptions? = null,
    ): SdkRenderSupportReplyTemplateResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReplyTemplate | `String` | Yes |
| ticketId | `Long` | Yes |
| values | `RenderSupportReplyTemplateRequestApplicationJsonPropertyValues?` | No |
| invoiceId | `Long?` | No |
| refundAmountCents | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkRenderSupportReplyTemplateResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportReplyTemplates.render(supportReplyTemplate = "1", ticketId = 4821L, invoiceId = 7001L, refundAmountCents = 999L)
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

Reorder support reply templates

[API reference](https://sell.app/docs/api/support-reply-templates/reorder-support-reply-templates) · Effect: **consequential**

```kotlin
fun reorder(
        orderedTemplateIds: List<Long>,
        requestOptions: RequestOptions? = null,
    ): SdkReorderSupportReplyTemplatesResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| orderedTemplateIds | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReorderSupportReplyTemplatesResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportReplyTemplates.reorder(orderedTemplateIds = listOf(32L, 31L))
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

## getOptions

Retrieve support reply template options

[API reference](https://sell.app/docs/api/support-reply-templates/support-reply-template-options) · Effect: **read**

```kotlin
fun getOptions(
        body: String? = null,
        requestedPlaceholders: List<String>? = null,
        requestOptions: RequestOptions? = null,
    ): SdkGetSupportReplyTemplateOptionsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| body | `String?` | No |
| requestedPlaceholders | `List<String>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetSupportReplyTemplateOptionsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportReplyTemplates.getOptions()
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

