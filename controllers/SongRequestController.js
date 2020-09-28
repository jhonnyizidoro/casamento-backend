const SongRequest = require('../models/SongRequest')

module.exports.createSongRequest = async (req, res) => {
	try {
		const songRequests = await SongRequest.create(req.body)
		res.json(songRequests)
	} catch (error) {
		if (error.name === 'SequelizeUniqueConstraintError') {
			res.status(500).json({ message: 'Cada convidado pode realizar apenas um pedido de música.' })
		} else {
			res.status(500).json(error)
		}
	}
}

module.exports.getSongRequests = async (req, res) => {
	try {
		const songRequests = await SongRequest.findAll()
		res.json(songRequests)
	} catch (error) {
		res.status(500).json(error)
	}
}