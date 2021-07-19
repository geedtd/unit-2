import { Recipe } from "../models/recipe.js";

export {
    index,

}

function index(req, res) {
    Recipe.find({}, function(err, recipes) {
        res.render('recipes/index', {
            err: err,
            recipes: recipes,
        })
    })
}