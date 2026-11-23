# communityConnectionsSlack

[All resources](../methods.md)

## listChannels

List Slack available channels

[API reference](https://sell.app/docs/api/community-connections/slack-channels) · Effect: **read**

```kotlin
fun listChannels(
        requestOptions: RequestOptions? = null
    ): SdkListSlackAvailableChannelsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkListSlackAvailableChannelsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.communityConnectionsSlack.listChannels()
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

## addChannel

Add a Slack channel

[API reference](https://sell.app/docs/api/community-connections/slack-channels) · Effect: **consequential**

```kotlin
fun addChannel(
        channelId: String,
        requestOptions: RequestOptions? = null,
    ): SdkAddSlackChannelResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| channelId | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkAddSlackChannelResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.communityConnectionsSlack.addChannel(channelId = "C07LAUNCHVIP")
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

Documented HTTP responses: 201, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## replaceInviteLink

Update Slack workspace invite link

[API reference](https://sell.app/docs/api/community-connections/slack-invite-link) · Effect: **consequential**

```kotlin
fun replaceInviteLink(
        inviteLink: String? = null,
        workspaceInviteLink: String? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceSlackWorkspaceInviteLinkResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| inviteLink | `String?` | No |
| workspaceInviteLink | `String?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceSlackWorkspaceInviteLinkResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.communityConnectionsSlack.replaceInviteLink(inviteLink = "https://join.slack.com/t/launch-lab/shared_invite/zt-2abc123")
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

