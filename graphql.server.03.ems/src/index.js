import express from "express"
import { createHandler } from "graphql-http/lib/use/express"
import { buildSchema } from "graphql"
import { ruruHTML } from "ruru/server"
import { schema as defaultSchemaService } from "./model/default.schema_service.js"
import { schema as defaultSchema } from "./model/default.schema.js"
import { resolver as defaultResolver } from "./service/default.resolver.js"

const app = express();

// Create and use the GraphQL handler.
app.all(
    "/graphql",
    createHandler({
        // Construct a schema, using GraphQL schema language
        schema: buildSchema(defaultSchema),
        // The root provides a resolver function for each API endpoint
        rootValue: defaultResolver,
    })
)

// Create and use the GraphQL handler for All in One.
app.all(
    "/allInone",
    createHandler({
        schema: defaultSchemaService
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