import { Review } from "../models/review.js";
import { Recipe } from "../models/recipe.js";
export {
    createReview
}

function createReview(req, res ){
    // console.log('Please Work')
    // console.log(req.body)
    
    console.log(Recipe.findById(req.params._id))
    Recipe.findById(req.params.id)
    .then(recipe => {
        recipe.reviews.push(req.body)
        recipe.save()
        .then(() => {
        res.redirect('/recipes')
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/recipes')
    })
}