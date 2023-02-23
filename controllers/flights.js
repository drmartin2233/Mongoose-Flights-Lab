const Flight = require('../models/Flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create
};

// function index(req, res) {
//     res.send('respond with a resource');
//   };


function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {title: 'All Flights', flights});
    });
}

function show(req, res) {
    Flight.findById(req.params.id)

}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight' });
  }
  

function create(req, res) {
    
    const flight = new Flight(req.body);
    flight.save(function(err) {
      if (err) return res.redirect('/flights/new');
      console.log(flight);
      res.redirect(`/flights/${flight._id}`);
    });
  }
  