# groupsProducts

[All resources](../methods.md)

## add

Add products to group

[API reference](https://sell.app/docs/api/groups/add-products-to-group) · Effect: **consequential**

```kotlin
fun add(
        group: String,
        resources: List<Long>,
        requestOptions: RequestOptions? = null,
    ): SdkAddProductsToGroupResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| group | `String` | Yes |
| resources | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkAddProductsToGroupResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.groupsProducts.add(group = "1", resources = listOf(1L))
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

## remove

Remove products from group

[API reference](https://sell.app/docs/api/groups/remove-products-from-group) · Effect: **consequential**

```kotlin
fun remove(
        group: String,
        resources: List<Long>,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| group | `String` | Yes |
| resources | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.groupsProducts.remove(group = "1", resources = listOf(1L))
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

## list

List all products within group

[API reference](https://sell.app/docs/api/groups/list-all-products-within-group) · Effect: **read**

```kotlin
fun list(
        group: String,
        limit: Int? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListProductsWithinGroupResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| group | `String` | Yes |
| limit | `Int?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListProductsWithinGroupResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.groupsProducts.list(group = "1")
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

Replace ordered group products

[API reference](https://sell.app/docs/api/groups/list-all-products-within-group) · Effect: **consequential**

```kotlin
fun replace(
        group: String,
        productIds: List<Long>,
        requestOptions: RequestOptions? = null,
    ): SdkSyncGroupProductsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| group | `String` | Yes |
| productIds | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkSyncGroupProductsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.groupsProducts.replace(group = "42", productIds = listOf(120L, 121L))
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

## get

List specific product within group

[API reference](https://sell.app/docs/api/groups/list-specific-product-within-group) · Effect: **read**

```kotlin
fun get(
        group: String,
        product: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetProductWithinGroupResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| group | `String` | Yes |
| product | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetProductWithinGroupResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.groupsProducts.get(group = "1", product = "1")
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

Search products within group

[API reference](https://sell.app/docs/api/groups/search-products-within-group) · Effect: **read**

```kotlin
fun search(
        group: String,
        filters: List<SearchProductsWithinGroupRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<SearchProductsWithinGroupRequestApplicationJsonPropertySortItem>? = null,
        search: SearchProductsWithinGroupRequestApplicationJsonPropertySearch? = null,
        includes: List<SearchProductsWithinGroupRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SearchProductsWithinGroupResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| group | `String` | Yes |
| filters | `List<SearchProductsWithinGroupRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<SearchProductsWithinGroupRequestApplicationJsonPropertySortItem>?` | No |
| search | `SearchProductsWithinGroupRequestApplicationJsonPropertySearch?` | No |
| includes | `List<SearchProductsWithinGroupRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SearchProductsWithinGroupResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.groupsProducts.search(group = "1", filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":1}", app.sell.sellapp.models.SearchProductsWithinGroupRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.SearchProductsWithinGroupRequestApplicationJsonPropertySortItem::class.java)))
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

