# supportReasons

[All resources](../methods.md)

## list

List support reasons

[API reference](https://sell.app/docs/api/support-reasons/list-support-reasons) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        activeState: SupportReasonsActiveState? = null,
        productScope: SupportReasonsProductScope? = null,
        search: String? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListSupportReasonsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| activeState | `SupportReasonsActiveState?` | No |
| productScope | `SupportReasonsProductScope?` | No |
| search | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListSupportReasonsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportReasons.list()
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

Create a support reason

[API reference](https://sell.app/docs/api/support-reasons/create-a-support-reason) · Effect: **consequential**

```kotlin
fun create(
        label: String,
        description: String? = null,
        isActive: Boolean? = null,
        productIds: List<Long>? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateSupportReasonResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| label | `String` | Yes |
| description | `String?` | No |
| isActive | `Boolean?` | No |
| productIds | `List<Long>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateSupportReasonResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportReasons.create(label = "Download link expired", description = "The download link in the order email no longer works.")
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

Retrieve a support reason

[API reference](https://sell.app/docs/api/support-reasons/retrieve-a-support-reason) · Effect: **read**

```kotlin
fun get(
        supportReason: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetSupportReasonResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReason | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetSupportReasonResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportReasons.get(supportReason = "14")
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

Update a support reason

[API reference](https://sell.app/docs/api/support-reasons/update-a-support-reason) · Effect: **consequential**

```kotlin
fun replace(
        supportReason: String,
        label: String? = null,
        description: String? = null,
        isActive: Boolean? = null,
        productIds: List<Long>? = null,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceSupportReasonResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReason | `String` | Yes |
| label | `String?` | No |
| description | `String?` | No |
| isActive | `Boolean?` | No |
| productIds | `List<Long>?` | No |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceSupportReasonResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportReasons.replace(supportReason = "14", description = "The download link in the order email no longer opens.", expectedUpdatedAt = java.time.OffsetDateTime.parse("2026-07-03T09:10:00.000000Z"))
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

Update a support reason

[API reference](https://sell.app/docs/api/support-reasons/update-a-support-reason) · Effect: **consequential**

```kotlin
fun update(
        supportReason: String,
        label: PatchField<String> = PatchField.Absent,
        description: PatchField<String?> = PatchField.Absent,
        isActive: PatchField<Boolean> = PatchField.Absent,
        productIds: PatchField<List<Long>> = PatchField.Absent,
        expectedUpdatedAt: PatchField<OffsetDateTime> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateSupportReasonResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReason | `String` | Yes |
| label | `PatchField<String>` | No |
| description | `PatchField<String?>` | No |
| isActive | `PatchField<Boolean>` | No |
| productIds | `PatchField<List<Long>>` | No |
| expectedUpdatedAt | `PatchField<OffsetDateTime>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateSupportReasonResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportReasons.update(supportReason = "14", description = app.sell.sellapp.common.http.PatchField.Present("The download link in the order email no longer opens."), expectedUpdatedAt = app.sell.sellapp.common.http.PatchField.Present(java.time.OffsetDateTime.parse("2026-07-03T09:10:00.000000Z")))
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

Delete a support reason

[API reference](https://sell.app/docs/api/support-reasons/delete-a-support-reason) · Effect: **consequential**

```kotlin
fun delete(
        supportReason: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReason | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportReasons.delete(supportReason = "15")
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

## getOptions

Retrieve support reason options

[API reference](https://sell.app/docs/api/support-reasons/support-reason-options) · Effect: **read**

```kotlin
fun getOptions(
        requestOptions: RequestOptions? = null
    ): SdkGetSupportReasonOptionsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetSupportReasonOptionsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.supportReasons.getOptions()
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

