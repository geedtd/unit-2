import { Recipe } from "../models/recipe.js";

export {
    index,

}

function index(req, res) {
    res.render('favorites/index', { title: 'Favorites', user: req.user ? req.user : null })
    // Recipe.find({}, function(err, recipes) {
    //     res.render('recipes/index', {
    //         err: err,
    //         recipes: recipes,
    //     })
    // })
}