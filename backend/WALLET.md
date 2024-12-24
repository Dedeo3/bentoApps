# This is api for wallet

## deposit
Endpoint: Patch localhost:8181/wallet
Headers:
- Authorization : token
  request body:
```json
{
  "payment_id": 1,
  "balance": 100000.00
}
```

response success:
```json
{
  "message": "deposit is successfully",
  "balance": 100000.00
}
```
response failed:
```json
{
  "message": "deposit is failed"
}
```