const Flight = require('../models/Flight');


module.exports = {
  create
};

function create(req, res) {
  Flight.findById(req.params.id, function(err, Flight) {
    // We push an object with the data for the
    // review subdoc into Mongoose arrays
    Flight.reviews.push(req.body);
    Flight.save(function(err) {
      // Step 5: Respond with a redirect because we've mutated data
      res.redirect(`/flights/${Flight._id}`);
    });
  });
}