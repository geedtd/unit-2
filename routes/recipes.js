import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
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
router.get('/:id/edit', isLoggedIn, recipesCtrl.edit)
router.put('/:id', isLoggedIn, recipesCtrl.update)
router.delete('/:id', isLoggedIn, recipesCtrl.delete)

router.post('/:id/reviews', isLoggedIn, reviewsCtrl.createReview)
