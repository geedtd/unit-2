import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
import { isLoggedIn } from '../middleware/middleware.js'


export {
    router
}

const router = Router()

router.post('recipes/:id/reviews', isLoggedIn, reviewsCtrl.createReview)
