var { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        user(id: Int!): User
        users(search: String): [User]
    },
    type Mutation {
        updateUser(id: Int!, first_name: String, last_name: String ): User
    },
    type User {
        id: Int
        first_name: String
        last_name: String
    }
`);

module.exports = schema;
