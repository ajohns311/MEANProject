const { listingController } = require('../controllers');
const router = require('express').Router();
const { loginCheck, currentUser } = require('./middleware');

module.exports = router
  .use([loginCheck, currentUser])
  .post('/', listingController.create)
  .get('/', listingController.index)
  .get('/edit/:id', listingController.show)
  .put('/:id', listingController.edit)
  .get('/user', listingController.userListings)
  .delete('/:id', listingController.delete);
