import { Recipe } from "../models/recipe.js";

export {
    index,
    newRecipe as new,
    create,
    show,

}


function show(req,res ) {
    Recipe.findById(req.params.id)
    .populate('owner')
    .then( recipe => {
        res.render
    })
}
function index(req, res) {
    Recipe.find({})
    .then(recipes => {
        res.render('recipes/index', {
            recipes,
            title: 'Recipes',     
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/recipes/index')
    })    
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
    res.render('recipes/new', { title: 'New Recipe' })
}