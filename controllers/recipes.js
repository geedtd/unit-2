import { Recipe } from "../models/recipe.js";

export {
    index,

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
            user: req.user ? req.user : null 
        })
    })
    
    
}

// import { Recipe } from "../models/recipe.js";

// export {
//     newRecipe as new,
//     create,

// }


// function create(req, res) {
//     req.body.owner = req.user.profile 
//     Recipe.create(req.body)
//     .then(recipe => {
//         res.redirect('/recipes')
//     })
//     .catch(err => {
//         console.log(err)
//         res.redirect('/recipes')
//     })
// }

// function newRecipe(req, res) {
//     res.render('newRecipe/new', { title: 'New Recipe', user: req.user ? req.user : null })
// }