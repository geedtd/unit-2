import { Recipe } from "../models/recipe.js";

export {
    index,
    newRecipe as new,
    create,
    show,
    edit,
    update,
    deleteRecipe as delete
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

function deleteRecipe(req, res) {
    Recipe.findById(req.params.id)
    .then(recipe => {
        if (recipe.owner.equals(req.user.profile._id)) {
            recipe.delete()
            .then(() => {
                res.redirect(`/recipes`)
            })
        }   else {
            throw new Error ('Not Authorized!')
        }
    })
    .catch(err => {
        console.log(err)
        res.redirect('/recipes')
    })
}

function update(req, res) {
    Recipe.findById(req.params.id)
    .then(recipe => {
        if (recipe.owner.equals(req.user.profile._id)) {
            recipe.update(req.body, { new: true })
            .then(() => {
                res.redirect(`/recipes/${recipe._id}`)
            })
        }   else {
            throw new Error ('Not Authorized')
        }
    })
    .catch(err => {
        console.log(err)
        res.redirect('/recipes')
    })
}

function edit(req, res) {
    Recipe.findById(req.params.id)
    .then(recipe => {
        res.render('recipes/edit', {
            recipe, 
            title: 'Edit Recipe'
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/recipes')
    })
}

function show(req,res ) {
    Recipe.findById(req.params.id)
    .populate('owner')
    .then( recipe => {
        res.render('recipes/show', {
            recipe,
            title: 'Recipe Details'
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/recipes')
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



function newRecipe(req, res) {
    res.render('recipes/new', { title: 'New Recipe' })
}