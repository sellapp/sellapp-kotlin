# addOns

[All resources](../methods.md)

## list

List add-ons

[API reference](https://sell.app/docs/api/add-ons/list-add-ons) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        withDrafts: Boolean? = null,
        onlyDrafts: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkListAddOnsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| withDrafts | `Boolean?` | No |
| onlyDrafts | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkListAddOnsResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.addOns.list()
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

Create an add-on draft

[API reference](https://sell.app/docs/api/add-ons/create-an-add-on-draft) · Effect: **consequential**

```kotlin
fun create(
        title: String,
        description: String,
        visibility: CatalogVisibility,
        slug: String? = null,
        isDraft: Boolean? = null,
        parentProductIds: List<Long>? = null,
        variant: CreateAddOnDraftRequestApplicationJsonPropertyVariant? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateAddOnDraftResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| title | `String` | Yes |
| description | `String` | Yes |
| visibility | `CatalogVisibility` | Yes |
| slug | `String?` | No |
| isDraft | `Boolean?` | No |
| parentProductIds | `List<Long>?` | No |
| variant | `CreateAddOnDraftRequestApplicationJsonPropertyVariant?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateAddOnDraftResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.addOns.create(title = "Customer support", description = "Priority support for launches scheduled suspiciously close to Friday.", visibility = app.sell.sellapp.types.CatalogVisibility("PUBLIC"), parentProductIds = listOf(120L, 121L))
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

Search add-ons

[API reference](https://sell.app/docs/api/add-ons/search-add-ons) · Effect: **read**

```kotlin
fun search(
        limit: Long? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        withDrafts: Boolean? = null,
        onlyDrafts: Boolean? = null,
        filters: List<SearchAddOnsRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<SearchAddOnsRequestApplicationJsonPropertySortItem>? = null,
        search: SearchAddOnsRequestApplicationJsonPropertySearch? = null,
        includes: List<SearchAddOnsRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkSearchAddOnsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Long?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| withDrafts | `Boolean?` | No |
| onlyDrafts | `Boolean?` | No |
| filters | `List<SearchAddOnsRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<SearchAddOnsRequestApplicationJsonPropertySortItem>?` | No |
| search | `SearchAddOnsRequestApplicationJsonPropertySearch?` | No |
| includes | `List<SearchAddOnsRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkSearchAddOnsResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.addOns.search(filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":410}", app.sell.sellapp.models.SearchAddOnsRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.SearchAddOnsRequestApplicationJsonPropertySortItem::class.java)))
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

Retrieve an add-on

[API reference](https://sell.app/docs/api/add-ons/retrieve-an-add-on) · Effect: **read**

```kotlin
fun get(
        addon: String,
        pagination: Boolean? = null,
        withDrafts: Boolean? = null,
        onlyDrafts: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): SdkGetAddOnResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| addon | `String` | Yes |
| pagination | `Boolean?` | No |
| withDrafts | `Boolean?` | No |
| onlyDrafts | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetAddOnResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.addOns.get(addon = "410")
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

Update an add-on

[API reference](https://sell.app/docs/api/add-ons/replace-an-add-on) · Effect: **consequential**

```kotlin
fun replace(
        addon: String,
        title: String? = null,
        slug: String? = null,
        description: String? = null,
        visibility: CatalogVisibility? = null,
        isDraft: Boolean? = null,
        parentProductIds: List<Long>? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceAddOnResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| addon | `String` | Yes |
| title | `String?` | No |
| slug | `String?` | No |
| description | `String?` | No |
| visibility | `CatalogVisibility?` | No |
| isDraft | `Boolean?` | No |
| parentProductIds | `List<Long>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceAddOnResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.addOns.replace(addon = "410", description = "Priority email, chat, and launch-day reassurance.", isDraft = false)
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

Update an add-on

[API reference](https://sell.app/docs/api/add-ons/update-an-add-on) · Effect: **consequential**

```kotlin
fun update(
        addon: String,
        title: PatchField<String> = PatchField.Absent,
        slug: PatchField<String> = PatchField.Absent,
        description: PatchField<String> = PatchField.Absent,
        visibility: PatchField<CatalogVisibility> = PatchField.Absent,
        isDraft: PatchField<Boolean> = PatchField.Absent,
        parentProductIds: PatchField<List<Long>> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateAddOnResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| addon | `String` | Yes |
| title | `PatchField<String>` | No |
| slug | `PatchField<String>` | No |
| description | `PatchField<String>` | No |
| visibility | `PatchField<CatalogVisibility>` | No |
| isDraft | `PatchField<Boolean>` | No |
| parentProductIds | `PatchField<List<Long>>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateAddOnResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.addOns.update(addon = "410", description = app.sell.sellapp.common.http.PatchField.Present("Priority email, chat, and launch-day reassurance."), isDraft = app.sell.sellapp.common.http.PatchField.Present(false))
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

Delete an add-on

[API reference](https://sell.app/docs/api/add-ons/delete-an-add-on) · Effect: **consequential**

```kotlin
fun delete(
        addon: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| addon | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.addOns.delete(addon = "410")
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

