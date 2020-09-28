const { DataTypes, Model } = require('sequelize')
const database = require('../database')

class SongRequest extends Model {
}

SongRequest.init({
	song: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	displayName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
}, {
	sequelize: database,
	modelName: 'SongRequest',
})

module.exports = SongRequest