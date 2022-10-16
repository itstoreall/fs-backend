# fs-backend

---

## General:

### POST single payload

_endpoint:_

```
http://localhost:8822/api/gen/create-single
```

_request:_

```js
{
    "fileName": "one",
    "payloadId": 1,
    "payload": "hi one!"

}
```

_response:_

```js
{
    "status": "success",
    "code": 201,
    "data": {
        "payloadId": 1,
        "payload": "hi one!"
    }
}
```

---

### POST multi payload

_endpoint:_

```
http://localhost:8822/api/gen/create-multi
```

_request:_

```js
{
    "fileName": "multi",
    "payloadId": 1,
    "payload": "hi one!"

}
```

_response:_

```js
{
    "status": "success",
    "code": 201,
    "data": [
        {
            "payloadId": 1,
            "payload": "hi one!"
        }
    ]
}
```

---

> Flow:
>
> - Step one
> - Step two
> - CREATE something (current)

---

.env example

```
PORT = 3000

POSTGRES_HOST = ''
POSTGRES_DB = ''
POSTGRES_USER = ''
POSTGRES_PASSWORD = ''

CONTRACT_ADDRESS = ''
MASTER_WALLET_KEY = ''

HEROKU_POSTGRES_DB = ''
HEROKU_POSTGRES_USER = ''
HEROKU_POSTGRES_PASSWORD = ''
HEROKU_POSTGRES_HOST = ''
HEROKU_PORT_DB = 5432
```

---
