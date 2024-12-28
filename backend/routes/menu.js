const express = require('express')
const router = express.Router()
const controller = require('../controller/menuController')
const auth=require('../util/autentication')
router.get('/listMenu',auth,controller.listMenu)
router.post('/selectedMenu',auth,controller.selectedMenu)

module.exports = router