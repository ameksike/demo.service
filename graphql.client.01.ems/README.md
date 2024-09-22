### Native GraphQL Client

```js
fetch('http://localhost:4004/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        operationName: 'FetchBooks',
        query: `
            query FetchBooks {
                getBooks {
                    id
                    title
                    author
                    publishedYear
                }
            }
        `
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

- Many GraphQL servers are configured to expect requests at /graphql, so you might need to adjust the URL. The endpoint might be wrong (e.g., http://localhost:4004 might need to be http://localhost:4004/graphql).
  
- Ensure JSON String Structure: Ensure that the structure of the JSON you're sending in the body is correct. Make sure the query is properly formatted, as a missing or incorrect character could cause problems.

- Check the Server Logs: Check the server logs (if you have access) to see if it's receiving the request, and if so, what errors might be occurring on the server side.