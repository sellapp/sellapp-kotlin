# affiliateReferrals

[All resources](../methods.md)

## list

List affiliate referrals

[API reference](https://sell.app/docs/api/affiliates/list-referrals) · Effect: **read**

```kotlin
fun list(
        affiliateId: Long? = null,
        orderId: Long? = null,
        status: AffiliateReferralsStatus? = null,
        limit: Int? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListAffiliateReferralsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| affiliateId | `Long?` | No |
| orderId | `Long?` | No |
| status | `AffiliateReferralsStatus?` | No |
| limit | `Int?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListAffiliateReferralsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.affiliateReferrals.list()
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

Retrieve an affiliate referral

[API reference](https://sell.app/docs/api/affiliates/manage-referral) · Effect: **read**

```kotlin
fun get(
        referral: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetAffiliateReferralResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| referral | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetAffiliateReferralResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.affiliateReferrals.get(referral = "1")
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

Update referral status

[API reference](https://sell.app/docs/api/affiliates/manage-referral) · Effect: **consequential**

```kotlin
fun update(
        referral: String,
        status: SdkUpdateReferralStatusRequestApplicationJsonStatus,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateReferralStatusResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| referral | `String` | Yes |
| status | `SdkUpdateReferralStatusRequestApplicationJsonStatus` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateReferralStatusResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.affiliateReferrals.update(referral = "71", status = app.sell.sellapp.types.SdkUpdateReferralStatusRequestApplicationJsonStatus("accepted"))
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

