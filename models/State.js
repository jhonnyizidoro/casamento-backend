const { DataTypes, Model } = require('sequelize')
const database = require('../database')

class State extends Model {
}

State.init({
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	abbreviation: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
}, {
	sequelize: database,
	modelName: 'State',
	timestamps: false,
})

module.exports = State