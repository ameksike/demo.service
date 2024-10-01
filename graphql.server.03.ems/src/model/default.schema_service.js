import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

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
            }
        }
    })
})