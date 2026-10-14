# subscriptionsActions

[All resources](../methods.md)

## list

List subscription actions

[API reference](https://sell.app/docs/api/subscriptions/list-subscription-actions) · Effect: **read**

```kotlin
fun list(
        productSubscription: String,
        limit: Int? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkListSubscriptionActionsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| limit | `Int?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkListSubscriptionActionsResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.subscriptionsActions.list(productSubscription = "124")
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

Retrieve a subscription action

[API reference](https://sell.app/docs/api/subscriptions/retrieve-a-subscription-action) · Effect: **read**

```kotlin
fun get(
        productSubscription: String,
        action: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetSubscriptionActionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| action | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetSubscriptionActionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.subscriptionsActions.get(productSubscription = "124", action = "4192")
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

## dismiss

Dismiss a subscription action

[API reference](https://sell.app/docs/api/subscriptions/dismiss-a-subscription-action) · Effect: **consequential**

```kotlin
fun dismiss(
        productSubscription: String,
        action: String,
        note: String,
        idempotencyKey: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkDismissSubscriptionActionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `String` | Yes |
| action | `String` | Yes |
| note | `String` | Yes |
| idempotencyKey | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkDismissSubscriptionActionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.subscriptionsActions.dismiss(productSubscription = "124", action = "4207", note = "Confirmed with the customer that they no longer want the upgrade.")
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

