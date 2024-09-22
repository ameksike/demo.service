import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';

// schema 
import userTypeDef from './models/user.schema.js';
import transactionTypeDef from './models/transaction.schema.js';
import { typeDefs as bookSchema } from './models/book.schema.js';

// resolver
import UserResolver from './services/user.resolver.js';
import { resolvers as BookResolver } from './services/book.resolver.js';

/*
    The ApolloServer constructor requires two parameters: your schema
    definition and your set of resolvers.
 */
const server = new ApolloServer({
  typeDefs: mergeTypeDefs([
    bookSchema,
    userTypeDef,
    transactionTypeDef
  ]),
  resolvers: mergeResolvers([
    UserResolver,
    BookResolver
  ]),
});

/*
  Passing an ApolloServer instance to the `startStandaloneServer` function:
    1. creates an Express app
    2. installs your ApolloServer instance as middleware
    3. prepares your app to handle incoming requests
*/
const { url } = await startStandaloneServer(server, {
  listen: { port: 4004 },
});

console.log(`🚀  Server ready at: ${url}`);