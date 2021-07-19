import { Router } from 'express'

export {
  router
}

const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'New Recipe', user: req.user ? req.user : null })
})
router.post('/, ')

