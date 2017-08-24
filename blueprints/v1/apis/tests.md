## GET /v1/users/{id}

### description
Fetch the user

:::note
#### Note
:::

+ Parameters
    + id : 1 (number, required) - user id

+ Response 200 (application/json)
    + Body
        {
            "id": "id",
            "name": "name",
            "email": "example@example.com",
            "created_at": "2017-08-23 00:43:21",
            "updated_at": "2017-08-23 00:43:21"
        }


## GET /v1/users?{&name,email,limit,offset,order_by,direction}

### description
Search users

:::note
#### Note
:::

+ Parameters
    + name : name (string, optional) - Name
    + email : example (string, optional) - Email
    + limit : 10 (number, required) - Limit for the pagination
    + offset : 10 (number, required) - Offset for the pagination
    + `order_by` : `created_at` (string, optional) - Order key for the order
    + direction : desc (optional, string) - Direction for the order

+ Response 200 (application/json)
    + Body
        {
            "total_count": "2",
            "users": [
                {
                    "id": "id",
                    "name": "name",
                    "email": "example@example.com",
                    "created_at": "2017-08-23 00:43:21",
                    "updated_at": "2017-08-23 00:43:21"
                },
                {
                    "id": "id",
                    "name": "name",
                    "email": "example2@example.com",
                    "created_at": "2017-08-23 00:43:21",
                    "updated_at": "2017-08-23 00:43:21"
                }
            ],
        }


## POST /v1/users

### description
Create an user

### body params
Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
name | string | required | Name | name
email | string | required | Email | example@example.com
password | string | required | Password | password

:::note
#### Note
:::

+ Response 201 (application/json)


## PUT /v1/users/{id}

### description
Update the users

### body params
Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
name | string | optional | Name | name
email | string | optional | Email | example@example.com

:::note
#### Note
:::

+ Parameters
    + id : 1 (required, number) - user id.

+ Response 204 (application/json)


## DELETE /v1/users/{id}

### description
Delete the user

:::note
#### Note
:::

+ Parameters
    + id : 1 (required, number) - user id.

+ Response 204 (application/json)
