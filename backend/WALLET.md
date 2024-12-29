# This is api for wallet

## deposit
Endpoint: Patch localhost:8181/wallet
Headers:
- Authorization : token
  request body:
```json
{
  "username": 1,
  "balance": 100000.00
}
```

response success:
```json
{
  "message": "Deposit is successfully added to balance",
  "balance": 100000.00
}
```
response failed:
```json
{
  "message": "deposit is failed"
}
```