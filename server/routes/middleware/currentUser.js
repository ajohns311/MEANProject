const { User } = require('../../models');

module.exports = function (request, response, next) {
  User.findById(request.session.user._id)
    .then(user => {
      request.user = user;
      next();
    })
    .catch(next);
};
