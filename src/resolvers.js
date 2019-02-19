var users = require('./users')

var resolvers = {
  user: users.read,
  users: users.index,
  updateUser: users.update,
  createUser: users.create,
  deleteUser: users.delete
};

module.exports = resolvers;
