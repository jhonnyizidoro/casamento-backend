const express = require('express')
const router = express.Router()

const { createOrder, updateOrder, getUserOrders } = require('../controllers/OrderController')

router.post('/create', createOrder)
router.post('/update', updateOrder)
router.get('/orders/:userId', getUserOrders)

module.exports = router