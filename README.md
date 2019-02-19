# GRAPH POC API

This POC is a node.js / express / MySQL / Graph QL API for learning purpose.

It now implements a User Type, with a complete CRUID

To launch :

- Have node and npm working
- Have a mysql server working on localhost
- create a db-credentials.js at the root of the project with :
```
module.exports = {
  host: 'your_host',
  user: 'your_user',
  password: 'your_password'
}
```
(replacing values by your mysql credentials)
- In MySql create a database named `graph-poc-db`
- In this db create a table `users` with :
    - An `id` column, as int, primary key, auto incremented
    - A `first_name` column as VarChar(45)
    - A `last_name` column as VarChar(45)
- In the project directory, type npm run start
- you can open the graphiql page at http://localhost:4000/graphql and make graphQL requests.
