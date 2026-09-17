# groups

[All resources](../methods.md)

## list

List all groups

[API reference](https://sell.app/docs/api/groups/list-all-groups) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListGroupsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListGroupsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.groups.list()
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

Create a group

[API reference](https://sell.app/docs/api/groups/create-a-group) · Effect: **write**

```kotlin
fun create(
        title: String,
        unlisted: Boolean,
        order: Long? = null,
        productIds: List<Long>? = null,
        sectionId: Long? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateGroupResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| title | `String` | Yes |
| unlisted | `Boolean` | Yes |
| order | `Long?` | No |
| productIds | `List<Long>?` | No |
| sectionId | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateGroupResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.groups.create(title = "Design kit", unlisted = true)
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

Retrieve a group

[API reference](https://sell.app/docs/api/groups/retrieve-a-group) · Effect: **read**

```kotlin
fun get(
        group: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetGroupResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| group | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetGroupResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.groups.get(group = "1")
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

Update a group

[API reference](https://sell.app/docs/api/groups/update-a-group) · Effect: **consequential**

```kotlin
fun update(
        group: String,
        title: PatchField<String> = PatchField.Absent,
        unlisted: PatchField<Boolean> = PatchField.Absent,
        order: PatchField<Long?> = PatchField.Absent,
        productIds: PatchField<List<Long>> = PatchField.Absent,
        sectionId: PatchField<Long?> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateGroupResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| group | `String` | Yes |
| title | `PatchField<String>` | No |
| unlisted | `PatchField<Boolean>` | No |
| order | `PatchField<Long?>` | No |
| productIds | `PatchField<List<Long>>` | No |
| sectionId | `PatchField<Long?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateGroupResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.groups.update(group = "1", title = app.sell.sellapp.common.http.PatchField.Present("Founder reading room"), unlisted = app.sell.sellapp.common.http.PatchField.Present(true))
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

Delete a group

[API reference](https://sell.app/docs/api/groups/delete-a-group) · Effect: **consequential**

```kotlin
fun delete(
        group: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| group | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.groups.delete(group = "1")
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

## search

Search groups

[API reference](https://sell.app/docs/api/groups/search-groups) · Effect: **read**

```kotlin
fun search(
        filters: List<SearchGroupsRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<SearchGroupsRequestApplicationJsonPropertySortItem>? = null,
        search: SearchGroupsRequestApplicationJsonPropertySearch? = null,
        includes: List<SearchGroupsRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SearchGroupsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| filters | `List<SearchGroupsRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<SearchGroupsRequestApplicationJsonPropertySortItem>?` | No |
| search | `SearchGroupsRequestApplicationJsonPropertySearch?` | No |
| includes | `List<SearchGroupsRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SearchGroupsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.groups.search(filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":1}", app.sell.sellapp.models.SearchGroupsRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.SearchGroupsRequestApplicationJsonPropertySortItem::class.java)))
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

