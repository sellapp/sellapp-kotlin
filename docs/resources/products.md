# products

[All resources](../methods.md)

## list

List all products

[API reference](https://sell.app/docs/api/products/list-all-products) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        withDrafts: Boolean? = null,
        onlyDrafts: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListProductsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| withDrafts | `Boolean?` | No |
| onlyDrafts | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListProductsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.products.list(limit = 1)
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

Create a product

[API reference](https://sell.app/docs/api/products/create-a-product) · Effect: **write**

```kotlin
fun create(
        title: String,
        description: String,
        visibility: CatalogVisibility,
        slug: String? = null,
        type: SdkCreateProductRequestApplicationJsonType? = null,
        section: Long? = null,
        additionalInformation:
            List<CreateProductRequestApplicationJsonPropertyAdditionalInformationItem>? =
            null,
        otherSettings: CreateProductRequestApplicationJsonPropertyOtherSettings? = null,
        variants: List<CreateProductRequestApplicationJsonPropertyVariantsItem>? = null,
        bundleItems: List<CreateProductRequestApplicationJsonPropertyBundleItemsItem>? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateProductResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| title | `String` | Yes |
| description | `String` | Yes |
| visibility | `CatalogVisibility` | Yes |
| slug | `String?` | No |
| type | `SdkCreateProductRequestApplicationJsonType?` | No |
| section | `Long?` | No |
| additionalInformation | `List<CreateProductRequestApplicationJsonPropertyAdditionalInformationItem>?` | No |
| otherSettings | `CreateProductRequestApplicationJsonPropertyOtherSettings?` | No |
| variants | `List<CreateProductRequestApplicationJsonPropertyVariantsItem>?` | No |
| bundleItems | `List<CreateProductRequestApplicationJsonPropertyBundleItemsItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateProductResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.products.create(title = "Design kit", description = "Templates for your next project.", visibility = app.sell.sellapp.types.CatalogVisibility("HIDDEN"))
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

Retrieve a product

[API reference](https://sell.app/docs/api/products/retrieve-a-product) · Effect: **read**

```kotlin
fun get(
        product: String,
        withDrafts: Boolean? = null,
        onlyDrafts: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): SdkGetProductResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| withDrafts | `Boolean?` | No |
| onlyDrafts | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetProductResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.products.get(product = "1")
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

Update a product

[API reference](https://sell.app/docs/api/products) · Effect: **write**

```kotlin
fun replace(
        product: String,
        title: String? = null,
        description: String? = null,
        visibility: CatalogVisibility? = null,
        slug: String? = null,
        section: Long? = null,
        additionalInformation:
            List<ReplaceProductRequestApplicationJsonPropertyAdditionalInformationItem>? =
            null,
        otherSettings: ReplaceProductRequestApplicationJsonPropertyOtherSettings? = null,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceProductResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| title | `String?` | No |
| description | `String?` | No |
| visibility | `CatalogVisibility?` | No |
| slug | `String?` | No |
| section | `Long?` | No |
| additionalInformation | `List<ReplaceProductRequestApplicationJsonPropertyAdditionalInformationItem>?` | No |
| otherSettings | `ReplaceProductRequestApplicationJsonPropertyOtherSettings?` | No |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceProductResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.products.replace(product = "120", title = "Design kit", description = "Templates for your next project.", visibility = app.sell.sellapp.types.CatalogVisibility("HIDDEN"), expectedUpdatedAt = java.time.OffsetDateTime.parse("2026-08-30T12:00:00.000000Z"))
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

Update a product

[API reference](https://sell.app/docs/api/products/update-a-product) · Effect: **write**

```kotlin
fun update(
        product: String,
        title: PatchField<String> = PatchField.Absent,
        description: PatchField<String> = PatchField.Absent,
        visibility: PatchField<CatalogVisibility> = PatchField.Absent,
        slug: PatchField<String> = PatchField.Absent,
        section: PatchField<Long?> = PatchField.Absent,
        additionalInformation:
            PatchField<List<UpdateProductRequestApplicationJsonPropertyAdditionalInformationItem>> =
            PatchField.Absent,
        otherSettings: PatchField<UpdateProductRequestApplicationJsonPropertyOtherSettings> =
            PatchField.Absent,
        expectedUpdatedAt: PatchField<OffsetDateTime> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateProductResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| title | `PatchField<String>` | No |
| description | `PatchField<String>` | No |
| visibility | `PatchField<CatalogVisibility>` | No |
| slug | `PatchField<String>` | No |
| section | `PatchField<Long?>` | No |
| additionalInformation | `PatchField<List<UpdateProductRequestApplicationJsonPropertyAdditionalInformationItem>>` | No |
| otherSettings | `PatchField<UpdateProductRequestApplicationJsonPropertyOtherSettings>` | No |
| expectedUpdatedAt | `PatchField<OffsetDateTime>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateProductResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.products.update(product = "120", title = app.sell.sellapp.common.http.PatchField.Present("Design kit"), description = app.sell.sellapp.common.http.PatchField.Present("Templates for your next project."), visibility = app.sell.sellapp.common.http.PatchField.Present(app.sell.sellapp.types.CatalogVisibility("HIDDEN")), expectedUpdatedAt = app.sell.sellapp.common.http.PatchField.Present(java.time.OffsetDateTime.parse("2026-08-30T12:00:00.000000Z")))
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

Delete a product

[API reference](https://sell.app/docs/api/products/delete-a-product) · Effect: **consequential**

```kotlin
fun delete(
        product: String,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.products.delete(product = "1", expectedUpdatedAt = java.time.OffsetDateTime.parse("2026-08-01T12:00:00Z"))
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

Search products

[API reference](https://sell.app/docs/api/products/search-products) · Effect: **read**

```kotlin
fun search(
        limit: Long? = null,
        page: Long? = null,
        filters: List<SearchProductsRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<SearchProductsRequestApplicationJsonPropertySortItem>? = null,
        search: SearchProductsRequestApplicationJsonPropertySearch? = null,
        includes: List<SearchProductsRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SearchProductsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Long?` | No |
| page | `Long?` | No |
| filters | `List<SearchProductsRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<SearchProductsRequestApplicationJsonPropertySortItem>?` | No |
| search | `SearchProductsRequestApplicationJsonPropertySearch?` | No |
| includes | `List<SearchProductsRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SearchProductsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.products.search(filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":1}", app.sell.sellapp.models.SearchProductsRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.SearchProductsRequestApplicationJsonPropertySortItem::class.java)))
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

## batchCreate

Batch create products

[API reference](https://sell.app/docs/api/products/batch-create-products) · Effect: **consequential**

```kotlin
fun batchCreate(
        resources: List<BatchCreateProductsRequestApplicationJsonPropertyResourcesItem>,
        requestOptions: RequestOptions? = null,
    ): SdkBatchCreateProductsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| resources | `List<BatchCreateProductsRequestApplicationJsonPropertyResourcesItem>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkBatchCreateProductsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.products.batchCreate(resources = listOf(ObjectMapperFactory.read("{\"title\":\"Example product\",\"description\":\"An example product created through the API.\",\"visibility\":\"PUBLIC\",\"type\":\"product\"}", app.sell.sellapp.models.BatchCreateProductsRequestApplicationJsonPropertyResourcesItem::class.java)))
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

## batchUpdate

Batch update products

[API reference](https://sell.app/docs/api/products/batch-update-products) · Effect: **consequential**

```kotlin
fun batchUpdate(
        resources: BatchUpdateProductsRequestApplicationJsonPropertyResources,
        requestOptions: RequestOptions? = null,
    ): SdkBatchUpdateProductsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| resources | `BatchUpdateProductsRequestApplicationJsonPropertyResources` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkBatchUpdateProductsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.products.batchUpdate(resources = ObjectMapperFactory.read("{\"1\":{\"title\":\"Updated product\",\"visibility\":\"PUBLIC\"}}", app.sell.sellapp.models.BatchUpdateProductsRequestApplicationJsonPropertyResources::class.java))
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

## batchDelete

Batch delete products

[API reference](https://sell.app/docs/api/products/batch-delete-products) · Effect: **consequential**

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
    val result = client.products.batchDelete(resources = listOf(1L, 2L))
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

