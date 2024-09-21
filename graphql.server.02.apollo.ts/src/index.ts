/**
    The ApolloServer constructor requires two parameters: your schema
    definition and your set of resolvers.
 */
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "./models/schema.js";
import { resolvers } from "./services/resolver.js";

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

/**
    Passing an ApolloServer instance to the `startStandaloneServer` function:
    1. creates an Express app
    2. installs your ApolloServer instance as middleware
    3. prepares your app to handle incoming requests
 */
const { url } = await startStandaloneServer(server, {
    listen: { port: 4044 },
});

console.log(`🚀  Server ready at: ${url}`);