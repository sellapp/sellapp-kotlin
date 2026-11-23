# checkoutFieldTemplates

[All resources](../methods.md)

## list

List checkout field templates

[API reference](https://sell.app/docs/api/checkout-field-templates/list-checkout-field-templates) · Effect: **read**

```kotlin
fun list(
        search: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkListCheckoutFieldTemplatesResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| search | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkListCheckoutFieldTemplatesResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.checkoutFieldTemplates.list()
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

Create a checkout field template

[API reference](https://sell.app/docs/api/checkout-field-templates/create-a-checkout-field-template) · Effect: **consequential**

```kotlin
fun create(
        name: String,
        fields: List<CreateCheckoutFieldTemplateRequestApplicationJsonPropertyFieldsItem>,
        requestOptions: RequestOptions? = null,
    ): SdkCreateCheckoutFieldTemplateResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| name | `String` | Yes |
| fields | `List<CreateCheckoutFieldTemplateRequestApplicationJsonPropertyFieldsItem>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateCheckoutFieldTemplateResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.checkoutFieldTemplates.create(name = "Discord access", fields = listOf(ObjectMapperFactory.read("{\"type\":\"text\",\"label\":\"Discord username\",\"key\":\"discord_username\",\"required\":true,\"placeholder\":\"name#0001\",\"description\":\"We add this account to the community after purchase.\"}", app.sell.sellapp.models.CreateCheckoutFieldTemplateRequestApplicationJsonPropertyFieldsItem::class.java), ObjectMapperFactory.read("{\"type\":\"radio\",\"label\":\"Experience level\",\"key\":\"experience_level\",\"required\":false,\"options\":[\"Beginner\",\"Intermediate\",\"Advanced\"],\"variant\":\"cards\",\"variant_options\":{\"vertical\":true,\"indicator\":true}}", app.sell.sellapp.models.CreateCheckoutFieldTemplateRequestApplicationJsonPropertyFieldsItem::class.java)))
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

Retrieve a checkout field template

[API reference](https://sell.app/docs/api/checkout-field-templates/retrieve-a-checkout-field-template) · Effect: **read**

```kotlin
fun get(
        checkoutFieldTemplate: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetCheckoutFieldTemplateResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| checkoutFieldTemplate | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetCheckoutFieldTemplateResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.checkoutFieldTemplates.get(checkoutFieldTemplate = "14")
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

Update a checkout field template

[API reference](https://sell.app/docs/api/checkout-field-templates/update-a-checkout-field-template) · Effect: **consequential**

```kotlin
fun replace(
        checkoutFieldTemplate: String,
        name: String? = null,
        fields: List<ReplaceCheckoutFieldTemplateRequestApplicationJsonPropertyFieldsItem>? = null,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceCheckoutFieldTemplateResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| checkoutFieldTemplate | `String` | Yes |
| name | `String?` | No |
| fields | `List<ReplaceCheckoutFieldTemplateRequestApplicationJsonPropertyFieldsItem>?` | No |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceCheckoutFieldTemplateResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.checkoutFieldTemplates.replace(checkoutFieldTemplate = "14", name = "Discord onboarding", expectedUpdatedAt = java.time.OffsetDateTime.parse("2026-09-04T09:00:00.000000Z"))
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

Update a checkout field template

[API reference](https://sell.app/docs/api/checkout-field-templates/update-a-checkout-field-template) · Effect: **consequential**

```kotlin
fun update(
        checkoutFieldTemplate: String,
        name: PatchField<String> = PatchField.Absent,
        fields:
            PatchField<List<UpdateCheckoutFieldTemplateRequestApplicationJsonPropertyFieldsItem>> =
            PatchField.Absent,
        expectedUpdatedAt: PatchField<OffsetDateTime> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateCheckoutFieldTemplateResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| checkoutFieldTemplate | `String` | Yes |
| name | `PatchField<String>` | No |
| fields | `PatchField<List<UpdateCheckoutFieldTemplateRequestApplicationJsonPropertyFieldsItem>>` | No |
| expectedUpdatedAt | `PatchField<OffsetDateTime>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateCheckoutFieldTemplateResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.checkoutFieldTemplates.update(checkoutFieldTemplate = "14", name = app.sell.sellapp.common.http.PatchField.Present("Discord onboarding"), expectedUpdatedAt = app.sell.sellapp.common.http.PatchField.Present(java.time.OffsetDateTime.parse("2026-09-04T09:00:00.000000Z")))
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

Delete a checkout field template

[API reference](https://sell.app/docs/api/checkout-field-templates/delete-a-checkout-field-template) · Effect: **consequential**

```kotlin
fun delete(
        checkoutFieldTemplate: String,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| checkoutFieldTemplate | `String` | Yes |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.checkoutFieldTemplates.delete(checkoutFieldTemplate = "14", expectedUpdatedAt = java.time.OffsetDateTime.parse("2026-09-04T09:00:00.000000Z"))
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

## duplicate

Duplicate a checkout field template

[API reference](https://sell.app/docs/api/checkout-field-templates/duplicate-a-checkout-field-template) · Effect: **consequential**

```kotlin
fun duplicate(
        checkoutFieldTemplate: String,
        name: String,
        requestOptions: RequestOptions? = null,
    ): SdkDuplicateCheckoutFieldTemplateResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| checkoutFieldTemplate | `String` | Yes |
| name | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkDuplicateCheckoutFieldTemplateResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.checkoutFieldTemplates.duplicate(checkoutFieldTemplate = "14", name = "Discord access for courses")
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

