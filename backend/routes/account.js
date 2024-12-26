const express = require('express');
const router = express.Router()
const controller = require('../controller/accountController')
router.post('/',controller.register)

module.exports = router;