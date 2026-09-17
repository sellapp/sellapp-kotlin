# productVariants

[All resources](../methods.md)

## list

List all product variants

[API reference](https://sell.app/docs/api/product-variants/list-all-product-variants) · Effect: **read**

```kotlin
fun list(
        product: String,
        limit: Int? = null,
        page: Long? = null,
        withDrafts: Boolean? = null,
        onlyDrafts: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListProductVariantsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| limit | `Int?` | No |
| page | `Long?` | No |
| withDrafts | `Boolean?` | No |
| onlyDrafts | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListProductVariantsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariants.list(product = "1")
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

## create

Create a product variant

[API reference](https://sell.app/docs/api/product-variants/create-a-product-variant) · Effect: **write**

```kotlin
fun create(
        product: String,
        title: String,
        description: String,
        deliverable: CreateProductVariantRequestApplicationJsonPropertyDeliverable,
        pricing: CreateProductVariantRequestApplicationJsonPropertyPricing,
        paymentMethods: List<PaymentMethod>,
        minimumPurchaseQuantity: Long? = null,
        maximumPurchaseQuantity: Long? = null,
        bulkDiscount: List<CreateProductVariantRequestApplicationJsonPropertyBulkDiscountItem>? =
            null,
        otherSettings: CreateProductVariantRequestApplicationJsonPropertyOtherSettings? = null,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateProductVariantResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| title | `String` | Yes |
| description | `String` | Yes |
| deliverable | `CreateProductVariantRequestApplicationJsonPropertyDeliverable` | Yes |
| pricing | `CreateProductVariantRequestApplicationJsonPropertyPricing` | Yes |
| paymentMethods | `List<PaymentMethod>` | Yes |
| minimumPurchaseQuantity | `Long?` | No |
| maximumPurchaseQuantity | `Long?` | No |
| bulkDiscount | `List<CreateProductVariantRequestApplicationJsonPropertyBulkDiscountItem>?` | No |
| otherSettings | `CreateProductVariantRequestApplicationJsonPropertyOtherSettings?` | No |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateProductVariantResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariants.create(product = "120", title = "Monthly membership", description = "One operating memo each month; access is provisioned by our team.", deliverable = ObjectMapperFactory.read("{\"types\":[\"MANUAL\"],\"data\":{\"stock\":null,\"comment\":\"We will send your reading-room invitation.\"}}", app.sell.sellapp.models.CreateProductVariantRequestApplicationJsonPropertyDeliverable::class.java), pricing = ObjectMapperFactory.read("{\"humble\":false,\"price\":{\"price\":1999,\"currency\":\"USD\"}}", app.sell.sellapp.models.CreateProductVariantRequestApplicationJsonPropertyPricing::class.java), paymentMethods = listOf(app.sell.sellapp.types.PaymentMethod("STRIPE")))
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

## get

Retrieve a product variant

[API reference](https://sell.app/docs/api/product-variants/retrieve-a-product-variant) · Effect: **read**

```kotlin
fun get(
        product: String,
        variant: String,
        withDrafts: Boolean? = null,
        onlyDrafts: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): SdkGetProductVariantResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| withDrafts | `Boolean?` | No |
| onlyDrafts | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetProductVariantResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariants.get(product = "1", variant = "2")
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

Update a product variant with PUT

[API reference](https://sell.app/docs/api/product-variants) · Effect: **write**

```kotlin
fun replace(
        product: String,
        variant: String,
        title: String? = null,
        description: String? = null,
        deliverable: ReplaceProductVariantWithPutRequestApplicationJsonPropertyDeliverable? = null,
        pricing: ReplaceProductVariantWithPutRequestApplicationJsonPropertyPricing? = null,
        minimumPurchaseQuantity: Long? = null,
        maximumPurchaseQuantity: Long? = null,
        bulkDiscount:
            List<ReplaceProductVariantWithPutRequestApplicationJsonPropertyBulkDiscountItem>? =
            null,
        paymentMethods: List<PaymentMethod>? = null,
        otherSettings: ReplaceProductVariantWithPutRequestApplicationJsonPropertyOtherSettings? =
            null,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceProductVariantWithPutResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| title | `String?` | No |
| description | `String?` | No |
| deliverable | `ReplaceProductVariantWithPutRequestApplicationJsonPropertyDeliverable?` | No |
| pricing | `ReplaceProductVariantWithPutRequestApplicationJsonPropertyPricing?` | No |
| minimumPurchaseQuantity | `Long?` | No |
| maximumPurchaseQuantity | `Long?` | No |
| bulkDiscount | `List<ReplaceProductVariantWithPutRequestApplicationJsonPropertyBulkDiscountItem>?` | No |
| paymentMethods | `List<PaymentMethod>?` | No |
| otherSettings | `ReplaceProductVariantWithPutRequestApplicationJsonPropertyOtherSettings?` | No |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceProductVariantWithPutResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariants.replace(product = "120", variant = "4321", title = "Monthly membership plus", description = "One annotated operating memo and a monthly founder discussion.")
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

Update a product variant

[API reference](https://sell.app/docs/api/product-variants/update-a-product-variant) · Effect: **write**

```kotlin
fun update(
        product: String,
        variant: String,
        title: PatchField<String> = PatchField.Absent,
        description: PatchField<String> = PatchField.Absent,
        deliverable: PatchField<UpdateProductVariantRequestApplicationJsonPropertyDeliverable> =
            PatchField.Absent,
        pricing: PatchField<UpdateProductVariantRequestApplicationJsonPropertyPricing> =
            PatchField.Absent,
        minimumPurchaseQuantity: PatchField<Long> = PatchField.Absent,
        maximumPurchaseQuantity: PatchField<Long?> = PatchField.Absent,
        bulkDiscount:
            PatchField<List<UpdateProductVariantRequestApplicationJsonPropertyBulkDiscountItem>> =
            PatchField.Absent,
        paymentMethods: PatchField<List<PaymentMethod>> = PatchField.Absent,
        otherSettings: PatchField<UpdateProductVariantRequestApplicationJsonPropertyOtherSettings> =
            PatchField.Absent,
        expectedUpdatedAt: PatchField<OffsetDateTime> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateProductVariantResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| title | `PatchField<String>` | No |
| description | `PatchField<String>` | No |
| deliverable | `PatchField<UpdateProductVariantRequestApplicationJsonPropertyDeliverable>` | No |
| pricing | `PatchField<UpdateProductVariantRequestApplicationJsonPropertyPricing>` | No |
| minimumPurchaseQuantity | `PatchField<Long>` | No |
| maximumPurchaseQuantity | `PatchField<Long?>` | No |
| bulkDiscount | `PatchField<List<UpdateProductVariantRequestApplicationJsonPropertyBulkDiscountItem>>` | No |
| paymentMethods | `PatchField<List<PaymentMethod>>` | No |
| otherSettings | `PatchField<UpdateProductVariantRequestApplicationJsonPropertyOtherSettings>` | No |
| expectedUpdatedAt | `PatchField<OffsetDateTime>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateProductVariantResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariants.update(product = "120", variant = "4321", title = app.sell.sellapp.common.http.PatchField.Present("Monthly membership plus"), description = app.sell.sellapp.common.http.PatchField.Present("One annotated operating memo and a monthly founder discussion."))
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

Delete a product variant

[API reference](https://sell.app/docs/api/product-variants/delete-a-product-variant) · Effect: **consequential**

```kotlin
fun delete(
        product: String,
        variant: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariants.delete(product = "1", variant = "2")
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

Search product variants

[API reference](https://sell.app/docs/api/product-variants/search-product-variants) · Effect: **read**

```kotlin
fun search(
        product: String,
        filters: List<SearchProductVariantsRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<SearchProductVariantsRequestApplicationJsonPropertySortItem>? = null,
        search: SearchProductVariantsRequestApplicationJsonPropertySearch? = null,
        includes: List<SearchProductVariantsRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SearchProductVariantsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| filters | `List<SearchProductVariantsRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<SearchProductVariantsRequestApplicationJsonPropertySortItem>?` | No |
| search | `SearchProductVariantsRequestApplicationJsonPropertySearch?` | No |
| includes | `List<SearchProductVariantsRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SearchProductVariantsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariants.search(product = "1", filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":1}", app.sell.sellapp.models.SearchProductVariantsRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.SearchProductVariantsRequestApplicationJsonPropertySortItem::class.java)))
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

## batchCreate

Batch create product variants

[API reference](https://sell.app/docs/api/product-variants/batch-create-product-variants) · Effect: **consequential**

```kotlin
fun batchCreate(
        product: String,
        resources: List<BatchCreateProductVariantsRequestApplicationJsonPropertyResourcesItem>,
        requestOptions: RequestOptions? = null,
    ): SdkBatchCreateProductVariantsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| resources | `List<BatchCreateProductVariantsRequestApplicationJsonPropertyResourcesItem>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkBatchCreateProductVariantsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariants.batchCreate(product = "1", resources = listOf(ObjectMapperFactory.read("{\"title\":\"Default\",\"description\":\"Default product variant.\",\"deliverable\":{\"types\":[\"TEXT\"],\"data\":{\"serials\":[\"SERIAL-001\"],\"parsingMode\":\"NEW_LINE\",\"removeDuplicate\":true}},\"pricing\":{\"humble\":false,\"price\":{\"price\":1000,\"currency\":\"USD\"}},\"payment_methods\":[\"PAYPAL\"]}", app.sell.sellapp.models.BatchCreateProductVariantsRequestApplicationJsonPropertyResourcesItem::class.java)))
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

Documented HTTP responses: 200, 201, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## batchUpdate

Batch update product variants

[API reference](https://sell.app/docs/api/product-variants/batch-update-product-variants) · Effect: **consequential**

```kotlin
fun batchUpdate(
        product: String,
        resources: BatchUpdateProductVariantsRequestApplicationJsonPropertyResources,
        requestOptions: RequestOptions? = null,
    ): SdkBatchUpdateProductVariantsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| resources | `BatchUpdateProductVariantsRequestApplicationJsonPropertyResources` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkBatchUpdateProductVariantsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariants.batchUpdate(product = "1", resources = ObjectMapperFactory.read("{\"1\":{\"title\":\"Updated variant\"}}", app.sell.sellapp.models.BatchUpdateProductVariantsRequestApplicationJsonPropertyResources::class.java))
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

## batchDelete

Batch delete product variants

[API reference](https://sell.app/docs/api/product-variants/batch-delete-product-variants) · Effect: **consequential**

```kotlin
fun batchDelete(
        product: String,
        resources: List<Long>,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| resources | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariants.batchDelete(product = "1", resources = listOf(1L, 2L))
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

