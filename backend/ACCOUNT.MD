# This is API for account management

## Register
Endpoint: POST localhost:8181/registerAccount
request body:
```json
{
  "username": "username",
  "password": "qwmoaweoawrfejo"
}
```
response success:
```json
{
  "message": "register is successfully",
  "accountName": "username"
}
```
response failed:
```json
{
  "message": "failed to register"
}
```

## Login
- Authorization : token
request body:
```json
{
  "username": "username",
  "password": "qwmoaweoawrfejo"
}
```

response success:
```json
{
  "accountName": "username",
  "token": "blablabla"
}
```
response failed:
```json
{
  "message": "login failed"
}
```

## profile
Endpoint: PATCH localhost:8181/profile
Headers:
- Authorization : token
  request body:
```json
{
  "idAccount": 1,
  "name": "username / optional",
  "paymentId": 1,
  "balance": 1000000.00
}
```

response success:
```json
{
  "message": "success complete your account",
  "data": {
    "paymentId": 1,
    "name": "username / optional"
  }
}
```
response failed:
```json
{
  "message": "login failed"
}
```

## logout
Endpoint: DELETE localhost:8181/logout
Headers:
- Authorization : token
  response success:
```json
{
  "request": "OK"
}
```

response failed:
```json
{
  "error": "unauthorized"
}
```

