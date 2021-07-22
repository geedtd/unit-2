import { Router } from 'express'
import * as recipesCtrl from '../controllers/recipes.js'
import { isLoggedIn } from '../middleware/middleware.js'


export {
    router
}

const router = Router()

router.get('/',recipesCtrl.index) 
router.get('/new', recipesCtrl.new)
router.post('/', isLoggedIn, recipesCtrl.create)
router.get('/:id', recipesCtrl.show)
router.get('/:id/edit', isLoggedIn, tacosCtrl.edit)