# storeSenderEmail

[All resources](../methods.md)

## get

Retrieve the sender email

[API reference](https://sell.app/docs/api/store-settings/sender-email) · Effect: **read**

```kotlin
fun get(
        email: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkGetSenderEmailResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| email | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetSenderEmailResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSenderEmail.get()
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

## set

Set the sender email

[API reference](https://sell.app/docs/api/store-settings/sender-email) · Effect: **consequential**

```kotlin
fun set(
        email: String,
        requestOptions: RequestOptions? = null,
    ): SdkSetSenderEmailResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| email | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkSetSenderEmailResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSenderEmail.set(email = "orders@launch-lab.example.com")
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

## delete

Delete the sender email

[API reference](https://sell.app/docs/api/store-settings/sender-email) · Effect: **consequential**

```kotlin
fun delete(
        email: String? = null,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| email | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSenderEmail.delete()
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

Documented HTTP responses: 200, 400, 401, 403, 422, 429, 500, 503. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## sendVerification

Send a sender email verification

[API reference](https://sell.app/docs/api/store-settings/sender-email) · Effect: **consequential**

```kotlin
fun sendVerification(
        email: String,
        requestOptions: RequestOptions? = null,
    ): SdkSendSenderEmailVerificationResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| email | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkSendSenderEmailVerificationResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.storeSenderEmail.sendVerification(email = "orders@launch-lab.example.com")
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

Documented HTTP responses: 200, 400, 401, 403, 422, 429, 500, 503. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

