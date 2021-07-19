import { Router } from 'express'
const router = Router()
import * as favoritesCtrl from '../controllers/favorites.js'

router.get('/',favoritesCtrl.index) 

export {
    router
}