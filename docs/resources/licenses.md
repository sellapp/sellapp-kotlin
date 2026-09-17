# licenses

[All resources](../methods.md)

## activate

Activate a license key

[API reference](https://sell.app/docs/api/licenses/activate-a-license-key) · Effect: **consequential**

```kotlin
fun activate(
        licenseKey: String,
        instanceName: String,
        requestOptions: RequestOptions? = null,
    ): SdkActivateLicenseKeyResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| licenseKey | `String` | Yes |
| instanceName | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkActivateLicenseKeyResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.licenses.activate(licenseKey = "01965f1d-f038-7116-b57f-9e7ecb4e7b8f", instanceName = "Grace Wilson")
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

## validate

Validate a license key

[API reference](https://sell.app/docs/api/licenses/validate-a-license-key) · Effect: **consequential**

```kotlin
fun validate(
        licenseKey: String,
        instanceId: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkValidateLicenseKeyResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| licenseKey | `String` | Yes |
| instanceId | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkValidateLicenseKeyResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.licenses.validate(licenseKey = "01965f1d-f038-7116-b57f-9e7ecb4e7b8f")
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

## list

List all license keys

[API reference](https://sell.app/docs/api/licenses/list-all-license-keys) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkListLicenseKeysResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkListLicenseKeysResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.licenses.list()
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

Retrieve a license key

[API reference](https://sell.app/docs/api/licenses/retrieve-a-license-key) · Effect: **read**

```kotlin
fun get(
        licenseKey: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetLicenseKeyResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| licenseKey | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetLicenseKeyResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.licenses.get(licenseKey = "1")
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

Update a license key

[API reference](https://sell.app/docs/api/licenses/update-a-license-key) · Effect: **consequential**

```kotlin
fun update(
        licenseKey: String,
        limit: PatchField<Long?> = PatchField.Absent,
        expiresAt: PatchField<OffsetDateTime?> = PatchField.Absent,
        active: PatchField<Boolean?> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateLicenseKeyResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| licenseKey | `String` | Yes |
| limit | `PatchField<Long?>` | No |
| expiresAt | `PatchField<OffsetDateTime?>` | No |
| active | `PatchField<Boolean?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateLicenseKeyResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.licenses.update(licenseKey = "1", limit = app.sell.sellapp.common.http.PatchField.Present(10L), active = app.sell.sellapp.common.http.PatchField.Present(false))
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

## deactivate

Deactivate a license instance

[API reference](https://sell.app/docs/api/licenses/deactivate-a-license) · Effect: **consequential**

```kotlin
fun deactivate(
        licenseKey: String,
        instanceId: String,
        requestOptions: RequestOptions? = null,
    ): SdkDeactivateLicenseResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| licenseKey | `String` | Yes |
| instanceId | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkDeactivateLicenseResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.licenses.deactivate(licenseKey = "SELL-LICENSE-REDACTED", instanceId = "laptop-maya", requestOptions = app.sell.sellapp.common.http.RequestOptions(idempotencyKey = "example-mutation-001"))
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

