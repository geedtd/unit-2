import { Router } from 'express'
const router = Router()
import * as recipesCtrl from '../controllers/recipes.js'

router.get('/',recipesCtrl.index) 

export {
    router
}
