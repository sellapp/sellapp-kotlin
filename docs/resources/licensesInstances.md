# licensesInstances

[All resources](../methods.md)

## list

List license instances

[API reference](https://sell.app/docs/api/license-instances/list-license-instances) · Effect: **read**

```kotlin
fun list(
        licenseKey: String,
        limit: Int? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListLicenseKeyInstancesResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| licenseKey | `String` | Yes |
| limit | `Int?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListLicenseKeyInstancesResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.licensesInstances.list(licenseKey = "1")
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

Retrieve a license instance

[API reference](https://sell.app/docs/api/license-instances/retrieve-a-license-instance) · Effect: **read**

```kotlin
fun get(
        licenseKey: String,
        instance: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetLicenseInstanceResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| licenseKey | `String` | Yes |
| instance | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetLicenseInstanceResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.licensesInstances.get(licenseKey = "1", instance = "9ebd37af-2077-42f9-9f88-d96cfc6ef1a8")
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

