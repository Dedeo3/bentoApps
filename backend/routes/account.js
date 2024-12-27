const express = require('express');
const router = express.Router()
const controller = require('../controller/accountController')
router.post('/registerAccount',controller.register)
router.post('/login',controller.login)

module.exports = router;