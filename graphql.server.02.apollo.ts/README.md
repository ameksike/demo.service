
### Install 
- `npm init --yes && npm pkg set type="module"`
- `npm install @apollo/server graphql`
- `npm install --save-dev typescript @types/node`
- `npm install -D ts-node tslib tsconfig-paths`

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
- [Migrate from CommonJS to ESM in just 30 seconds!](https://www.youtube.com/watch?v=utqADmW7-HE)


