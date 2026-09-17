# courses

[All resources](../methods.md)

## list

List courses

[API reference](https://sell.app/docs/api/courses/list-courses) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkListCoursesResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkListCoursesResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.courses.list()
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

## search

Search courses

[API reference](https://sell.app/docs/api/courses/search-courses) · Effect: **read**

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
    ): Page<SdkSearchCoursesResponseValue200ApplicationJson>
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

Returns: `Page<SdkSearchCoursesResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.courses.search(filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":1}", app.sell.sellapp.models.SearchRewardRulesRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.SearchRewardRulesRequestApplicationJsonPropertySortItem::class.java)))
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

Retrieve a course

[API reference](https://sell.app/docs/api/courses/retrieve-course) · Effect: **read**

```kotlin
fun get(
        course: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetCourseResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetCourseResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.courses.get(course = "string_example")
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

Update a course

[API reference](https://sell.app/docs/api/courses/update-course) · Effect: **write**

```kotlin
fun replace(
        course: String,
        category: Category? = null,
        level: SdkUpdateCourseRequestApplicationJsonLevel? = null,
        language: String? = null,
        subtitle: String? = null,
        author: String? = null,
        subcategory: String? = null,
        whatYouLearn: List<String>? = null,
        requirements: List<String>? = null,
        certificateEnabled: Boolean? = null,
        accessType: SdkUpdateCourseRequestApplicationJsonAccessType? = null,
        accessDurationDays: Long? = null,
        enrollmentLimit: Long? = null,
        deliveryText: String? = null,
        visibility: CatalogVisibility? = null,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceCourseResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `String` | Yes |
| category | `Category?` | No |
| level | `SdkUpdateCourseRequestApplicationJsonLevel?` | No |
| language | `String?` | No |
| subtitle | `String?` | No |
| author | `String?` | No |
| subcategory | `String?` | No |
| whatYouLearn | `List<String>?` | No |
| requirements | `List<String>?` | No |
| certificateEnabled | `Boolean?` | No |
| accessType | `SdkUpdateCourseRequestApplicationJsonAccessType?` | No |
| accessDurationDays | `Long?` | No |
| enrollmentLimit | `Long?` | No |
| deliveryText | `String?` | No |
| visibility | `CatalogVisibility?` | No |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceCourseResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.courses.replace(course = "string_example", level = app.sell.sellapp.types.SdkUpdateCourseRequestApplicationJsonLevel("beginner"), visibility = app.sell.sellapp.types.CatalogVisibility("HIDDEN"))
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

Update a course

[API reference](https://sell.app/docs/api/courses/update-course) · Effect: **write**

```kotlin
fun update(
        course: String,
        category: PatchField<Category?> = PatchField.Absent,
        level: PatchField<SdkUpdateCourseRequestApplicationJsonLevel> = PatchField.Absent,
        language: PatchField<String> = PatchField.Absent,
        subtitle: PatchField<String?> = PatchField.Absent,
        author: PatchField<String?> = PatchField.Absent,
        subcategory: PatchField<String?> = PatchField.Absent,
        whatYouLearn: PatchField<List<String>> = PatchField.Absent,
        requirements: PatchField<List<String>> = PatchField.Absent,
        certificateEnabled: PatchField<Boolean> = PatchField.Absent,
        accessType: PatchField<SdkUpdateCourseRequestApplicationJsonAccessType> = PatchField.Absent,
        accessDurationDays: PatchField<Long?> = PatchField.Absent,
        enrollmentLimit: PatchField<Long?> = PatchField.Absent,
        deliveryText: PatchField<String?> = PatchField.Absent,
        visibility: PatchField<CatalogVisibility> = PatchField.Absent,
        expectedUpdatedAt: PatchField<OffsetDateTime> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateCourseResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `String` | Yes |
| category | `PatchField<Category?>` | No |
| level | `PatchField<SdkUpdateCourseRequestApplicationJsonLevel>` | No |
| language | `PatchField<String>` | No |
| subtitle | `PatchField<String?>` | No |
| author | `PatchField<String?>` | No |
| subcategory | `PatchField<String?>` | No |
| whatYouLearn | `PatchField<List<String>>` | No |
| requirements | `PatchField<List<String>>` | No |
| certificateEnabled | `PatchField<Boolean>` | No |
| accessType | `PatchField<SdkUpdateCourseRequestApplicationJsonAccessType>` | No |
| accessDurationDays | `PatchField<Long?>` | No |
| enrollmentLimit | `PatchField<Long?>` | No |
| deliveryText | `PatchField<String?>` | No |
| visibility | `PatchField<CatalogVisibility>` | No |
| expectedUpdatedAt | `PatchField<OffsetDateTime>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateCourseResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.courses.update(course = "string_example", level = app.sell.sellapp.common.http.PatchField.Present(app.sell.sellapp.types.SdkUpdateCourseRequestApplicationJsonLevel("beginner")), visibility = app.sell.sellapp.common.http.PatchField.Present(app.sell.sellapp.types.CatalogVisibility("HIDDEN")))
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

