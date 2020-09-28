const { DataTypes, Model } = require('sequelize')
const database = require('../database')

class Order extends Model {
}

Order.init({
	transaction: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	user: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	value: {
		type: DataTypes.FLOAT,
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
	url: {
		type: DataTypes.STRING,
	},
	paymentMethod: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	userEmail: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	message: {
		type: DataTypes.TEXT,
	},
}, {
	sequelize: database,
	modelName: 'Order',
})

module.exports = Order