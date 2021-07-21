import { Recipe } from "../models/recipe.js";

export {
    newRecipe as new,
    create,

}


function create(req, res) {
    req.body.owner = req.user.profile 
    Recipe.create(req.body)
    .then(recipe => {
        res.redirect('/recipes')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/recipes')
    })
}

function newRecipe(req, res) {
    res.render('newRecipe/new', { title: 'New Recipe', user: req.user ? req.user : null })
}