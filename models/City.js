const { DataTypes, Model } = require('sequelize')
const database = require('../database')

class City extends Model {
}

City.init({
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	stateId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
}, {
	sequelize: database,
	modelName: 'City',
	timestamps: false,
})

module.exports = City