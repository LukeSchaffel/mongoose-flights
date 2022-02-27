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
  




export {
  index,
  newMovie as new,
  create

}