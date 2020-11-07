const express = require('express')
const router = express.Router()

const { createOrder, updateOrder, getUserOrders, getOrders } = require('../controllers/OrderController')
const { createConfirmation, getConfirmations } = require('../controllers/Confirmation')

router.post('/orders/create', createOrder)
router.post('/orders/update', updateOrder)
router.get('/orders/:userId', getUserOrders)
router.get('/orders', getOrders)
router.post('/confirmations/create', createConfirmation)
router.get('/confirmations', getConfirmations)

module.exports = router