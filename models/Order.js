const { DataTypes, Model } = require('sequelize')
const database = require('../database')

class Order extends Model {
}

Model.init({
	transaction: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	user: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	value: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	product: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
	},
}, {
	sequelize: database,
	modelName: 'Order',
})

module.exports = Order