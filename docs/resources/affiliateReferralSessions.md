# affiliateReferralSessions

[All resources](../methods.md)

## list

List affiliate referral sessions

[API reference](https://sell.app/docs/api/affiliates/list-referral-sessions) · Effect: **read**

```kotlin
fun list(
        affiliateId: Long? = null,
        active: Boolean? = null,
        limit: Int? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListAffiliateReferralSessionsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| affiliateId | `Long?` | No |
| active | `Boolean?` | No |
| limit | `Int?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListAffiliateReferralSessionsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.affiliateReferralSessions.list()
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

Retrieve an affiliate referral session

[API reference](https://sell.app/docs/api/affiliates/list-referral-sessions) · Effect: **read**

```kotlin
fun get(
        referralSession: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetAffiliateReferralSessionResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| referralSession | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetAffiliateReferralSessionResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.affiliateReferralSessions.get(referralSession = "1")
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

