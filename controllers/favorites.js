import { Recipe } from "../models/recipe.js";

export {
    newRecipe as new,
    index,
    create,

}

function index(req, res) {
    res.render('favorites/index', { title: 'Favorites', user: req.user ? req.user : null })
}

function create(req, res) {
    const recipe = new Recipe(req.body)
    recipe.save(function(err){
        if (err) return res.redirect('/newRecipe/new')
        res.redirect('/recipes')
    })
}

function newRecipe(req, res) {
    res.render('newRecipe/new')
}