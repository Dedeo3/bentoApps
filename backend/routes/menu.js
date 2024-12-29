const express = require('express')
const router = express.Router()
const controller = require('../controller/menuController')
const auth=require('../util/autentication')
router.get('/listMenu',auth,controller.listMenu)
router.post('/selectedMenu',auth,controller.selectedMenu)
router.post('/search',auth,controller.search)
router.post('/categoryMenu',auth,controller.category)

module.exports = router