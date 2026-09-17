# affiliateProgram

[All resources](../methods.md)

## get

Retrieve affiliate program configuration

[API reference](https://sell.app/docs/api/affiliate-program/retrieve-affiliate-program) · Effect: **read**

```kotlin
fun get(
        requestOptions: RequestOptions? = null
    ): SdkGetAffiliateProgramConfigurationResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetAffiliateProgramConfigurationResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.affiliateProgram.get()
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

Replace affiliate program configuration

[API reference](https://sell.app/docs/api/affiliate-program/replace-affiliate-program) · Effect: **consequential**

```kotlin
fun replace(
        enabled: Boolean,
        settings: ReplaceAffiliateProgramConfigurationRequestApplicationJsonPropertySettings,
        products:
            List<ReplaceAffiliateProgramConfigurationRequestApplicationJsonPropertyProductsItem>,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceAffiliateProgramConfigurationResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| enabled | `Boolean` | Yes |
| settings | `ReplaceAffiliateProgramConfigurationRequestApplicationJsonPropertySettings` | Yes |
| products | `List<ReplaceAffiliateProgramConfigurationRequestApplicationJsonPropertyProductsItem>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceAffiliateProgramConfigurationResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.affiliateProgram.replace(enabled = true, settings = ObjectMapperFactory.read("{\"auto_approve_affiliates\":false,\"minimum_payout\":\"25\",\"commission\":{\"type\":\"percentage\",\"amount\":\"20\"},\"referrer_type\":\"first_referrer\",\"tracking_length\":30,\"subscription_commission\":true,\"enabled_specific_products\":true,\"payout_methods\":[\"PAYPAL\"],\"enable_hub\":false}", app.sell.sellapp.models.ReplaceAffiliateProgramConfigurationRequestApplicationJsonPropertySettings::class.java), products = listOf(ObjectMapperFactory.read("{\"id\":42,\"enabled\":true,\"commission\":{\"type\":\"percentage\",\"percentage\":\"25\"}}", app.sell.sellapp.models.ReplaceAffiliateProgramConfigurationRequestApplicationJsonPropertyProductsItem::class.java)))
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

List pending affiliate invitations

[API reference](https://sell.app/docs/api/affiliate-program/list-affiliate-invitations) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListPendingAffiliateInvitationsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListPendingAffiliateInvitationsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.affiliateProgram.list()
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

## invite

Invite an affiliate

[API reference](https://sell.app/docs/api/affiliate-program/invite-an-affiliate) · Effect: **consequential**

```kotlin
fun invite(
        email: String,
        requestOptions: RequestOptions? = null,
    ): SdkInviteAffiliateResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| email | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkInviteAffiliateResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.affiliateProgram.invite(email = "alex.morgan@example.com")
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

