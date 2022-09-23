const express = require('express')
const router = express.Router()
const {createUser} = require("../controller/userController")
const {authAdmin} = require("../middleware/authMiddleware")


router.route('/').post(createUser)

module.exports = router

