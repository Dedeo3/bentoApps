## Order
Headers:
- Authorization : token
  endpoint: POST localhost:8181/order
  request body:

```json
{
  "menu_id": 1,
  "account_id": 1,
  "start_time": "YYYY-MM-DD HH:MI:SS",
  "end_time": "YYYY-MM-DD HH:MI:SS",
  "quantity": 2,
  "status": "in progress"
}
```

response success:

```json
{
  "message": "your order is successfully",
  "data": {
    "menu_id": 1,
    "account_id": 1,
    "start_time": "YYYY-MM-DD HH:MI:SS",
    "end_time": "YYYY-MM-DD HH:MI:SS",
    "quantity": 2,
    "status": "in progress"
  }
}
```
response failed:
```json
{
  "message": "something went wrong"
}
```