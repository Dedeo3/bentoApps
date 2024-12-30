const express = require('express')
const router = express.Router()
const controller = require('../controller/orderController')
const auth=require('../util/autentication')

router.post('/',auth,controller.order)

module.exports = router