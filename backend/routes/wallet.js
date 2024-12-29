const express = require('express');
const router = express.Router()
const controller = require('../controller/walletController')
const auth=require('../util/autentication')
router.post('/',auth,controller.deposit)


module.exports = router;