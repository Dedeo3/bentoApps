# Api for handle menu

## Menu
endpoint: GET localhost:8181/menu/listMenu
Headers:
- Authorization : token

response success:
```json
{
  "message": "success get menu",
  "data": [
    {"name": "menu name",
      "category_id": 1,
      "menu_id": 1,
      "price": 100000.00,
      "description": "this is description",
      "stock": 10},
    {
      "name": "menu name",
      "category_id": 2,
      "menu_id": 1,
      "price": 100000.00,
      "description": "this is description",
      "stock": 10
    }
  ]
}
```

## detail menu
Headers:
- Authorization : token
endpoint: POST localhost:8181/menu/selectedMenu
  request body:
```json
{
  "menu_id": 1
}
```

response success:

```json
{
  "message": "get menu is successfully",
  "data": {
    "name": "menu name",
    "category_id": 1,
    "menu_id": 1,
    "price": 100000.00,
    "description": "this is description",
    "stock": 10
  }
}
```
response failed:
```json
{
  "message": "menu not found"
}
```

## search menu
Headers:
- Authorization : token
  endpoint: POST localhost:8181/menu/search
  request body:
```json
{
  "keyword": "blabla"
}
```

response success:

```json
{
  "message": "success get menu",
  "data": [
    {"name": "menu name",
      "category_id": 1,
      "menu_id": 1,
      "price": 100000.00,
      "description": "this is description",
      "stock": 10},
    {
      "name": "menu name",
      "category_id": 2,
      "menu_id": 1,
      "price": 100000.00,
      "description": "this is description",
      "stock": 10
    }
  ]
}
```
response failed:
```json
{
  "message": "menu not found"
}
```

## category
Headers:
- Authorization : token
  endpoint: POST localhost:8181/menu/categoryMenu
  request body:
```json
{
  "keyword": "blabla"
}
```

response success:

```json
{
  "message": "success get menu",
  "data": [
    {"name": "menu name",
      "category_id": 1,
      "menu_id": 1,
      "price": 100000.00,
      "description": "this is description",
      "stock": 10},
    {
      "name": "menu name",
      "category_id": 2,
      "menu_id": 1,
      "price": 100000.00,
      "description": "this is description",
      "stock": 10
    }
  ]
}
```
response failed:
```json
{
  "message": "menu not found"
}
```