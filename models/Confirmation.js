const { DataTypes, Model } = require('sequelize')
const database = require('../database')

class Confirmation extends Model {
}

Confirmation.init({
	song: {
		type: DataTypes.STRING,
	},
	guest: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	displayName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
}, {
	sequelize: database,
	modelName: 'Confirmation',
})

module.exports = Confirmation