import { Flight } from "../models/flight.js"

function index(req, res) {
  Flight.find({}, function (error, flights){
    console.log(error);
    res.render("flights/index", {
      error: error,
      flights: flights
    })
  })
}

function newMovie(req, res) {
  res.render('flights/new')
}

function create(req, res) {
  const flight = new Flight(req.body)
  console.log(flight);
  flight.save(function(err){
    if (err) return res.redirect('/flights/new')
    res.redirect('/flights')
  })
 

  }
  

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render("flights/show", {
      flight: flight,
      
    })
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err){
      res.redirect(`/flights/${flight._id}`)
    })
  })
}


export {
  index,
  newMovie as new,
  create,
  show,
  createTicket

}