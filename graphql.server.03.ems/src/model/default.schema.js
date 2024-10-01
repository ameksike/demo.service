export const schema = `#graphql
    type Query {
        getHello(name: String): String

        age: Int
        weight: Float!
        isOver: Boolean
        hobbies: [String!]!

        user: User
    }

    type User {
        id: Int
        name: String,
        family: [User]
    }
`;