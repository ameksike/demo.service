let protocol = "http";
let host = "localhost";
let port = 4004;
let path = "/";
let uri = `${protocol}://${host}:${port}${path}`;

(async () => {
    let response = await fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            // Specify which operation to run
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
    });
    let result = await response.json();
    console.log(result.data);
})()