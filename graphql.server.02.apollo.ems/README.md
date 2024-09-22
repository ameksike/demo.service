
### Install 
- `npm init --yes && npm pkg set type="module"`
- `npm install @apollo/server graphql`

![screenshot](./rsc/screenshot.jpg)

### Run 
- `npm start`
- `http://localhost:4044`

### Get all books:
- REQUEST 
    ```
    query {
        getBooks {
            id
            title
            author
            publishedYear
        }
    }
    ```


### Example Multi Request
- REQUEST: `POST http://localhost:4044/`
    ```
    query GetData($userId: ID!) {
        user(userId: $userId) {
            name
            gender
            username
        },
        users {
            username
            name
        },
        books {
            author
            title
        }
    }
    ```
- RESPONSE:
    ```
    {
        "data": {
            "user": {
                "name": "User Two",
                "gender": "female",
                "username": "user2"
            },
            "users": [
                {
                    "username": "user1",
                    "name": "User One"
                },
                {
                    "username": "user2",
                    "name": "User Two"
                },
                {
                    "username": "user3",
                    "name": "User Three"
                },
                {
                    "username": "user4",
                    "name": "User Four"
                },
                {
                    "username": "user5",
                    "name": "User Five"
                }
            ],
            "books": [
                {
                    "author": "Kate Chopin",
                    "title": "The Awakening"
                },
                {
                    "author": "Paul Auster",
                    "title": "City of Glass"
                }
            ]
        }
    }
    ```


### References 
- [Get started with Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started)
- [GraphQL Crash Course in 2024 | Build a Full Stack MERN App](https://www.youtube.com/watch?v=Vr-QHtbmd38)