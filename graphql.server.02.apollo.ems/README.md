
### Install 
- `npm init --yes && npm pkg set type="module"`
- `npm install @apollo/server graphql`

### Run
- `npm start`
- REQUEST: `POST http://localhost:4044/`
    ```
    query GetBooks {
        books {
            title
            author
        }
    }
    ```
- RESPONSE:
    ```
    {
        "data": {
            "books": [
                {
                    "title": "The Awakening",
                    "author": "Kate Chopin"
                },
                {
                    "title": "City of Glass",
                    "author": "Paul Auster"
                }
            ]
        }
    }
    ```


### References 
- [Get started with Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started)
- [GraphQL Crash Course in 2024 | Build a Full Stack MERN App](https://www.youtube.com/watch?v=Vr-QHtbmd38)