import { Review } from "../models/review.js";
import { Recipe } from "../models/recipe.js";
export {
    createReview
}

function createReview(req, res ){
    // console.log('Please Work')
    // console.log(req.body)

    Review.findById(req.params.id)
    .then(rev => {
        rev.review.push(req.body)
        rev.save()
        .then(() => {
        res.redirect('/recipes')
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/recipes')
    })
}