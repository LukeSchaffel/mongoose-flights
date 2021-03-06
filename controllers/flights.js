import { Flight } from "../models/flight.js"
import { Meal } from "../models/meal.js"

function index(req, res) {
  Flight.find({}, function (error, flights){
    console.log(error);
    res.render("flights/index", {
      error: error,
      flights: flights,
      title: "All Flights"

    })
  })
}

function newMovie(req, res) {
  res.render('flights/new', {
    title: "Add New Flight"
  })
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
  Flight.findById(req.params.id) 
  .populate('meals')
  .exec(function (err, flight) {
    Meal.find({}, function (err, meals){
      res.render("flights/show", {
        flight: flight,
        title: `Flight ${flight._id}`,
        meals,
        
      })
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

function deleteFlight(req, res){
  Flight.findByIdAndDelete(req.params.id, function (err, flight) {
    res.redirect("/flights")
  })
}

function addToMeals(req, res) {
  Flight.findById(req.params.id, function (err, flight) {

    flight.meals.push(req.body.mealId)
    flight.save(function (err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}


export {
  index,
  newMovie as new,
  create,
  show,
  createTicket,
  deleteFlight as delete,
  addToMeals

}