import { Router } from 'express'
const router = Router()
import * as newRecipeCtrl from '../controllers/newRecipe.js'

export {
    router
}


router.get('/', newRecipeCtrl.index)
router.post('/', newRecipeCtrl.create)

