import { Recipe } from "../models/recipe.js";

export {
    index,
    
}

function index(req, res) {
    res.render('favorites/index', { title: 'Favorites', user: req.user ? req.user : null })
}

