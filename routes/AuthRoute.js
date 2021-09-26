const express = require('express')
const router = express.Router()

const AuthController = require("../controllers/AuthController")

router.get('/register', AuthController.reg).post('/register', AuthController.register)
router.get('/login', AuthController.log).post('/login', AuthController.login)

// router.post('/register', AuthController.register)
// router.post('/login', AuthController.login)




module.exports = router