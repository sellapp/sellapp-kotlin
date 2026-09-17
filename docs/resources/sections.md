# sections

[All resources](../methods.md)

## list

List all sections

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListSectionsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListSectionsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.list()
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## create

Create a section

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```kotlin
fun create(
        title: String,
        hidden: Boolean,
        requestOptions: RequestOptions? = null,
    ): SdkCreateSectionResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| title | `String` | Yes |
| hidden | `Boolean` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateSectionResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.create(title = "Founder resources", hidden = false)
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 201, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## get

Retrieve a section

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```kotlin
fun get(
        section: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetSectionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetSectionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.get(section = "1")
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## replace

Update a section

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```kotlin
fun replace(
        section: String,
        title: String? = null,
        hidden: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceSectionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `String` | Yes |
| title | `String?` | No |
| hidden | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceSectionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.replace(section = "1", title = "Founder resources", hidden = false)
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## update

Update a section

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```kotlin
fun update(
        section: String,
        title: PatchField<String> = PatchField.Absent,
        hidden: PatchField<Boolean> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateSectionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `String` | Yes |
| title | `PatchField<String>` | No |
| hidden | `PatchField<Boolean>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateSectionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.update(section = "1", title = app.sell.sellapp.common.http.PatchField.Present("Founder resources"), hidden = app.sell.sellapp.common.http.PatchField.Present(false))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## delete

Delete a section

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```kotlin
fun delete(
        section: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.delete(section = "1")
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## replaceOrder

Replace section order

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```kotlin
fun replaceOrder(
        resources: List<Long>,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceSectionOrderResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| resources | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceSectionOrderResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.replaceOrder(resources = listOf(3L, 1L, 2L))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## replaceProducts

Replace section products

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```kotlin
fun replaceProducts(
        section: String,
        resources: List<Long>,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceSectionProductsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `String` | Yes |
| resources | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceSectionProductsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.replaceProducts(section = "1", resources = listOf(3L, 1L, 2L))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## replaceGroups

Replace section groups

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```kotlin
fun replaceGroups(
        section: String,
        resources: List<Long>,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceSectionGroupsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `String` | Yes |
| resources | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceSectionGroupsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.replaceGroups(section = "1", resources = listOf(3L, 1L, 2L))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## search

Search sections

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```kotlin
fun search(
        filters: List<SearchSectionsRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<SearchSectionsRequestApplicationJsonPropertySortItem>? = null,
        search: SearchSectionsRequestApplicationJsonPropertySearch? = null,
        includes: List<SearchSectionsRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SearchSectionsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| filters | `List<SearchSectionsRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<SearchSectionsRequestApplicationJsonPropertySortItem>?` | No |
| search | `SearchSectionsRequestApplicationJsonPropertySearch?` | No |
| includes | `List<SearchSectionsRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SearchSectionsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.search(filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":1}", app.sell.sellapp.models.SearchSectionsRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.SearchSectionsRequestApplicationJsonPropertySortItem::class.java)))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## batchCreate

Batch create sections

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```kotlin
fun batchCreate(
        resources: List<BatchCreateSectionsRequestApplicationJsonPropertyResourcesItem>,
        requestOptions: RequestOptions? = null,
    ): SdkBatchCreateSectionsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| resources | `List<BatchCreateSectionsRequestApplicationJsonPropertyResourcesItem>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkBatchCreateSectionsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.batchCreate(resources = listOf(ObjectMapperFactory.read("{\"title\":\"Featured\",\"hidden\":false}", app.sell.sellapp.models.BatchCreateSectionsRequestApplicationJsonPropertyResourcesItem::class.java)))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 201, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## batchUpdate

Batch update sections

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```kotlin
fun batchUpdate(
        resources: BatchUpdateSectionsRequestApplicationJsonPropertyResources,
        requestOptions: RequestOptions? = null,
    ): SdkBatchUpdateSectionsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| resources | `BatchUpdateSectionsRequestApplicationJsonPropertyResources` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkBatchUpdateSectionsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.batchUpdate(resources = ObjectMapperFactory.read("{\"1\":{\"title\":\"Featured\",\"hidden\":false}}", app.sell.sellapp.models.BatchUpdateSectionsRequestApplicationJsonPropertyResources::class.java))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## batchDelete

Batch delete sections

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```kotlin
fun batchDelete(
        resources: List<Long>,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| resources | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.batchDelete(resources = listOf(1L, 2L))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## v2ListSections

List all sections

[API reference](https://sell.app/docs/api/sections/list-all-sections) · Effect: **read**

```kotlin
fun v2ListSections(
        limit: Long? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<V2ListSectionsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Long?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<V2ListSectionsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.v2ListSections()
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

## v2CreateSection

Create a section

[API reference](https://sell.app/docs/api/sections/create-a-section) · Effect: **write**

```kotlin
fun v2CreateSection(
        title: String,
        hidden: Boolean,
        requestOptions: RequestOptions? = null,
    ): SdkV2CreateSectionResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| title | `String` | Yes |
| hidden | `Boolean` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2CreateSectionResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.v2CreateSection(title = "Founder resources", hidden = false)
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

## v2SearchSections

Search sections

[API reference](https://sell.app/docs/api/sections/search-sections) · Effect: **read**

```kotlin
fun v2SearchSections(
        filters: List<V2SearchSectionsRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<V2SearchSectionsRequestApplicationJsonPropertySortItem>? = null,
        search: V2SearchSectionsRequestApplicationJsonPropertySearch? = null,
        includes: List<V2SearchSectionsRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<V2SearchSectionsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| filters | `List<V2SearchSectionsRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<V2SearchSectionsRequestApplicationJsonPropertySortItem>?` | No |
| search | `V2SearchSectionsRequestApplicationJsonPropertySearch?` | No |
| includes | `List<V2SearchSectionsRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<V2SearchSectionsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.v2SearchSections(filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":1}", app.sell.sellapp.models.V2SearchSectionsRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.V2SearchSectionsRequestApplicationJsonPropertySortItem::class.java)))
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

## v2GetSection

Retrieve a section

[API reference](https://sell.app/docs/api/sections/retrieve-a-section) · Effect: **read**

```kotlin
fun v2GetSection(
        section: String,
        requestOptions: RequestOptions? = null,
    ): SdkV2GetSectionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2GetSectionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.v2GetSection(section = "1")
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

## v2ReplaceSection

Update a section

[API reference](https://sell.app/docs/api/sections/update-a-section) · Effect: **write**

```kotlin
fun v2ReplaceSection(
        section: String,
        title: String? = null,
        hidden: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): SdkV2ReplaceSectionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `String` | Yes |
| title | `String?` | No |
| hidden | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2ReplaceSectionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.v2ReplaceSection(section = "1", title = "Founder resources", hidden = false)
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

## v2UpdateSection

Update a section

[API reference](https://sell.app/docs/api/sections/update-a-section) · Effect: **write**

```kotlin
fun v2UpdateSection(
        section: String,
        title: PatchField<String> = PatchField.Absent,
        hidden: PatchField<Boolean> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkV2UpdateSectionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `String` | Yes |
| title | `PatchField<String>` | No |
| hidden | `PatchField<Boolean>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2UpdateSectionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.v2UpdateSection(section = "1", title = app.sell.sellapp.common.http.PatchField.Present("Founder resources"), hidden = app.sell.sellapp.common.http.PatchField.Present(false))
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

## v2DeleteSection

Delete a section

[API reference](https://sell.app/docs/api/sections/delete-a-section) · Effect: **consequential**

```kotlin
fun v2DeleteSection(
        section: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.v2DeleteSection(section = "1")
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

## v2BatchCreateSections

Batch create sections

[API reference](https://sell.app/docs/api/sections/batch-create-sections) · Effect: **consequential**

```kotlin
fun v2BatchCreateSections(
        resources: List<V2BatchCreateSectionsRequestApplicationJsonPropertyResourcesItem>,
        requestOptions: RequestOptions? = null,
    ): SdkV2BatchCreateSectionsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| resources | `List<V2BatchCreateSectionsRequestApplicationJsonPropertyResourcesItem>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2BatchCreateSectionsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.v2BatchCreateSections(resources = listOf(ObjectMapperFactory.read("{\"title\":\"Featured\",\"hidden\":false}", app.sell.sellapp.models.V2BatchCreateSectionsRequestApplicationJsonPropertyResourcesItem::class.java)))
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

Documented HTTP responses: 200, 201, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## v2BatchUpdateSections

Batch update sections

[API reference](https://sell.app/docs/api/sections/batch-update-sections) · Effect: **consequential**

```kotlin
fun v2BatchUpdateSections(
        resources: V2BatchUpdateSectionsRequestApplicationJsonPropertyResources,
        requestOptions: RequestOptions? = null,
    ): SdkV2BatchUpdateSectionsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| resources | `V2BatchUpdateSectionsRequestApplicationJsonPropertyResources` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2BatchUpdateSectionsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.v2BatchUpdateSections(resources = ObjectMapperFactory.read("{\"1\":{\"title\":\"Featured\",\"hidden\":false}}", app.sell.sellapp.models.V2BatchUpdateSectionsRequestApplicationJsonPropertyResources::class.java))
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

## v2BatchDeleteSections

Batch delete sections

[API reference](https://sell.app/docs/api/sections/batch-delete-sections) · Effect: **consequential**

```kotlin
fun v2BatchDeleteSections(
        resources: List<Long>,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| resources | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.v2BatchDeleteSections(resources = listOf(1L, 2L))
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

## v2ReplaceSectionOrder

Replace section order

[API reference](https://sell.app/docs/api/sections/order-sections) · Effect: **consequential**

```kotlin
fun v2ReplaceSectionOrder(
        resources: List<Long>,
        requestOptions: RequestOptions? = null,
    ): SdkV2ReplaceSectionOrderResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| resources | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2ReplaceSectionOrderResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.v2ReplaceSectionOrder(resources = listOf(3L, 1L, 2L))
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

## v2ReplaceSectionProducts

Replace section products

[API reference](https://sell.app/docs/api/sections/replace-section-products) · Effect: **consequential**

```kotlin
fun v2ReplaceSectionProducts(
        section: String,
        resources: List<Long>,
        requestOptions: RequestOptions? = null,
    ): SdkV2ReplaceSectionProductsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `String` | Yes |
| resources | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2ReplaceSectionProductsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.v2ReplaceSectionProducts(section = "1", resources = listOf(3L, 1L, 2L))
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

## v2ReplaceSectionGroups

Replace section groups

[API reference](https://sell.app/docs/api/sections/replace-section-groups) · Effect: **consequential**

```kotlin
fun v2ReplaceSectionGroups(
        section: String,
        resources: List<Long>,
        requestOptions: RequestOptions? = null,
    ): SdkV2ReplaceSectionGroupsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `String` | Yes |
| resources | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2ReplaceSectionGroupsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.sections.v2ReplaceSectionGroups(section = "1", resources = listOf(3L, 1L, 2L))
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

