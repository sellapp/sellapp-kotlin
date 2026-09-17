# customers

[All resources](../methods.md)

## list

List customers

[API reference](https://sell.app/docs/api/customers/list-customers) · Effect: **read**

```kotlin
fun list(
        limit: Int? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkListCustomersResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Int?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkListCustomersResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.customers.list()
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

Create a customer

[API reference](https://sell.app/docs/api/customers/identity-and-entitlements) · Effect: **consequential**

```kotlin
fun create(
        email: String,
        externalId: String? = null,
        name: String? = null,
        locale: String? = null,
        metadata: CreateCustomerRequestApplicationJsonPropertyMetadata? = null,
        requestOptions: RequestOptions? = null,
    ): SdkCreateCustomerResponseValue201ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| email | `String` | Yes |
| externalId | `String?` | No |
| name | `String?` | No |
| locale | `String?` | No |
| metadata | `CreateCustomerRequestApplicationJsonPropertyMetadata?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkCreateCustomerResponseValue201ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.customers.create(externalId = "crm_maya_314", email = "maya.chen@example.com", name = "Maya Chen", locale = "en-GB", metadata = ObjectMapperFactory.read("{\"plan\":\"standard\",\"seats\":3}", app.sell.sellapp.models.CreateCustomerRequestApplicationJsonPropertyMetadata::class.java))
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

Documented HTTP responses: 201, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## search

Search customers

[API reference](https://sell.app/docs/api/customers/search-customers) · Effect: **read**

```kotlin
fun search(
        limit: Long? = null,
        page: Long? = null,
        pagination: Boolean? = null,
        filters: List<SearchCustomersRequestApplicationJsonPropertyFiltersItem>? = null,
        sort: List<SearchCustomersRequestApplicationJsonPropertySortItem>? = null,
        search: SearchCustomersRequestApplicationJsonPropertySearch? = null,
        includes: List<SearchCustomersRequestApplicationJsonPropertyIncludesItem>? = null,
        requestOptions: RequestOptions? = null,
    ): Page<SdkSearchCustomersResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| limit | `Long?` | No |
| page | `Long?` | No |
| pagination | `Boolean?` | No |
| filters | `List<SearchCustomersRequestApplicationJsonPropertyFiltersItem>?` | No |
| sort | `List<SearchCustomersRequestApplicationJsonPropertySortItem>?` | No |
| search | `SearchCustomersRequestApplicationJsonPropertySearch?` | No |
| includes | `List<SearchCustomersRequestApplicationJsonPropertyIncludesItem>?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `Page<SdkSearchCustomersResponseValue200ApplicationJson>`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.customers.search(filters = listOf(ObjectMapperFactory.read("{\"field\":\"id\",\"operator\":\"=\",\"value\":125}", app.sell.sellapp.models.SearchCustomersRequestApplicationJsonPropertyFiltersItem::class.java)), sort = listOf(ObjectMapperFactory.read("{\"field\":\"created_at\",\"direction\":\"desc\"}", app.sell.sellapp.models.SearchCustomersRequestApplicationJsonPropertySortItem::class.java)))
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

Retrieve a customer

[API reference](https://sell.app/docs/api/customers/retrieve-customer) · Effect: **read**

```kotlin
fun get(
        customer: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetCustomerResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| customer | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetCustomerResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.customers.get(customer = "125")
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

Update a customer

[API reference](https://sell.app/docs/api/customers/identity-and-entitlements) · Effect: **consequential**

```kotlin
fun update(
        customer: String,
        email: PatchField<String> = PatchField.Absent,
        name: PatchField<String?> = PatchField.Absent,
        locale: PatchField<String?> = PatchField.Absent,
        metadata: PatchField<UpdateCustomerRequestApplicationJsonPropertyMetadata> =
            PatchField.Absent,
        externalId: PatchField<String> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateCustomerResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| customer | `String` | Yes |
| email | `PatchField<String>` | No |
| name | `PatchField<String?>` | No |
| locale | `PatchField<String?>` | No |
| metadata | `PatchField<UpdateCustomerRequestApplicationJsonPropertyMetadata>` | No |
| externalId | `PatchField<String>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateCustomerResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.customers.update(customer = "314", locale = app.sell.sellapp.common.http.PatchField.Present("en-US"))
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## getByExternalId

Retrieve a customer by external ID

[API reference](https://sell.app/docs/api/customers/identity-and-entitlements) · Effect: **read**

```kotlin
fun getByExternalId(
        externalId: String,
        requestOptions: RequestOptions? = null,
    ): SdkGetCustomerResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| externalId | `String` | Yes |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetCustomerResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.customers.getByExternalId(externalId = "314")
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## upsertByExternalId

Create or update a customer by external ID

[API reference](https://sell.app/docs/api/customers/identity-and-entitlements) · Effect: **consequential**

```kotlin
fun upsertByExternalId(
        externalId: String,
        email: String,
        name: String? = null,
        locale: String? = null,
        metadata: UpsertCustomerRequestApplicationJsonPropertyMetadata? = null,
        requestOptions: RequestOptions? = null,
    ): SdkUpsertCustomerResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| externalId | `String` | Yes |
| email | `String` | Yes |
| name | `String?` | No |
| locale | `String?` | No |
| metadata | `UpsertCustomerRequestApplicationJsonPropertyMetadata?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpsertCustomerResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.customers.upsertByExternalId(externalId = "crm_maya_314", email = "maya.chen@example.com", name = "Maya Chen")
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

## updateByExternalId

Update a customer by external ID

[API reference](https://sell.app/docs/api/customers/identity-and-entitlements) · Effect: **consequential**

```kotlin
fun updateByExternalId(
        externalId: String,
        email: PatchField<String> = PatchField.Absent,
        name: PatchField<String?> = PatchField.Absent,
        locale: PatchField<String?> = PatchField.Absent,
        metadata: PatchField<UpdateCustomerRequestApplicationJsonPropertyMetadata> =
            PatchField.Absent,
        bodyExternalId: PatchField<String> = PatchField.Absent,
        requestOptions: RequestOptions? = null,
    ): SdkUpdateCustomerResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| externalId | `String` | Yes |
| email | `PatchField<String>` | No |
| name | `PatchField<String?>` | No |
| locale | `PatchField<String?>` | No |
| metadata | `PatchField<UpdateCustomerRequestApplicationJsonPropertyMetadata>` | No |
| bodyExternalId | `PatchField<String>` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkUpdateCustomerResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.customers.updateByExternalId(externalId = "314", locale = app.sell.sellapp.common.http.PatchField.Present("en-US"))
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

