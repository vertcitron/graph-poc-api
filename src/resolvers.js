var users = require('../data/users.json')

function normalize(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
}

var resolvers = {
  message: () => 'Hello World !',
  user: args => users.filter(user => user.id == args.id)[0],
  users: args => {
    const srch = normalize(args.search || '')
    if (!srch) return users
    return users.filter(user => {
      const firstName = normalize(user.first_name)
      const lastName = normalize(user.last_name)
      return firstName.includes(srch) || lastName.includes(srch)
    })
  },
  updateUser: ({id, first_name, last_name}) => {

  }
};

module.exports = resolvers;
