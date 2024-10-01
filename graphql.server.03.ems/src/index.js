import express from "express"
import { createHandler } from "graphql-http/lib/use/express"
import { buildSchema } from "graphql"
import { ruruHTML } from "ruru/server"


// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello(name: String): String

    age: Int
    weight: Float!
    isOver: Boolean
    hobbies: [String!]!
  }
`)

// The root provides a resolver function for each API endpoint
const root = {
    hello({ name }) {
        return "Hello " + name
    },
    age: 17,
    weight: 34.5,
    isOver: true,
    hobbies: ["one", "two"]
}

const app = express()

// Create and use the GraphQL handler.
app.all(
    "/graphql",
    createHandler({
        schema: schema,
        rootValue: root,
    })
)

// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
})

// Start the server at port
app.listen(4004)
console.log("Running a GraphQL API server at http://localhost:4004/graphql")