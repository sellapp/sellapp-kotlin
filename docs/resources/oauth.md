# oauth

[All resources](../methods.md)

## getAuthorizationServerMetadata

Read OAuth server metadata

[API reference](https://sell.app/docs/api/oauth) · Effect: **read**

```kotlin
fun getAuthorizationServerMetadata(
        requestOptions: RequestOptions? = null
    ): SdkGetOAuthAuthorizationServerMetadataResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetOAuthAuthorizationServerMetadataResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = "", store = "")
    val result = client.oauth.getAuthorizationServerMetadata()
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[]
```

Documented HTTP responses: 200, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## getAuthorizationRequest

Review CLI authorization

[API reference](https://sell.app/docs/api/oauth) · Effect: **read**

```kotlin
fun getAuthorizationRequest(
        responseType: String,
        clientId: String,
        redirectUri: String,
        state: String,
        codeChallenge: String,
        codeChallengeMethod: String,
        scope: String? = null,
        requestOptions: RequestOptions? = null,
    ): String
```

| Argument | Native type | Required |
| --- | --- | --- |
| responseType | `String` | Yes |
| clientId | `String` | Yes |
| redirectUri | `String` | Yes |
| state | `String` | Yes |
| codeChallenge | `String` | Yes |
| codeChallengeMethod | `String` | Yes |
| scope | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `String`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = "", store = "")
    val result = client.oauth.getAuthorizationRequest(responseType = "code", clientId = "01992a65-e064-71ba-b38f-902b7966a6be", redirectUri = "http://127.0.0.1:49152/callback", state = "RANDOM_STATE", codeChallenge = "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM", codeChallengeMethod = "S256")
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[]
```

Documented HTTP responses: 200, 302, 400, 401, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## approveAuthorization

Approve CLI access

[API reference](https://sell.app/docs/api/oauth) · Effect: **consequential**

```kotlin
fun approveAuthorization(
        authToken: String,
        clientId: String,
        state: String,
        token: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| authToken | `String` | Yes |
| clientId | `String` | Yes |
| state | `String` | Yes |
| token | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), browserSession = System.getenv("SELLAPP_BROWSER_SESSION"), store = "")
    val result = client.oauth.approveAuthorization(authToken = "CONSENT_AUTH_TOKEN", clientId = "01992a65-e064-71ba-b38f-902b7966a6be", state = "RANDOM_STATE", token = "CSRF_TOKEN")
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "oauthBrowserSession": []
  }
]
```

Documented HTTP responses: 302, 400, 401, 403, 419, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## denyAuthorization

Deny CLI access

[API reference](https://sell.app/docs/api/oauth) · Effect: **consequential**

```kotlin
fun denyAuthorization(
        authToken: String,
        token: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| authToken | `String` | Yes |
| token | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), browserSession = System.getenv("SELLAPP_BROWSER_SESSION"), store = "")
    val result = client.oauth.denyAuthorization(authToken = "CONSENT_AUTH_TOKEN", token = "CSRF_TOKEN")
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "oauthBrowserSession": []
  }
]
```

Documented HTTP responses: 302, 400, 401, 419, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## exchangeToken

Exchange or refresh OAuth tokens

[API reference](https://sell.app/docs/api/oauth) · Effect: **consequential**

```kotlin
fun exchangeToken(
        requestBody: Any,
        requestOptions: RequestOptions? = null,
    ): SdkExchangeOAuthTokenResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestBody | `Any` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkExchangeOAuthTokenResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = "", store = "")
    val result = client.oauth.exchangeToken(requestBody = mapOf("client_id" to "01992a65-e064-71ba-b38f-902b7966a6be", "grant_type" to "authorization_code", "code" to "AUTHORIZATION_CODE", "redirect_uri" to "http://127.0.0.1:49152/callback", "code_verifier" to "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {},
  {
    "oauthClientBasic": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## revokeToken

Revoke an OAuth token

[API reference](https://sell.app/docs/api/oauth) · Effect: **consequential**

```kotlin
fun revokeToken(
        token: String,
        clientId: String? = null,
        clientSecret: String? = null,
        tokenTypeHint: SdkRevokeOAuthTokenRequestApplicationXWwwFormUrlencodedTokenTypeHint? = null,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| token | `String` | Yes |
| clientId | `String?` | No |
| clientSecret | `String?` | No |
| tokenTypeHint | `SdkRevokeOAuthTokenRequestApplicationXWwwFormUrlencodedTokenTypeHint?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = "", store = "")
    val result = client.oauth.revokeToken(clientId = "01992a65-e064-71ba-b38f-902b7966a6be", token = "REFRESH_TOKEN", tokenTypeHint = app.sell.sellapp.types.SdkRevokeOAuthTokenRequestApplicationXWwwFormUrlencodedTokenTypeHint("refresh_token"))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {},
  {
    "oauthClientBasic": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

