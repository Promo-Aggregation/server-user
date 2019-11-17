# server-user

# End Points

## Register - `POST`

```
/register
```

Registers user.

Body example:

```
  {
    "device_token": "12345"
  }
```

## Login - `POST`

```
/login
```

Login user

Body example:

```
  {
    "device_token": "12345"
  }
```

Response:

```
  {
    "device_token": "12345",
    "tags": ["123", "345"]
  }
```

## Subscribe - `PUT`

```
/subscribe
```

Add subcription tags

Headers:

```
  {
    "device_token": "12345"
  }
```

Body:

```
  {
    "tags": ["aaa", "bbb"]
  }
```

Response:

```
  {
    "device_token": "12345",
    "tags": ["123", "345", "aaa", "bbb"]
  }
```

## Unsubscribe - `PUT`

```
/unsubscribe
```

Unsubscribe from tags

Headers:

```
  {
    "device_token": "12345"
  }
```

Body:

```
  {
    "tags": ["aaa", "123"]
  }
```

Response:

```
  {
    "device_token": "12345",
    "tags": ["345", "bbb"]
  }
```
