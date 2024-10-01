export const schema = `#graphql
    type Query {
        hello(name: String): String

        age: Int
        weight: Float!
        isOver: Boolean
        hobbies: [String!]!

        user: User
    }

    type User {
        id: Int
        name: String
    }
`;