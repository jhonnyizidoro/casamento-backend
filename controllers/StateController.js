const State = require('../models/State')
const City = require('../models/City')

module.exports.getStates = async (req, res) => {
	try {
		const states = await State.findAll()
		res.json(states)
	} catch (error) {
		res.status(500).json(error)
	}
}

module.exports.getStateCities = async (req, res) => {
	try {
		const { abbreviation } = req.params
		const state = await State.findOne({
			where: {
				abbreviation,
			},
		})
		const cities = await City.findAll({
			where: {
				stateId: state.id
			}
		})
		res.json(cities)
	} catch (error) {
		res.status(500).json(error)
	}
}