# lineItems

[All resources](../methods.md)

## list

List order line items

[API reference](https://sell.app/docs/api/order-line-items/list-order-line-items) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListOrderLineItemsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListOrderLineItemsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.lineItems.list()
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

Search order line items

[API reference](https://sell.app/docs/api/order-line-items/search-order-line-items) · Effect: **read**

```kotlin
fun search(
        filters: List<SearchOrderLineItemsRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<SearchOrderLineItemsRequestApplicationJsonPropertySortItem>? = null,
        pagination: SearchOrderLineItemsRequestApplicationJsonPropertyPagination? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SearchOrderLineItemsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| filters | `List<SearchOrderLineItemsRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<SearchOrderLineItemsRequestApplicationJsonPropertySortItem>?` | No |
| pagination | `SearchOrderLineItemsRequestApplicationJsonPropertyPagination?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SearchOrderLineItemsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.lineItems.search()
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

Retrieve an order line item

[API reference](https://sell.app/docs/api/order-line-items/retrieve-an-order-line-item) · Effect: **read**

```kotlin
fun get(
        lineItem: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetOrderLineItemResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| lineItem | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetOrderLineItemResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.lineItems.get(lineItem = "9001")
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

