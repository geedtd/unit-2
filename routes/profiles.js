import { Router } from 'express'
//import * as profilesCtrl from ''
import { isLoggedIn } from '../middleware/middleware.js'


export {
    router
}

const router = Router()

router.get('/', isLoggedIn, )
