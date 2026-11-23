# ticketsAnalytics

[All resources](../methods.md)

## get

Retrieve support analytics

[API reference](https://sell.app/docs/api/tickets/retrieve-support-analytics) · Effect: **read**

```kotlin
fun get(
        range: TicketsRange? = null,
        ruleLimit: Long? = null,
        activityLimit: Long? = null,
        requestOptions: RequestOptions? = null,
    ): SdkGetSupportAnalyticsResponseValue200ApplicationJson
```

| Argument | Native type | Required |
| --- | --- | --- |
| range | `TicketsRange?` | No |
| ruleLimit | `Long?` | No |
| activityLimit | `Long?` | No |
| requestOptions | `RequestOptions?` | No |

Returns: `SdkGetSupportAnalyticsResponseValue200ApplicationJson`.

```kt
import app.sell.sellapp.SellApp
import app.sell.sellapp.common.json.ObjectMapperFactory

fun main() {
    val client = SellApp(baseUrl = System.getenv("SELLAPP_API_BASE_URL"), apiKey = System.getenv("SELLAPP_API_KEY"), store = System.getenv("SELLAPP_STORE"))
    val result = client.ticketsAnalytics.get()
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

