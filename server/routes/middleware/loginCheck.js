const { Http } = require('@status/codes');
module.exports = function (request,response,next) {
  if (request.session.user) {
    return next();
  }
  response.status(Http.Unauthorized).json('Please login');
};
