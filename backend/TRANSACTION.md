## Order
Headers:
- Authorization : token
  endpoint: POST localhost:8181/order
  request body:

```json
{
  "menu_id": 1,
  "account_id": 3,
  "start_time": "YYYY-MM-DD HH:MI:SS",
  "end_time": "YYYY-MM-DD HH:MI:SS",
  "quantity": 2,
  "status": "in progress",
  "username": "ar",
  "price": 5000.00
}
```

end_time boleh null

response success:

```json
{
  "message": "Successfully ordered item",
  "data": {
    "menu_id": 1,
    "account_id": 3,
    "start_time": "2024-12-30 10:00:00",
    "end_time": null,
    "quantity": 2,
    "status": "in progress",
    "username": "ar",
    "totalPrice": 10000
  }
}
```
response failed:
```json
{
  "message": "something went wrong"
}
```