# creditsProducts

[All resources](../methods.md)

## list

List credits products

[API reference](https://sell.app/docs/api/credits/list-credit-products) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkListCreditsProductsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkListCreditsProductsResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.creditsProducts.list()
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

Create a credits product

[API reference](https://sell.app/docs/api/credits/create-a-credit-product) · Effect: **consequential**

```kotlin
fun create(
        title: String,
        visibility: CatalogVisibility,
        slug: String? = null,
        description: String? = null,
        sectionId: Long? = null,
        isDraft: Boolean? = null,
        priceCents: Long? = null,
        currency: String? = null,
        minimumPurchaseQuantity: Long? = null,
        maximumPurchaseQuantity: Long? = null,
        quantityIncrement: Long? = null,
        stock: Long? = null,
        paymentMethods: List<PaymentMethod>? = null,
        rateTiers: List<CreateCreditsProductRequestApplicationJsonPropertyRateTiersItem>? = null,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateCreditsProductResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| title | `String` | Yes |
| visibility | `CatalogVisibility` | Yes |
| slug | `String?` | No |
| description | `String?` | No |
| sectionId | `Long?` | No |
| isDraft | `Boolean?` | No |
| priceCents | `Long?` | No |
| currency | `String?` | No |
| minimumPurchaseQuantity | `Long?` | No |
| maximumPurchaseQuantity | `Long?` | No |
| quantityIncrement | `Long?` | No |
| stock | `Long?` | No |
| paymentMethods | `List<PaymentMethod>?` | No |
| rateTiers | `List<CreateCreditsProductRequestApplicationJsonPropertyRateTiersItem>?` | No |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateCreditsProductResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.creditsProducts.create(title = "Design credits", visibility = app.sell.sellapp.types.CatalogVisibility("HIDDEN"), priceCents = 1999L, currency = "USD")
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

Search credits products

[API reference](https://sell.app/docs/api/credits/search-credit-products) · Effect: **read**

```kotlin
fun search(
        limit: Long? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        filters: List<SearchCreditsProductsRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<SearchCreditsProductsRequestApplicationJsonPropertySortItem>? = null,
        search: SearchCreditsProductsRequestApplicationJsonPropertySearch? = null,
        includes: List<SearchCreditsProductsRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkSearchCreditsProductsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Long?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| filters | `List<SearchCreditsProductsRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<SearchCreditsProductsRequestApplicationJsonPropertySortItem>?` | No |
| search | `SearchCreditsProductsRequestApplicationJsonPropertySearch?` | No |
| includes | `List<SearchCreditsProductsRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkSearchCreditsProductsResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.creditsProducts.search()
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

Retrieve a credits product

[API reference](https://sell.app/docs/api/credits/retrieve-a-credit-product) · Effect: **read**

```kotlin
fun get(
        creditProduct: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetCreditsProductResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| creditProduct | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetCreditsProductResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.creditsProducts.get(creditProduct = "1")
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

Replace a credits product

[API reference](https://sell.app/docs/api/credits/replace-a-credit-product) · Effect: **consequential**

```kotlin
fun replace(
        creditProduct: String,
        title: String? = null,
        slug: String? = null,
        description: String? = null,
        visibility: CatalogVisibility? = null,
        sectionId: Long? = null,
        isDraft: Boolean? = null,
        priceCents: Long? = null,
        currency: String? = null,
        minimumPurchaseQuantity: Long? = null,
        maximumPurchaseQuantity: Long? = null,
        quantityIncrement: Long? = null,
        stock: Long? = null,
        paymentMethods: List<PaymentMethod>? = null,
        rateTiers: List<ReplaceCreditsProductRequestApplicationJsonPropertyRateTiersItem>? = null,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceCreditsProductResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| creditProduct | `String` | Yes |
| title | `String?` | No |
| slug | `String?` | No |
| description | `String?` | No |
| visibility | `CatalogVisibility?` | No |
| sectionId | `Long?` | No |
| isDraft | `Boolean?` | No |
| priceCents | `Long?` | No |
| currency | `String?` | No |
| minimumPurchaseQuantity | `Long?` | No |
| maximumPurchaseQuantity | `Long?` | No |
| quantityIncrement | `Long?` | No |
| stock | `Long?` | No |
| paymentMethods | `List<PaymentMethod>?` | No |
| rateTiers | `List<ReplaceCreditsProductRequestApplicationJsonPropertyRateTiersItem>?` | No |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceCreditsProductResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.creditsProducts.replace(creditProduct = "1", title = "Design credits")
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

Update a credits product

[API reference](https://sell.app/docs/api/credits/update-a-credit-product) · Effect: **consequential**

```kotlin
fun update(
        creditProduct: String,
        title: PatchField<String> = PatchField.Absent,
        slug: PatchField<String> = PatchField.Absent,
        description: PatchField<String> = PatchField.Absent,
        visibility: PatchField<CatalogVisibility> = PatchField.Absent,
        sectionId: PatchField<Long?> = PatchField.Absent,
        isDraft: PatchField<Boolean> = PatchField.Absent,
        priceCents: PatchField<Long> = PatchField.Absent,
        currency: PatchField<String> = PatchField.Absent,
        minimumPurchaseQuantity: PatchField<Long> = PatchField.Absent,
        maximumPurchaseQuantity: PatchField<Long?> = PatchField.Absent,
        quantityIncrement: PatchField<Long> = PatchField.Absent,
        stock: PatchField<Long?> = PatchField.Absent,
        paymentMethods: PatchField<List<PaymentMethod>> = PatchField.Absent,
        rateTiers:
            PatchField<List<UpdateCreditsProductRequestApplicationJsonPropertyRateTiersItem>> =
            PatchField.Absent,
        expectedUpdatedAt: PatchField<OffsetDateTime> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateCreditsProductResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| creditProduct | `String` | Yes |
| title | `PatchField<String>` | No |
| slug | `PatchField<String>` | No |
| description | `PatchField<String>` | No |
| visibility | `PatchField<CatalogVisibility>` | No |
| sectionId | `PatchField<Long?>` | No |
| isDraft | `PatchField<Boolean>` | No |
| priceCents | `PatchField<Long>` | No |
| currency | `PatchField<String>` | No |
| minimumPurchaseQuantity | `PatchField<Long>` | No |
| maximumPurchaseQuantity | `PatchField<Long?>` | No |
| quantityIncrement | `PatchField<Long>` | No |
| stock | `PatchField<Long?>` | No |
| paymentMethods | `PatchField<List<PaymentMethod>>` | No |
| rateTiers | `PatchField<List<UpdateCreditsProductRequestApplicationJsonPropertyRateTiersItem>>` | No |
| expectedUpdatedAt | `PatchField<OffsetDateTime>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateCreditsProductResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.creditsProducts.update(creditProduct = "1", title = app.sell.sellapp.common.http.PatchField.Present("Design credits"))
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

Delete a credits product

[API reference](https://sell.app/docs/api/credits/delete-a-credit-product) · Effect: **consequential**

```kotlin
fun delete(
        creditProduct: String,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| creditProduct | `String` | Yes |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.creditsProducts.delete(creditProduct = "1", expectedUpdatedAt = java.time.OffsetDateTime.parse("2026-08-24T10:00:00.000000Z"))
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

