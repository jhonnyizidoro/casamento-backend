const pagarme = require('pagarme')
const { onlyNumbers } = require('../util/formattes')
const Order = require('../models/Order')

module.exports.createOrder = async (req, res) => {

	const { cardHash, payment, currentUser, product } = req.body

	const POSTBACK_URL = process.env.POSTBACK_URL || 'https://en9hljuhpfay.x.pipedream.net'
	const PAGARME_API_KEY = process.env.PAGARME_API_KEY || 'ak_test_eWevGD63bFCvo1pjQ4zPEOtp7SiFEo'

	const order = {
		amount: product.value * 100,
		card_hash: cardHash,
		installments: payment.installments || 1,
		payment_method: 'credit_card',
		postback_url: POSTBACK_URL,
		soft_descriptor: 'Casamento Leo',
		customer: {
			name: currentUser.displayName,
			email: currentUser.email,
			external_id: currentUser.uid,
			type: 'individual',
			country: 'br',
			phone_numbers: [
				`+55${onlyNumbers(payment.phone)}`,
			],
			documents: [
				{
					type: 'cpf',
					number: onlyNumbers(payment.cpf),
				},
			],
		},
		billing: {
			name: currentUser.displayName,
			address: {
				street: payment.street,
				street_number: payment.number,
				zipcode: onlyNumbers(payment.zipcode),
				country: 'br',
				state: payment.state,
				city: payment.city,
			},
		},
		items: [
			{
				id: product.id,
				title: product.name,
				unit_price: product.value * 100,
				quantity: 1,
				tangible: false,
			},
		],
	}

	try {
		const client = await pagarme.client.connect({ api_key: PAGARME_API_KEY })
		const result = await client.transactions.create(order)
		await Order.create({
			transaction: result.id,
			user: currentUser.uid,
			value: product.value,
			product: product.name,
			status: result.status,
		})
		res.json({ id: result.id })
	} catch (error) {
		res.status(500).json(error)
	}

}

module.exports.updateOrder = async (req, res) => {
	const { id, current_status } = req.body
	const order = await Order.findOne({
		where: {
			transaction: id,
		},
	})
	await order.update({ status: current_status })
	res.json(order)
}

module.exports.getUserOrders = async (req, res) => {
	const { userId } = req.params
	const orders = await Order.findAll({
		where: {
			user: userId,
		},
	})
	res.json(orders)
}