
### Install 
- `npm init --yes && npm pkg set type="module"`
- `npm install @apollo/server graphql`

![screenshot](./rsc/screenshot.jpg)

### Run 
- `npm start`
- `http://localhost:4044`

### Example 1
- REQUEST: `POST http://localhost:4044/`
    ```
    query GetUsers($userId: ID!) {
        user(userId: $userId) {
            name,
            username
        },
        users {
            username
        }
    }
    ```
- RESPONSE:
    ```
    {
        "data": {
            "user": {
                "name": "User Two",
                "username": "user2"
            },
            "users": [
                {
                    "username": "user1"
                },
                {
                    "username": "user2"
                },
                {
                    "username": "user3"
                },
                {
                    "username": "user4"
                },
                {
                    "username": "user5"
                }
            ]
        }
    }
    ```


### References 
- [Get started with Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started)
- [GraphQL Crash Course in 2024 | Build a Full Stack MERN App](https://www.youtube.com/watch?v=Vr-QHtbmd38)