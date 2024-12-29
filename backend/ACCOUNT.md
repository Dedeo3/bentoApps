# This is API for account management

## Register
Endpoint: POST localhost:8181/account/registerAccount
request body:

```json
{
  "username": "username",
  "password": "qwmoaweoawrfejo",
  "balance": 100000.00
}
```
response success:
```json
{
  "message": "Account created successfully",
  "accountName": "username"
}
```
response failed:
```json
{
  "message": "failed to register"
}
```

response failed user already exist:
```json
{
  "message":"user already exists"
}
```

## Login
Endpoint: POST localhost:8181/account//login
Headers:
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

## logout
Endpoint: DELETE localhost:8181/account/logout
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

