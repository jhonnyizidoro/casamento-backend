const Confirmation = require('../models/Confirmation')

module.exports.createConfirmation = async (req, res) => {
	try {
		const confirmation = await Confirmation.create(req.body)
		res.json(confirmation)
	} catch (error) {
		if (error.name === 'SequelizeUniqueConstraintError') {
			res.status(500).json({ message: 'Esse convidado já teve a presença confirmada.' })
		} else {
			res.status(500).json(error)
		}
	}
}

module.exports.getConfirmations = async (req, res) => {
	try {
		const confirmations = await Confirmation.findAll()
		res.json(confirmations)
	} catch (error) {
		res.status(500).json(error)
	}
}