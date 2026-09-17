# communityConnections

[All resources](../methods.md)

## list

List community connections

[API reference](https://sell.app/docs/api/community-connections) · Effect: **read**

```kotlin
fun list(
        requestOptions: RequestOptions? = null
    ): SdkListCommunityConnectionsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkListCommunityConnectionsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.communityConnections.list()
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

## start

Start a community connection

[API reference](https://sell.app/docs/api/community-connections) · Effect: **consequential**

```kotlin
fun start(
        platform: String,
        mode: SdkStartCommunityConnectionRequestApplicationJsonMode? = null,
        requestOptions: RequestOptions? = null,
    ): SdkStartCommunityConnectionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| platform | `String` | Yes |
| mode | `SdkStartCommunityConnectionRequestApplicationJsonMode?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkStartCommunityConnectionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.communityConnections.start(platform = "discord", mode = app.sell.sellapp.types.SdkStartCommunityConnectionRequestApplicationJsonMode("official_bot"))
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

## poll

Poll a community connection

[API reference](https://sell.app/docs/api/community-connections) · Effect: **read**

```kotlin
fun poll(
        platform: String,
        statusToken: String,
        requestOptions: RequestOptions? = null,
    ): SdkPollCommunityConnectionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| platform | `String` | Yes |
| statusToken | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkPollCommunityConnectionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.communityConnections.poll(platform = "discord", statusToken = "string_example")
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

## complete

Complete a community connection

[API reference](https://sell.app/docs/api/community-connections) · Effect: **consequential**

```kotlin
fun complete(
        platform: String,
        statusToken: String,
        serverId: String,
        requestOptions: RequestOptions? = null,
    ): SdkCompleteCommunityConnectionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| platform | `String` | Yes |
| statusToken | `String` | Yes |
| serverId | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCompleteCommunityConnectionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.communityConnections.complete(platform = "whatsapp", statusToken = "replace-with-token-from-connection-start", serverId = "replace-with-returned-server-id")
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

## verify

Verify a community connection

[API reference](https://sell.app/docs/api/community-connections) · Effect: **consequential**

```kotlin
fun verify(
        platform: String,
        requestOptions: RequestOptions? = null,
    ): SdkVerifyCommunityConnectionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| platform | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkVerifyCommunityConnectionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.communityConnections.verify(platform = "discord")
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

## disconnect

Disconnect a community platform

[API reference](https://sell.app/docs/api/community-connections) · Effect: **consequential**

```kotlin
fun disconnect(
        platform: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| platform | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.communityConnections.disconnect(platform = "discord")
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

