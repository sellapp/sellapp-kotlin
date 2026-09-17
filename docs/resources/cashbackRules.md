# cashbackRules

[All resources](../methods.md)

## list

List cashback rules

[API reference](https://sell.app/docs/api/wallet/cashback-rules) · Effect: **read**

```kotlin
fun list(
        requestOptions: RequestOptions? = null
    ): SdkListCashbackRulesResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkListCashbackRulesResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.cashbackRules.list()
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

Create a cashback rule

[API reference](https://sell.app/docs/api/wallet/cashback-rules) · Effect: **consequential**

```kotlin
fun create(
        percentBasis: Long,
        maximumCashbackCents: Long?,
        isActive: Boolean,
        productIds: List<Long>,
        requestOptions: RequestOptions? = null,
    ): SdkCreateCashbackRuleResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| percentBasis | `Long` | Yes |
| maximumCashbackCents | `Long?` | No |
| isActive | `Boolean` | Yes |
| productIds | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateCashbackRuleResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.cashbackRules.create(percentBasis = 500L, maximumCashbackCents = 1000L, isActive = false, productIds = listOf(120L))
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

## replace

Update a cashback rule

[API reference](https://sell.app/docs/api/wallet/cashback-rules) · Effect: **consequential**

```kotlin
fun replace(
        cashbackRule: String,
        percentBasis: Long,
        maximumCashbackCents: Long?,
        isActive: Boolean,
        productIds: List<Long>,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceCashbackRuleResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| cashbackRule | `String` | Yes |
| percentBasis | `Long` | Yes |
| maximumCashbackCents | `Long?` | No |
| isActive | `Boolean` | Yes |
| productIds | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceCashbackRuleResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.cashbackRules.replace(cashbackRule = "1", percentBasis = 500L, maximumCashbackCents = 1000L, isActive = false, productIds = listOf(120L))
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

Update a cashback rule

[API reference](https://sell.app/docs/api/wallet/cashback-rules) · Effect: **consequential**

```kotlin
fun update(
        cashbackRule: String,
        percentBasis: PatchField<Long> = PatchField.Absent,
        maximumCashbackCents: PatchField<Long?> = PatchField.Absent,
        isActive: PatchField<Boolean> = PatchField.Absent,
        productIds: PatchField<List<Long>> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateCashbackRuleResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| cashbackRule | `String` | Yes |
| percentBasis | `PatchField<Long>` | No |
| maximumCashbackCents | `PatchField<Long?>` | No |
| isActive | `PatchField<Boolean>` | No |
| productIds | `PatchField<List<Long>>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateCashbackRuleResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.cashbackRules.update(cashbackRule = "1", isActive = app.sell.sellapp.common.http.PatchField.Present(false))
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

## archive

Archive a cashback rule

[API reference](https://sell.app/docs/api/wallet/cashback-rules) · Effect: **consequential**

```kotlin
fun archive(
        cashbackRule: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| cashbackRule | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.cashbackRules.archive(cashbackRule = "1")
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

## restore

Restore a cashback rule

[API reference](https://sell.app/docs/api/wallet/cashback-rules) · Effect: **consequential**

```kotlin
fun restore(
        cashbackRule: String,
        requestOptions: RequestOptions? = null,
    ): SdkRestoreCashbackRuleResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| cashbackRule | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkRestoreCashbackRuleResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.cashbackRules.restore(cashbackRule = "1")
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

