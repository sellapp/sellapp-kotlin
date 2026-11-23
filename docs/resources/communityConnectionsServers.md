# communityConnectionsServers

[All resources](../methods.md)

## get

Retrieve a community server

[API reference](https://sell.app/docs/api/community-connections/community-server) · Effect: **read**

```kotlin
fun get(
        platform: String,
        server: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetCommunityServerResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| platform | `String` | Yes |
| server | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetCommunityServerResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.communityConnectionsServers.get(platform = "discord", server = "server_ship_room")
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

## remove

Remove a community server

[API reference](https://sell.app/docs/api/community-connections/community-server) · Effect: **consequential**

```kotlin
fun remove(
        platform: String,
        server: String,
        affectedVariantIds: List<Long>? = null,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| platform | `String` | Yes |
| server | `String` | Yes |
| affectedVariantIds | `List<Long>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.communityConnectionsServers.remove(platform = "discord", server = "server_ship_room", affectedVariantIds = listOf(902L))
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

