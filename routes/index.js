const express = require('express')
const router = express.Router()

const { createOrder, updateOrder, getUserOrders } = require('../controllers/OrderController')
const { createSongRequest, getSongRequests } = require('../controllers/SongRequestController')

router.post('/orders/create', createOrder)
router.post('/orders/update', updateOrder)
router.get('/orders/:userId', getUserOrders)
router.post('/songRequests/create', createSongRequest)
router.get('/songRequests', getSongRequests)

module.exports = router