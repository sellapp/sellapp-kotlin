# paymentMethodsCustom

[All resources](../methods.md)

## list

List custom payment methods

[API reference](https://sell.app/docs/api/payment-methods/manage-custom-payment-methods) · Effect: **read**

```kotlin
fun list(
        requestOptions: RequestOptions? = null
    ): SdkListCustomPaymentMethodsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkListCustomPaymentMethodsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.paymentMethodsCustom.list()
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

## create

Create a custom payment method

[API reference](https://sell.app/docs/api/payment-methods/manage-custom-payment-methods) · Effect: **consequential**

```kotlin
fun create(
        type: SdkCreateCustomPaymentMethodRequestApplicationJsonType,
        name: String,
        description: String? = null,
        instructions: String? = null,
        steps: List<String?>? = null,
        redirectUrl: String? = null,
        skipInterstitialPage: Boolean? = null,
        showProcessingStatusPage: Boolean? = null,
        requireProofOfPayment: Boolean? = null,
        enabled: Boolean? = null,
        sortOrder: Long? = null,
        modifier: CreateCustomPaymentMethodRequestApplicationJsonPropertyModifier? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateCustomPaymentMethodResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| type | `SdkCreateCustomPaymentMethodRequestApplicationJsonType` | Yes |
| name | `String` | Yes |
| description | `String?` | No |
| instructions | `String?` | No |
| steps | `List<String?>?` | No |
| redirectUrl | `String?` | No |
| skipInterstitialPage | `Boolean?` | No |
| showProcessingStatusPage | `Boolean?` | No |
| requireProofOfPayment | `Boolean?` | No |
| enabled | `Boolean?` | No |
| sortOrder | `Long?` | No |
| modifier | `CreateCustomPaymentMethodRequestApplicationJsonPropertyModifier?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateCustomPaymentMethodResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.paymentMethodsCustom.create(type = app.sell.sellapp.types.SdkCreateCustomPaymentMethodRequestApplicationJsonType("instructions"), name = "Manual payment", instructions = "Contact Launch Lab before sending a payment.", enabled = false, modifier = ObjectMapperFactory.read("{\"percentage\":\"-2.50\",\"fixed\":\"-1.00\"}", app.sell.sellapp.models.CreateCustomPaymentMethodRequestApplicationJsonPropertyModifier::class.java))
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

## get

Retrieve a custom payment method

[API reference](https://sell.app/docs/api/payment-methods/manage-custom-payment-methods) · Effect: **read**

```kotlin
fun get(
        customPaymentMethod: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetCustomPaymentMethodResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| customPaymentMethod | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetCustomPaymentMethodResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.paymentMethodsCustom.get(customPaymentMethod = "string_example")
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

Replace a custom payment method

[API reference](https://sell.app/docs/api/payment-methods/manage-custom-payment-methods) · Effect: **consequential**

```kotlin
fun replace(
        customPaymentMethod: String,
        type: SdkCreateCustomPaymentMethodRequestApplicationJsonType,
        name: String,
        description: String? = null,
        instructions: String? = null,
        steps: List<String?>? = null,
        redirectUrl: String? = null,
        skipInterstitialPage: Boolean? = null,
        showProcessingStatusPage: Boolean? = null,
        requireProofOfPayment: Boolean? = null,
        enabled: Boolean? = null,
        sortOrder: Long? = null,
        modifier: ReplaceCustomPaymentMethodRequestApplicationJsonPropertyModifier? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceCustomPaymentMethodResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| customPaymentMethod | `String` | Yes |
| type | `SdkCreateCustomPaymentMethodRequestApplicationJsonType` | Yes |
| name | `String` | Yes |
| description | `String?` | No |
| instructions | `String?` | No |
| steps | `List<String?>?` | No |
| redirectUrl | `String?` | No |
| skipInterstitialPage | `Boolean?` | No |
| showProcessingStatusPage | `Boolean?` | No |
| requireProofOfPayment | `Boolean?` | No |
| enabled | `Boolean?` | No |
| sortOrder | `Long?` | No |
| modifier | `ReplaceCustomPaymentMethodRequestApplicationJsonPropertyModifier?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceCustomPaymentMethodResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.paymentMethodsCustom.replace(customPaymentMethod = "string_example", type = app.sell.sellapp.types.SdkCreateCustomPaymentMethodRequestApplicationJsonType("instructions"), name = "Manual payment", instructions = "Contact Launch Lab before sending a payment.", enabled = false)
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

Update a custom payment method

[API reference](https://sell.app/docs/api/payment-methods/manage-custom-payment-methods) · Effect: **consequential**

```kotlin
fun update(
        customPaymentMethod: String,
        type: PatchField<SdkCreateCustomPaymentMethodRequestApplicationJsonType> =
            PatchField.Absent,
        name: PatchField<String> = PatchField.Absent,
        description: PatchField<String?> = PatchField.Absent,
        instructions: PatchField<String?> = PatchField.Absent,
        steps: PatchField<List<String?>?> = PatchField.Absent,
        redirectUrl: PatchField<String?> = PatchField.Absent,
        skipInterstitialPage: PatchField<Boolean> = PatchField.Absent,
        showProcessingStatusPage: PatchField<Boolean> = PatchField.Absent,
        requireProofOfPayment: PatchField<Boolean> = PatchField.Absent,
        enabled: PatchField<Boolean> = PatchField.Absent,
        sortOrder: PatchField<Long> = PatchField.Absent,
        modifier: PatchField<UpdateCustomPaymentMethodRequestApplicationJsonPropertyModifier?> =
            PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateCustomPaymentMethodResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| customPaymentMethod | `String` | Yes |
| type | `PatchField<SdkCreateCustomPaymentMethodRequestApplicationJsonType>` | No |
| name | `PatchField<String>` | No |
| description | `PatchField<String?>` | No |
| instructions | `PatchField<String?>` | No |
| steps | `PatchField<List<String?>?>` | No |
| redirectUrl | `PatchField<String?>` | No |
| skipInterstitialPage | `PatchField<Boolean>` | No |
| showProcessingStatusPage | `PatchField<Boolean>` | No |
| requireProofOfPayment | `PatchField<Boolean>` | No |
| enabled | `PatchField<Boolean>` | No |
| sortOrder | `PatchField<Long>` | No |
| modifier | `PatchField<UpdateCustomPaymentMethodRequestApplicationJsonPropertyModifier?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateCustomPaymentMethodResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.paymentMethodsCustom.update(customPaymentMethod = "string_example", enabled = app.sell.sellapp.common.http.PatchField.Present(false), modifier = app.sell.sellapp.common.http.PatchField.Present(null))
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

## delete

Delete a custom payment method

[API reference](https://sell.app/docs/api/payment-methods/manage-custom-payment-methods) · Effect: **consequential**

```kotlin
fun delete(
        customPaymentMethod: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| customPaymentMethod | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.paymentMethodsCustom.delete(customPaymentMethod = "string_example")
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

