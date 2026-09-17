# coursesLessons

[All resources](../methods.md)

## create

Create a course lesson

[API reference](https://sell.app/docs/api/courses/manage-course-lessons) · Effect: **write**

```kotlin
fun create(
        course: String,
        section: String,
        title: String,
        type: SdkCreateCourseLessonRequestApplicationJsonType,
        content: String? = null,
        isPreview: Boolean? = null,
        isPublished: Boolean? = null,
        assignment: CreateCourseLessonRequestApplicationJsonPropertyAssignment? = null,
        questions: List<CreateCourseLessonRequestApplicationJsonPropertyQuestionsItem>? = null,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateCourseLessonResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `String` | Yes |
| section | `String` | Yes |
| title | `String` | Yes |
| type | `SdkCreateCourseLessonRequestApplicationJsonType` | Yes |
| content | `String?` | No |
| isPreview | `Boolean?` | No |
| isPublished | `Boolean?` | No |
| assignment | `CreateCourseLessonRequestApplicationJsonPropertyAssignment?` | No |
| questions | `List<CreateCourseLessonRequestApplicationJsonPropertyQuestionsItem>?` | No |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateCourseLessonResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coursesLessons.create(course = "string_example", section = "1", title = "Welcome", type = app.sell.sellapp.types.SdkCreateCourseLessonRequestApplicationJsonType("text"), content = "Welcome to Launch Lab.", isPublished = false)
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

## replace

Update a course lesson

[API reference](https://sell.app/docs/api/courses/manage-course-lessons) · Effect: **write**

```kotlin
fun replace(
        course: String,
        lesson: String,
        title: String? = null,
        type: SdkCreateCourseLessonRequestApplicationJsonType? = null,
        content: String? = null,
        isPreview: Boolean? = null,
        isPublished: Boolean? = null,
        assignment: ReplaceCourseLessonRequestApplicationJsonPropertyAssignment? = null,
        questions: List<ReplaceCourseLessonRequestApplicationJsonPropertyQuestionsItem>? = null,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceCourseLessonResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `String` | Yes |
| lesson | `String` | Yes |
| title | `String?` | No |
| type | `SdkCreateCourseLessonRequestApplicationJsonType?` | No |
| content | `String?` | No |
| isPreview | `Boolean?` | No |
| isPublished | `Boolean?` | No |
| assignment | `ReplaceCourseLessonRequestApplicationJsonPropertyAssignment?` | No |
| questions | `List<ReplaceCourseLessonRequestApplicationJsonPropertyQuestionsItem>?` | No |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceCourseLessonResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coursesLessons.replace(course = "string_example", lesson = "1", title = "Welcome", isPublished = false)
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

Update a course lesson

[API reference](https://sell.app/docs/api/courses/manage-course-lessons) · Effect: **write**

```kotlin
fun update(
        course: String,
        lesson: String,
        title: PatchField<String> = PatchField.Absent,
        type: PatchField<SdkCreateCourseLessonRequestApplicationJsonType> = PatchField.Absent,
        content: PatchField<String?> = PatchField.Absent,
        isPreview: PatchField<Boolean> = PatchField.Absent,
        isPublished: PatchField<Boolean> = PatchField.Absent,
        assignment: PatchField<UpdateCourseLessonRequestApplicationJsonPropertyAssignment> =
            PatchField.Absent,
        questions: PatchField<List<UpdateCourseLessonRequestApplicationJsonPropertyQuestionsItem>> =
            PatchField.Absent,
        expectedUpdatedAt: PatchField<OffsetDateTime> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateCourseLessonResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `String` | Yes |
| lesson | `String` | Yes |
| title | `PatchField<String>` | No |
| type | `PatchField<SdkCreateCourseLessonRequestApplicationJsonType>` | No |
| content | `PatchField<String?>` | No |
| isPreview | `PatchField<Boolean>` | No |
| isPublished | `PatchField<Boolean>` | No |
| assignment | `PatchField<UpdateCourseLessonRequestApplicationJsonPropertyAssignment>` | No |
| questions | `PatchField<List<UpdateCourseLessonRequestApplicationJsonPropertyQuestionsItem>>` | No |
| expectedUpdatedAt | `PatchField<OffsetDateTime>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateCourseLessonResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coursesLessons.update(course = "string_example", lesson = "1", title = app.sell.sellapp.common.http.PatchField.Present("Welcome"), isPublished = app.sell.sellapp.common.http.PatchField.Present(false))
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

Delete a course lesson

[API reference](https://sell.app/docs/api/courses/manage-course-lessons) · Effect: **consequential**

```kotlin
fun delete(
        course: String,
        lesson: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `String` | Yes |
| lesson | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coursesLessons.delete(course = "string_example", lesson = "1")
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

Reorder course lessons

[API reference](https://sell.app/docs/api/courses/reorder-course-lessons) · Effect: **consequential**

```kotlin
fun reorder(
        course: String,
        resources: List<ReorderCourseLessonsRequestApplicationJsonPropertyResourcesItem>,
        requestOptions: RequestOptions? = null,
    ): SdkReorderCourseLessonsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `String` | Yes |
| resources | `List<ReorderCourseLessonsRequestApplicationJsonPropertyResourcesItem>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReorderCourseLessonsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coursesLessons.reorder(course = "string_example", resources = listOf(ObjectMapperFactory.read("{\"id\":601,\"section_id\":501}", app.sell.sellapp.models.ReorderCourseLessonsRequestApplicationJsonPropertyResourcesItem::class.java), ObjectMapperFactory.read("{\"id\":602,\"section_id\":501}", app.sell.sellapp.models.ReorderCourseLessonsRequestApplicationJsonPropertyResourcesItem::class.java)))
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

