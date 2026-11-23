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

## create

Create a course

[API reference](https://sell.app/docs/api/courses/create-a-course) · Effect: **write**

```kotlin
fun create(
        title: String,
        category: Category? = null,
        level: SdkCreateCourseRequestApplicationJsonLevel? = null,
        language: String? = null,
        subtitle: String? = null,
        author: String? = null,
        subcategory: String? = null,
        whatYouLearn: List<String>? = null,
        requirements: List<String>? = null,
        certificateEnabled: Boolean? = null,
        accessType: SdkCreateCourseRequestApplicationJsonAccessType? = null,
        accessDurationDays: Long? = null,
        enrollmentLimit: Long? = null,
        deliveryText: String? = null,
        slug: String? = null,
        description: String? = null,
        visibility: CatalogVisibility? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateCourseResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| title | `String` | Yes |
| category | `Category?` | No |
| level | `SdkCreateCourseRequestApplicationJsonLevel?` | No |
| language | `String?` | No |
| subtitle | `String?` | No |
| author | `String?` | No |
| subcategory | `String?` | No |
| whatYouLearn | `List<String>?` | No |
| requirements | `List<String>?` | No |
| certificateEnabled | `Boolean?` | No |
| accessType | `SdkCreateCourseRequestApplicationJsonAccessType?` | No |
| accessDurationDays | `Long?` | No |
| enrollmentLimit | `Long?` | No |
| deliveryText | `String?` | No |
| slug | `String?` | No |
| description | `String?` | No |
| visibility | `CatalogVisibility?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateCourseResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.courses.create(category = app.sell.sellapp.types.Category("design"), level = app.sell.sellapp.types.SdkCreateCourseRequestApplicationJsonLevel("beginner"), language = "English", whatYouLearn = listOf("Sketch a logo concept.", "Choose a color palette."), certificateEnabled = true, deliveryText = "Open your course from the link in your receipt.", title = "Brand identity basics", description = "<p>Design a logo, color palette, and type system for your next project.</p>")
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
        level: SdkCreateCourseRequestApplicationJsonLevel? = null,
        language: String? = null,
        subtitle: String? = null,
        author: String? = null,
        subcategory: String? = null,
        whatYouLearn: List<String>? = null,
        requirements: List<String>? = null,
        certificateEnabled: Boolean? = null,
        accessType: SdkCreateCourseRequestApplicationJsonAccessType? = null,
        accessDurationDays: Long? = null,
        enrollmentLimit: Long? = null,
        deliveryText: String? = null,
        visibility: CatalogVisibility? = null,
        expectedUpdatedAt: OffsetDateTime? = null,
        title: String? = null,
        slug: String? = null,
        description: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceCourseResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `String` | Yes |
| category | `Category?` | No |
| level | `SdkCreateCourseRequestApplicationJsonLevel?` | No |
| language | `String?` | No |
| subtitle | `String?` | No |
| author | `String?` | No |
| subcategory | `String?` | No |
| whatYouLearn | `List<String>?` | No |
| requirements | `List<String>?` | No |
| certificateEnabled | `Boolean?` | No |
| accessType | `SdkCreateCourseRequestApplicationJsonAccessType?` | No |
| accessDurationDays | `Long?` | No |
| enrollmentLimit | `Long?` | No |
| deliveryText | `String?` | No |
| visibility | `CatalogVisibility?` | No |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| title | `String?` | No |
| slug | `String?` | No |
| description | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceCourseResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.courses.replace(course = "string_example", level = app.sell.sellapp.types.SdkCreateCourseRequestApplicationJsonLevel("beginner"), visibility = app.sell.sellapp.types.CatalogVisibility("HIDDEN"))
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
        level: PatchField<SdkCreateCourseRequestApplicationJsonLevel> = PatchField.Absent,
        language: PatchField<String> = PatchField.Absent,
        subtitle: PatchField<String?> = PatchField.Absent,
        author: PatchField<String?> = PatchField.Absent,
        subcategory: PatchField<String?> = PatchField.Absent,
        whatYouLearn: PatchField<List<String>> = PatchField.Absent,
        requirements: PatchField<List<String>> = PatchField.Absent,
        certificateEnabled: PatchField<Boolean> = PatchField.Absent,
        accessType: PatchField<SdkCreateCourseRequestApplicationJsonAccessType> = PatchField.Absent,
        accessDurationDays: PatchField<Long?> = PatchField.Absent,
        enrollmentLimit: PatchField<Long?> = PatchField.Absent,
        deliveryText: PatchField<String?> = PatchField.Absent,
        visibility: PatchField<CatalogVisibility> = PatchField.Absent,
        expectedUpdatedAt: PatchField<OffsetDateTime> = PatchField.Absent,
        title: PatchField<String> = PatchField.Absent,
        slug: PatchField<String> = PatchField.Absent,
        description: PatchField<String?> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateCourseResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `String` | Yes |
| category | `PatchField<Category?>` | No |
| level | `PatchField<SdkCreateCourseRequestApplicationJsonLevel>` | No |
| language | `PatchField<String>` | No |
| subtitle | `PatchField<String?>` | No |
| author | `PatchField<String?>` | No |
| subcategory | `PatchField<String?>` | No |
| whatYouLearn | `PatchField<List<String>>` | No |
| requirements | `PatchField<List<String>>` | No |
| certificateEnabled | `PatchField<Boolean>` | No |
| accessType | `PatchField<SdkCreateCourseRequestApplicationJsonAccessType>` | No |
| accessDurationDays | `PatchField<Long?>` | No |
| enrollmentLimit | `PatchField<Long?>` | No |
| deliveryText | `PatchField<String?>` | No |
| visibility | `PatchField<CatalogVisibility>` | No |
| expectedUpdatedAt | `PatchField<OffsetDateTime>` | No |
| title | `PatchField<String>` | No |
| slug | `PatchField<String>` | No |
| description | `PatchField<String?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateCourseResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.courses.update(course = "string_example", level = app.sell.sellapp.common.http.PatchField.Present(app.sell.sellapp.types.SdkCreateCourseRequestApplicationJsonLevel("beginner")), visibility = app.sell.sellapp.common.http.PatchField.Present(app.sell.sellapp.types.CatalogVisibility("HIDDEN")))
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

## getStudentSummary

Retrieve a course student summary

[API reference](https://sell.app/docs/api/courses/retrieve-course-student-summary) · Effect: **read**

```kotlin
fun getStudentSummary(
        startDate: String,
        endDate: String,
        courseId: Long? = null,
        limit: Long? = null,
        requestOptions: RequestOptions? = null,
    ): SdkGetCourseStudentSummaryResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| startDate | `String` | Yes |
| endDate | `String` | Yes |
| courseId | `Long?` | No |
| limit | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetCourseStudentSummaryResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.courses.getStudentSummary(startDate = "2026-08-01", endDate = "2026-08-31")
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

