const express = require('express')
const router = express.Router()

const { createOrder, updateOrder, getUserOrders, getOrders } = require('../controllers/OrderController')
const { createConfirmation, getConfirmations } = require('../controllers/ConfirmationController')
const { getStates, getStateCities } = require('../controllers/StateController')

router.post('/orders/create', createOrder)
router.post('/orders/update', updateOrder)
router.get('/orders/:userId', getUserOrders)
router.get('/orders', getOrders)

router.post('/confirmations/create', createConfirmation)
router.get('/confirmations', getConfirmations)

router.get('/states', getStates)
router.get('/states/cities/:abbreviation', getStateCities)

module.exports = router