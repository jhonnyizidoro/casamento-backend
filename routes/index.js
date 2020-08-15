const express = require('express')
const router = express.Router()

const { createOrder, updateOrder, getUserOrders } = require('../controllers/OrderController')

router.post('/api/create', createOrder)
router.post('/api/update', updateOrder)
router.get('/api/orders/:userId', getUserOrders)

module.exports = router