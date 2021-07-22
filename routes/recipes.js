import { Router } from 'express'
const router = Router()
import * as recipesCtrl from '../controllers/recipes.js'

router.get('/',recipesCtrl.index) 

export {
    router
}


// import { Router } from 'express'
// const router = Router()
// import * as newRecipeCtrl from '../controllers/newRecipe.js'
// import { isLoggedIn } from '../middleware/middleware.js'

// export {
//     router
// }


// router.get('/new', newRecipeCtrl.new)
// router.post('/', isLoggedIn, newRecipeCtrl.create)