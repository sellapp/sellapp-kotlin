# entitlements

[All resources](../methods.md)

## listCustomerEntitlements

List customer entitlements

[API reference](https://sell.app/docs/api/customers/identity-and-entitlements) · Effect: **read**

```kotlin
fun listCustomerEntitlements(
        customer: String,
        requestOptions: RequestOptions? = null,
    ): SdkListCustomerEntitlementsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| customer | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkListCustomerEntitlementsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.entitlements.listCustomerEntitlements(customer = "42")
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## listCustomerEntitlementsByExternalId

List customer entitlements

[API reference](https://sell.app/docs/api/customers/identity-and-entitlements) · Effect: **read**

```kotlin
fun listCustomerEntitlementsByExternalId(
        externalId: String,
        requestOptions: RequestOptions? = null,
    ): SdkListCustomerEntitlementsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| externalId | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkListCustomerEntitlementsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.entitlements.listCustomerEntitlementsByExternalId(externalId = "externalId_01K4CUSTOMER")
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

