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