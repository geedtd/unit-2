import { Recipe } from "../models/recipe.js";

export {
    newRecipe as new,
    index,
    create,

}

function index(req, res) {
    res.render('newRecipe/new', { title: 'New Recipe', user: req.user ? req.user : null })
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