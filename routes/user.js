const express = require('express')
const router = express.Router()

const {
        register,
        deleteUser,
        updateUser,
        allUsers,
} = require('../controllers/userController')


router.post('/users/register', register)
router.delete('/users/:id', deleteUser)
router.put('/users/:id', updateUser)
router.get('/users', allUsers)


module.exports = router