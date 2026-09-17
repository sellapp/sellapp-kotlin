# walletSettings

[All resources](../methods.md)

## get

Retrieve wallet settings

[API reference](https://sell.app/docs/api/wallet/wallet-settings) · Effect: **read**

```kotlin
fun get(
        requestOptions: RequestOptions? = null
    ): SdkGetWalletSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetWalletSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.walletSettings.get()
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

## replace

Update wallet settings

[API reference](https://sell.app/docs/api/wallet/wallet-settings) · Effect: **consequential**

```kotlin
fun replace(
        enabled: Boolean,
        minimumTopUpCents: Long?,
        maximumTopUpCents: Long?,
        expirationDays: Long?,
        paymentMethods: List<String>,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceWalletSettingsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| enabled | `Boolean` | Yes |
| minimumTopUpCents | `Long?` | No |
| maximumTopUpCents | `Long?` | No |
| expirationDays | `Long?` | No |
| paymentMethods | `List<String>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceWalletSettingsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.walletSettings.replace(enabled = false, minimumTopUpCents = null, maximumTopUpCents = null, expirationDays = null, paymentMethods = listOf())
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

