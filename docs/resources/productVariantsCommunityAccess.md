# productVariantsCommunityAccess

[All resources](../methods.md)

## replace

Replace variant community access

[API reference](https://sell.app/docs/api/product-variants/replace-variant-community-access) · Effect: **write**

```kotlin
fun replace(
        product: String,
        variant: String,
        community: ReplaceVariantCommunityAccessRequestApplicationJsonPropertyCommunity,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceVariantCommunityAccessResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| community | `ReplaceVariantCommunityAccessRequestApplicationJsonPropertyCommunity` | Yes |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceVariantCommunityAccessResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.productVariantsCommunityAccess.replace(product = "1", variant = "2", community = ObjectMapperFactory.read("{\"platform\":\"discord\",\"server_id\":\"1187040134912155648\",\"role_ids\":[\"1187040299781210112\"],\"required\":true,\"remove_on_expire\":true}", app.sell.sellapp.models.ReplaceVariantCommunityAccessRequestApplicationJsonPropertyCommunity::class.java), expectedUpdatedAt = java.time.OffsetDateTime.parse("2024-01-10T18:47:22.000000Z"))
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

