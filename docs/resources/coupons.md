# coupons

[All resources](../methods.md)

## list

List all coupons

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        withTrashed: Boolean? = null,
        onlyTrashed: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): Page<ListCouponsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| withTrashed | `Boolean?` | No |
| onlyTrashed | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<ListCouponsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.list()
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## create

Create a coupon

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```kotlin
fun create(
        code: String,
        type: SdkCreateCouponRequestApplicationJsonType,
        discount: Any,
        storeWide: Boolean,
        products: List<Long>? = null,
        productVariants: List<Long>? = null,
        limit: Long? = null,
        expiresAt: OffsetDateTime? = null,
        minimumAmount: Any? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateCouponResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| code | `String` | Yes |
| type | `SdkCreateCouponRequestApplicationJsonType` | Yes |
| discount | `Any` | Yes |
| storeWide | `Boolean` | Yes |
| products | `List<Long>?` | No |
| productVariants | `List<Long>?` | No |
| limit | `Long?` | No |
| expiresAt | `OffsetDateTime?` | No |
| minimumAmount | `Any?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateCouponResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.create(code = "PLAN10", type = app.sell.sellapp.types.SdkCreateCouponRequestApplicationJsonType("PERCENTAGE"), discount = 10, storeWide = false, products = listOf(123L, 456L), productVariants = listOf(1001L, 1002L))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 201, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## get

Retrieve a coupon

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```kotlin
fun get(
        coupon: String,
        withTrashed: Boolean? = null,
        onlyTrashed: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): SdkGetCouponResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| coupon | `String` | Yes |
| withTrashed | `Boolean?` | No |
| onlyTrashed | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetCouponResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.get(coupon = "1")
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## replace

Update a coupon

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```kotlin
fun replace(
        coupon: String,
        withTrashed: Boolean? = null,
        onlyTrashed: Boolean? = null,
        code: String? = null,
        type: SdkCreateCouponRequestApplicationJsonType? = null,
        discount: Any? = null,
        storeWide: Boolean? = null,
        products: List<Long>? = null,
        productVariants: List<Long>? = null,
        limit: Long? = null,
        expiresAt: OffsetDateTime? = null,
        minimumAmount: Any? = null,
        requestOptions: RequestOptions? = null,
    ): SdkReplaceCouponResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| coupon | `String` | Yes |
| withTrashed | `Boolean?` | No |
| onlyTrashed | `Boolean?` | No |
| code | `String?` | No |
| type | `SdkCreateCouponRequestApplicationJsonType?` | No |
| discount | `Any?` | No |
| storeWide | `Boolean?` | No |
| products | `List<Long>?` | No |
| productVariants | `List<Long>?` | No |
| limit | `Long?` | No |
| expiresAt | `OffsetDateTime?` | No |
| minimumAmount | `Any?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkReplaceCouponResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.replace(coupon = "1", storeWide = false, products = listOf(123L), productVariants = listOf(1001L, 1002L))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## update

Update a coupon

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```kotlin
fun update(
        coupon: String,
        withTrashed: Boolean? = null,
        onlyTrashed: Boolean? = null,
        code: PatchField<String> = PatchField.Absent,
        type: PatchField<SdkCreateCouponRequestApplicationJsonType> = PatchField.Absent,
        discount: PatchField<Any> = PatchField.Absent,
        storeWide: PatchField<Boolean> = PatchField.Absent,
        products: PatchField<List<Long>> = PatchField.Absent,
        productVariants: PatchField<List<Long>> = PatchField.Absent,
        limit: PatchField<Long?> = PatchField.Absent,
        expiresAt: PatchField<OffsetDateTime?> = PatchField.Absent,
        minimumAmount: PatchField<Any?> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateCouponResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| coupon | `String` | Yes |
| withTrashed | `Boolean?` | No |
| onlyTrashed | `Boolean?` | No |
| code | `PatchField<String>` | No |
| type | `PatchField<SdkCreateCouponRequestApplicationJsonType>` | No |
| discount | `PatchField<Any>` | No |
| storeWide | `PatchField<Boolean>` | No |
| products | `PatchField<List<Long>>` | No |
| productVariants | `PatchField<List<Long>>` | No |
| limit | `PatchField<Long?>` | No |
| expiresAt | `PatchField<OffsetDateTime?>` | No |
| minimumAmount | `PatchField<Any?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateCouponResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.update(coupon = "1", storeWide = app.sell.sellapp.common.http.PatchField.Present(false), products = app.sell.sellapp.common.http.PatchField.Present(listOf(123L)), productVariants = app.sell.sellapp.common.http.PatchField.Present(listOf(1001L, 1002L)))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## delete

Delete a coupon

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```kotlin
fun delete(
        coupon: String,
        withTrashed: Boolean? = null,
        onlyTrashed: Boolean? = null,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| coupon | `String` | Yes |
| withTrashed | `Boolean?` | No |
| onlyTrashed | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.delete(coupon = "1")
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## search

Search coupons

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```kotlin
fun search(
        withTrashed: Boolean? = null,
        onlyTrashed: Boolean? = null,
        filters: List<SearchCouponsRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<SearchCouponsRequestApplicationJsonPropertySortItem>? = null,
        search: SearchCouponsRequestApplicationJsonPropertySearch? = null,
        includes: List<SearchCouponsRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SearchCouponsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| withTrashed | `Boolean?` | No |
| onlyTrashed | `Boolean?` | No |
| filters | `List<SearchCouponsRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<SearchCouponsRequestApplicationJsonPropertySortItem>?` | No |
| search | `SearchCouponsRequestApplicationJsonPropertySearch?` | No |
| includes | `List<SearchCouponsRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SearchCouponsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.search(filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":1}", app.sell.sellapp.models.SearchCouponsRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.SearchCouponsRequestApplicationJsonPropertySortItem::class.java)))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## batchCreate

Batch create coupons

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```kotlin
fun batchCreate(
        resources: List<BatchCreateCouponsRequestApplicationJsonPropertyResourcesItem>,
        requestOptions: RequestOptions? = null,
    ): SdkBatchCreateCouponsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| resources | `List<BatchCreateCouponsRequestApplicationJsonPropertyResourcesItem>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkBatchCreateCouponsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.batchCreate(resources = listOf(ObjectMapperFactory.read("{\"code\":\"STARTER10\",\"type\":\"PERCENTAGE\",\"discount\":10,\"store_wide\":false,\"products\":[123],\"product_variants\":[1001]}", app.sell.sellapp.models.BatchCreateCouponsRequestApplicationJsonPropertyResourcesItem::class.java)))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 201, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## batchUpdate

Batch update coupons

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```kotlin
fun batchUpdate(
        withTrashed: Boolean? = null,
        onlyTrashed: Boolean? = null,
        resources: BatchUpdateCouponsRequestApplicationJsonPropertyResources,
        requestOptions: RequestOptions? = null,
    ): SdkBatchUpdateCouponsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| withTrashed | `Boolean?` | No |
| onlyTrashed | `Boolean?` | No |
| resources | `BatchUpdateCouponsRequestApplicationJsonPropertyResources` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkBatchUpdateCouponsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.batchUpdate(resources = ObjectMapperFactory.read("{\"1\":{\"store_wide\":false,\"products\":[123],\"product_variants\":[1001,1002]}}", app.sell.sellapp.models.BatchUpdateCouponsRequestApplicationJsonPropertyResources::class.java))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## batchDelete

Batch delete coupons

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```kotlin
fun batchDelete(
        withTrashed: Boolean? = null,
        onlyTrashed: Boolean? = null,
        resources: List<Long>,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| withTrashed | `Boolean?` | No |
| onlyTrashed | `Boolean?` | No |
| resources | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.batchDelete(resources = listOf(1L, 2L))
    println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## v2ListCoupons

List all coupons

[API reference](https://sell.app/docs/api/coupons/list-all-coupons) · Effect: **read**

```kotlin
fun v2ListCoupons(
        limit: Long? = null,
        page: Long? = null,
        withTrashed: Boolean? = null,
        onlyTrashed: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): Page<V2ListCouponsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Long?` | No |
| page | `Long?` | No |
| withTrashed | `Boolean?` | No |
| onlyTrashed | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<V2ListCouponsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.v2ListCoupons()
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

## v2CreateCoupon

Create a coupon

[API reference](https://sell.app/docs/api/coupons/create-a-coupon) · Effect: **consequential**

```kotlin
fun v2CreateCoupon(
        code: String,
        type: SdkCreateCouponRequestApplicationJsonType,
        discount: Any,
        storeWide: Boolean,
        products: List<Long>? = null,
        productVariants: List<Long>? = null,
        limit: Long? = null,
        expiresAt: OffsetDateTime? = null,
        minimumAmount: Any? = null,
        requestOptions: RequestOptions? = null,
    ): SdkV2CreateCouponResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| code | `String` | Yes |
| type | `SdkCreateCouponRequestApplicationJsonType` | Yes |
| discount | `Any` | Yes |
| storeWide | `Boolean` | Yes |
| products | `List<Long>?` | No |
| productVariants | `List<Long>?` | No |
| limit | `Long?` | No |
| expiresAt | `OffsetDateTime?` | No |
| minimumAmount | `Any?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2CreateCouponResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.v2CreateCoupon(code = "PLAN10", type = app.sell.sellapp.types.SdkCreateCouponRequestApplicationJsonType("PERCENTAGE"), discount = 10, storeWide = false, products = listOf(123L, 456L), productVariants = listOf(1001L, 1002L))
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

## v2SearchCoupons

Search coupons

[API reference](https://sell.app/docs/api/coupons/search-coupons) · Effect: **read**

```kotlin
fun v2SearchCoupons(
        withTrashed: Boolean? = null,
        onlyTrashed: Boolean? = null,
        filters: List<V2SearchCouponsRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<V2SearchCouponsRequestApplicationJsonPropertySortItem>? = null,
        search: V2SearchCouponsRequestApplicationJsonPropertySearch? = null,
        includes: List<V2SearchCouponsRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<V2SearchCouponsResponseValue200ApplicationJsonPropertyDataItem>
```

| Argument | Native type | Required |
| --- | --- | --- |
| withTrashed | `Boolean?` | No |
| onlyTrashed | `Boolean?` | No |
| filters | `List<V2SearchCouponsRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<V2SearchCouponsRequestApplicationJsonPropertySortItem>?` | No |
| search | `V2SearchCouponsRequestApplicationJsonPropertySearch?` | No |
| includes | `List<V2SearchCouponsRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<V2SearchCouponsResponseValue200ApplicationJsonPropertyDataItem>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.v2SearchCoupons(filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":1}", app.sell.sellapp.models.V2SearchCouponsRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.V2SearchCouponsRequestApplicationJsonPropertySortItem::class.java)))
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

## v2GetCoupon

Retrieve a coupon

[API reference](https://sell.app/docs/api/coupons/retrieve-a-coupon) · Effect: **read**

```kotlin
fun v2GetCoupon(
        coupon: String,
        withTrashed: Boolean? = null,
        onlyTrashed: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): SdkV2GetCouponResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| coupon | `String` | Yes |
| withTrashed | `Boolean?` | No |
| onlyTrashed | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2GetCouponResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.v2GetCoupon(coupon = "1")
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

## v2ReplaceCoupon

Update a coupon

[API reference](https://sell.app/docs/api/coupons/update-a-coupon) · Effect: **consequential**

```kotlin
fun v2ReplaceCoupon(
        coupon: String,
        withTrashed: Boolean? = null,
        onlyTrashed: Boolean? = null,
        code: String? = null,
        type: SdkCreateCouponRequestApplicationJsonType? = null,
        discount: Any? = null,
        storeWide: Boolean? = null,
        products: List<Long>? = null,
        productVariants: List<Long>? = null,
        limit: Long? = null,
        expiresAt: OffsetDateTime? = null,
        minimumAmount: Any? = null,
        requestOptions: RequestOptions? = null,
    ): SdkV2ReplaceCouponResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| coupon | `String` | Yes |
| withTrashed | `Boolean?` | No |
| onlyTrashed | `Boolean?` | No |
| code | `String?` | No |
| type | `SdkCreateCouponRequestApplicationJsonType?` | No |
| discount | `Any?` | No |
| storeWide | `Boolean?` | No |
| products | `List<Long>?` | No |
| productVariants | `List<Long>?` | No |
| limit | `Long?` | No |
| expiresAt | `OffsetDateTime?` | No |
| minimumAmount | `Any?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2ReplaceCouponResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.v2ReplaceCoupon(coupon = "1", storeWide = false, products = listOf(123L), productVariants = listOf(1001L, 1002L))
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

## v2UpdateCoupon

Update a coupon

[API reference](https://sell.app/docs/api/coupons/update-a-coupon) · Effect: **consequential**

```kotlin
fun v2UpdateCoupon(
        coupon: String,
        withTrashed: Boolean? = null,
        onlyTrashed: Boolean? = null,
        code: PatchField<String> = PatchField.Absent,
        type: PatchField<SdkCreateCouponRequestApplicationJsonType> = PatchField.Absent,
        discount: PatchField<Any> = PatchField.Absent,
        storeWide: PatchField<Boolean> = PatchField.Absent,
        products: PatchField<List<Long>> = PatchField.Absent,
        productVariants: PatchField<List<Long>> = PatchField.Absent,
        limit: PatchField<Long?> = PatchField.Absent,
        expiresAt: PatchField<OffsetDateTime?> = PatchField.Absent,
        minimumAmount: PatchField<Any?> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkV2UpdateCouponResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| coupon | `String` | Yes |
| withTrashed | `Boolean?` | No |
| onlyTrashed | `Boolean?` | No |
| code | `PatchField<String>` | No |
| type | `PatchField<SdkCreateCouponRequestApplicationJsonType>` | No |
| discount | `PatchField<Any>` | No |
| storeWide | `PatchField<Boolean>` | No |
| products | `PatchField<List<Long>>` | No |
| productVariants | `PatchField<List<Long>>` | No |
| limit | `PatchField<Long?>` | No |
| expiresAt | `PatchField<OffsetDateTime?>` | No |
| minimumAmount | `PatchField<Any?>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2UpdateCouponResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.v2UpdateCoupon(coupon = "1", storeWide = app.sell.sellapp.common.http.PatchField.Present(false), products = app.sell.sellapp.common.http.PatchField.Present(listOf(123L)), productVariants = app.sell.sellapp.common.http.PatchField.Present(listOf(1001L, 1002L)))
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

## v2DeleteCoupon

Delete a coupon

[API reference](https://sell.app/docs/api/coupons/delete-a-coupon) · Effect: **consequential**

```kotlin
fun v2DeleteCoupon(
        coupon: String,
        withTrashed: Boolean? = null,
        onlyTrashed: Boolean? = null,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| coupon | `String` | Yes |
| withTrashed | `Boolean?` | No |
| onlyTrashed | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.v2DeleteCoupon(coupon = "1")
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

## v2BatchCreateCoupons

Batch create coupons

[API reference](https://sell.app/docs/api/coupons/batch-create-coupons) · Effect: **consequential**

```kotlin
fun v2BatchCreateCoupons(
        resources: List<V2BatchCreateCouponsRequestApplicationJsonPropertyResourcesItem>,
        requestOptions: RequestOptions? = null,
    ): SdkV2BatchCreateCouponsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| resources | `List<V2BatchCreateCouponsRequestApplicationJsonPropertyResourcesItem>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2BatchCreateCouponsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.v2BatchCreateCoupons(resources = listOf(ObjectMapperFactory.read("{\"code\":\"STARTER10\",\"type\":\"PERCENTAGE\",\"discount\":10,\"store_wide\":false,\"products\":[123],\"product_variants\":[1001]}", app.sell.sellapp.models.V2BatchCreateCouponsRequestApplicationJsonPropertyResourcesItem::class.java)))
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

Documented HTTP responses: 200, 201, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## v2BatchUpdateCoupons

Batch update coupons

[API reference](https://sell.app/docs/api/coupons/batch-update-coupons) · Effect: **consequential**

```kotlin
fun v2BatchUpdateCoupons(
        withTrashed: Boolean? = null,
        onlyTrashed: Boolean? = null,
        resources: V2BatchUpdateCouponsRequestApplicationJsonPropertyResources,
        requestOptions: RequestOptions? = null,
    ): SdkV2BatchUpdateCouponsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| withTrashed | `Boolean?` | No |
| onlyTrashed | `Boolean?` | No |
| resources | `V2BatchUpdateCouponsRequestApplicationJsonPropertyResources` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkV2BatchUpdateCouponsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.v2BatchUpdateCoupons(resources = ObjectMapperFactory.read("{\"1\":{\"store_wide\":false,\"products\":[123],\"product_variants\":[1001,1002]}}", app.sell.sellapp.models.V2BatchUpdateCouponsRequestApplicationJsonPropertyResources::class.java))
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

## v2BatchDeleteCoupons

Batch delete coupons

[API reference](https://sell.app/docs/api/coupons/batch-delete-coupons) · Effect: **consequential**

```kotlin
fun v2BatchDeleteCoupons(
        withTrashed: Boolean? = null,
        onlyTrashed: Boolean? = null,
        resources: List<Long>,
        requestOptions: RequestOptions? = null,
    )
```

| Argument | Native type | Required |
| --- | --- | --- |
| withTrashed | `Boolean?` | No |
| onlyTrashed | `Boolean?` | No |
| resources | `List<Long>` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `Unit`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.coupons.v2BatchDeleteCoupons(resources = listOf(1L, 2L))
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

