# walletBonusTiers

[All resources](../methods.md)

## list

List wallet bonus tiers

[API reference](https://sell.app/docs/api/wallet/bonus-tiers) · Effect: **read**

```kotlin
fun list(
        requestOptions: RequestOptions? = null
    ): SdkListWalletBonusTiersResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkListWalletBonusTiersResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.walletBonusTiers.list()
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

Create a wallet bonus tier

[API reference](https://sell.app/docs/api/wallet/bonus-tiers) · Effect: **consequential**

```kotlin
fun create(
        minimumTopUpCents: Long,
        bonusKind: SdkCreateWalletBonusTierRequestApplicationJsonBonusKind,
        fixedBonusCents: Long?,
        percentBasis: Long?,
        maximumBonusCents: Long?,
        priority: Long,
        isActive: Boolean,
        requestOptions: RequestOptions? = null,
    ): SdkCreateWalletBonusTierResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| minimumTopUpCents | `Long` | Yes |
| bonusKind | `SdkCreateWalletBonusTierRequestApplicationJsonBonusKind` | Yes |
| fixedBonusCents | `Long?` | No |
| percentBasis | `Long?` | No |
| maximumBonusCents | `Long?` | No |
| priority | `Long` | Yes |
| isActive | `Boolean` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateWalletBonusTierResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.walletBonusTiers.create(minimumTopUpCents = 10000L, bonusKind = app.sell.sellapp.types.SdkCreateWalletBonusTierRequestApplicationJsonBonusKind("fixed"), fixedBonusCents = 500L, percentBasis = null, maximumBonusCents = null, priority = 0L, isActive = false)
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

Update a wallet bonus tier

[API reference](https://sell.app/docs/api/wallet/bonus-tiers) · Effect: **consequential**

```kotlin
fun replace(
        bonusTier: String,
        minimumTopUpCents: Long,
        bonusKind: SdkCreateWalletBonusTierRequestApplicationJsonBonusKind,
        fixedBonusCents: Long?,
        percentBasis: Long?,
        maximumBonusCents: Long?,
        priority: Long,
        isActive: Boolean,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceWalletBonusTierResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| bonusTier | `String` | Yes |
| minimumTopUpCents | `Long` | Yes |
| bonusKind | `SdkCreateWalletBonusTierRequestApplicationJsonBonusKind` | Yes |
| fixedBonusCents | `Long?` | No |
| percentBasis | `Long?` | No |
| maximumBonusCents | `Long?` | No |
| priority | `Long` | Yes |
| isActive | `Boolean` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceWalletBonusTierResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.walletBonusTiers.replace(bonusTier = "1", minimumTopUpCents = 10000L, bonusKind = app.sell.sellapp.types.SdkCreateWalletBonusTierRequestApplicationJsonBonusKind("fixed"), fixedBonusCents = 500L, percentBasis = null, maximumBonusCents = null, priority = 0L, isActive = false)
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

Documented HTTP responses: 200, 201, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## update

Update a wallet bonus tier

[API reference](https://sell.app/docs/api/wallet/bonus-tiers) · Effect: **consequential**

```kotlin
fun update(
        bonusTier: String,
        minimumTopUpCents: PatchField<Long> = PatchField.Absent,
        bonusKind: PatchField<SdkCreateWalletBonusTierRequestApplicationJsonBonusKind> =
            PatchField.Absent,
        fixedBonusCents: PatchField<Long?> = PatchField.Absent,
        percentBasis: PatchField<Long?> = PatchField.Absent,
        maximumBonusCents: PatchField<Long?> = PatchField.Absent,
        priority: PatchField<Long> = PatchField.Absent,
        isActive: PatchField<Boolean> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateWalletBonusTierResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| bonusTier | `String` | Yes |
| minimumTopUpCents | `PatchField<Long>` | No |
| bonusKind | `PatchField<SdkCreateWalletBonusTierRequestApplicationJsonBonusKind>` | No |
| fixedBonusCents | `PatchField<Long?>` | No |
| percentBasis | `PatchField<Long?>` | No |
| maximumBonusCents | `PatchField<Long?>` | No |
| priority | `PatchField<Long>` | No |
| isActive | `PatchField<Boolean>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateWalletBonusTierResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.walletBonusTiers.update(bonusTier = "1", isActive = app.sell.sellapp.common.http.PatchField.Present(false))
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

Documented HTTP responses: 200, 201, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## archive

Archive a wallet bonus tier

[API reference](https://sell.app/docs/api/wallet/bonus-tiers) · Effect: **consequential**

```kotlin
fun archive(
        bonusTier: String,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| bonusTier | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.walletBonusTiers.archive(bonusTier = "1")
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

Restore a wallet bonus tier

[API reference](https://sell.app/docs/api/wallet/bonus-tiers) · Effect: **consequential**

```kotlin
fun restore(
        bonusTier: String,
        requestOptions: RequestOptions? = null,
    ): SdkRestoreWalletBonusTierResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| bonusTier | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkRestoreWalletBonusTierResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.walletBonusTiers.restore(bonusTier = "1")
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

