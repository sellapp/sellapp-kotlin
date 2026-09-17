# variantDeliverables

[All resources](../methods.md)

## get

Retrieve variant deliverable configuration

[API reference](https://sell.app/docs/api/product-variants) · Effect: **read**

```kotlin
fun get(
        product: String,
        variant: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetVariantDeliverableConfigurationResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetVariantDeliverableConfigurationResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.variantDeliverables.get(product = "string_example", variant = "1")
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

Replace variant deliverable configuration

[API reference](https://sell.app/docs/api/product-variants) · Effect: **write**

```kotlin
fun replace(
        product: String,
        variant: String,
        types: List<CreateProductVariantRequestApplicationJsonPropertyDeliverableTypes>,
        data: ReplaceVariantDeliverableConfigurationRequestApplicationJsonPropertyData,
        expectedUpdatedAt: OffsetDateTime? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceVariantDeliverableConfigurationResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `String` | Yes |
| variant | `String` | Yes |
| types | `List<CreateProductVariantRequestApplicationJsonPropertyDeliverableTypes>` | Yes |
| data | `ReplaceVariantDeliverableConfigurationRequestApplicationJsonPropertyData` | Yes |
| expectedUpdatedAt | `OffsetDateTime?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceVariantDeliverableConfigurationResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.variantDeliverables.replace(product = "string_example", variant = "1", types = listOf(app.sell.sellapp.types.CreateProductVariantRequestApplicationJsonPropertyDeliverableTypes("MANUAL")), data = ObjectMapperFactory.read("{\"comment\":\"Delivery is arranged by Launch Lab.\"}", app.sell.sellapp.models.ReplaceVariantDeliverableConfigurationRequestApplicationJsonPropertyData::class.java))
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

