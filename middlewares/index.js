const Log = require('../models/Log')

module.exports.logRequest = async (req, res, next) => {
	try {
		await Log.create({
			type: req.method,
			route: req.path,
			req: JSON.stringify(req.body),
			headers: JSON.stringify(req.headers),
		})
	} catch (error) {
		console.log('Erro ao logar requisição', error)
	}
	next()
}