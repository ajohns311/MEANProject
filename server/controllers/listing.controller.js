const Listing = require('mongoose').model('Listing');
const { Http } = require('@status/codes');

module.exports = {
  index(request,response) {
    console.log('logline7:', request.user._id);
    Listing.find({})
      .then(listings => {
        response.json(listings);
        console.log('found listings', listings)
      })
      .catch(error => {
        console.log(error);
      });
  },
  userListings(request, response) {
    Listing.find({ 'user': request.user._id })
      .then(listings => {
        response.json(listings);
        console.log('found listings', listings)
      })
      .catch(error => {
        console.log(error);
      });
  },
  show(request, response) {
    Listing.findById(request.params.id)
      .then(listing => {
        response.json(listing);
      })
      .catch(error => {
        console.log(error);
      })
  },
  create(request,response) {
    const { user } = request;
    Listing.create({ ...request.body, user: user._id })
      .then(listing => {
        console.log(listing);
        response.json(listing);
      })
      .catch(error => {
        console.log(error);
      });
  },
  delete(request,response) {
    Listing.findByIdAndRemove(request.params.id)
      .then(listing => {
        console.log(listing);
        response.json(listing);
      })
      .catch(error => {
        console.log(error);
      });
  },
  edit(request, response) {
    Listing.findByIdAndUpdate(request.params.id, request.body)
      .then(listing => {
        console.log(listing);
        response.json(listing);
      })
      .catch(error => {
        console.log(error);
      })
  }

};
