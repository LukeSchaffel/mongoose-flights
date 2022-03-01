import { Meal } from "../models/meal.js"

function newMeal(req, res) {
  console.log('yup');
  Meal.find({}, function (err, meals) {
    res.render('meals/new', {
      title: "Add Meal",
      meals

    })
  })
}

export {
  newMeal as new,
}