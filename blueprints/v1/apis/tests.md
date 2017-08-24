## GET /v1/users/{id}

### description
Fetch the user

:::note
#### Note
:::

+ Parameters
    + id : 1 (number, required) - Id of the account

+ Response 200 (application/json)
    + Body
        {
            "id": "id",
            "name": "name",
            "email": "example@example.com",
            "created_at": "2017-08-23 00:43:21",
            "updated_at": "2017-08-23 00:43:21"
        }


## GET /v1/users?{&name,email,type,limit,offset,order_by,direction}

### description
Search users

:::note
#### Note
:::

+ Parameters
    + name : name (string, optional) - Name of the Account
    + email : example (string, optional) - Email of the Account
    + type : student (string, optional) - Type name of the Account
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
name | string | required | Name of the account | name
email | string | required | Email of the account | example@example.com
password | string | required | Password of the account | acb1234

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
name | string | optional | Name of the account | name
email | string | optional | Email of the account | example@example.com
password | string | optional | Password of the account | password

:::note
#### Note
:::

+ Parameters
    + id : 1 (required, number) - Id of the account.

+ Response 204 (application/json)


## DELETE /v1/users/{id}

### description
Delete the user

:::note
#### Note
:::

+ Parameters
    + id : 1 (required, number) - Id of the account.

+ Response 204 (application/json)
