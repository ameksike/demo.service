import { GraphQLInt, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

const User = new GraphQLObjectType({
    name: "User",
    fields: {
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString,
            // Using custom resolvers based in it hierarchy
            resolve: (obj) => {
                return obj.name?.trim().toUpperCase()
            }
        }
    }
});

export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: {
            getHello: {
                type: GraphQLString,
                resolve: (args) => {
                    const { name = "tst" } = args || {};
                    return "Hello " + name
                }
            },
            user: {
                type: User,
                resolve: () => {
                    return {
                        id: 1,
                        name: "Vadim"
                    }
                }
            }
        }
    })
})