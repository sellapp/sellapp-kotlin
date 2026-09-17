# ordersLineItems

[All resources](../methods.md)

## list

List an order's line items

[API reference](https://sell.app/docs/api/order-line-items/list-an-orders-line-items) · Effect: **read**

```kotlin
fun list(
        order: String,
        limit: Int? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListOrderSLineItemsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `String` | Yes |
| limit | `Int?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListOrderSLineItemsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.ordersLineItems.list(order = "4001")
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

Search an order's line items

[API reference](https://sell.app/docs/api/order-line-items/search-an-orders-line-items) · Effect: **read**

```kotlin
fun search(
        order: String,
        filters: List<SearchOrderSLineItemsRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<SearchOrderSLineItemsRequestApplicationJsonPropertySortItem>? = null,
        pagination: SearchOrderSLineItemsRequestApplicationJsonPropertyPagination? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SearchOrderSLineItemsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `String` | Yes |
| filters | `List<SearchOrderSLineItemsRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<SearchOrderSLineItemsRequestApplicationJsonPropertySortItem>?` | No |
| pagination | `SearchOrderSLineItemsRequestApplicationJsonPropertyPagination?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SearchOrderSLineItemsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.ordersLineItems.search(order = "4001")
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

Retrieve an order's line item

[API reference](https://sell.app/docs/api/order-line-items/retrieve-an-orders-line-item) · Effect: **read**

```kotlin
fun get(
        order: String,
        lineItem: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetOrderSLineItemResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `String` | Yes |
| lineItem | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetOrderSLineItemResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.ordersLineItems.get(order = "4001", lineItem = "9001")
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

