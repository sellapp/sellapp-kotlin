# promotionsPhases

[All resources](../methods.md)

## list

List promotion phases

[API reference](https://sell.app/docs/api/promotions/replace-promotion-phases) · Effect: **read**

```kotlin
fun list(
        promotion: String,
        requestOptions: RequestOptions? = null,
    ): SdkListPromotionPhasesResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| promotion | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkListPromotionPhasesResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.promotionsPhases.list(promotion = "1")
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

## replace

Replace promotion phases

[API reference](https://sell.app/docs/api/promotions/replace-promotion-phases) · Effect: **consequential**

```kotlin
fun replace(
        promotion: String,
        phases: List<ReplacePromotionPhasesRequestApplicationJsonPropertyPhasesItem>,
        requestOptions: RequestOptions? = null,
    ): SdkReplacePromotionPhasesResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| promotion | `String` | Yes |
| phases | `List<ReplacePromotionPhasesRequestApplicationJsonPropertyPhasesItem>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplacePromotionPhasesResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.promotionsPhases.replace(promotion = "1", phases = listOf(ObjectMapperFactory.read("{\"discount_type\":\"percentage\",\"discount_value\":\"20\",\"ends_at\":\"2026-08-04T00:00:00Z\",\"max_redemptions\":200,\"minimum_amount\":\"10\"}", app.sell.sellapp.models.ReplacePromotionPhasesRequestApplicationJsonPropertyPhasesItem::class.java), ObjectMapperFactory.read("{\"discount_type\":\"fixed\",\"discount_value\":\"5\",\"ends_at\":null,\"max_redemptions\":null,\"minimum_amount\":\"25\"}", app.sell.sellapp.models.ReplacePromotionPhasesRequestApplicationJsonPropertyPhasesItem::class.java)))
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

