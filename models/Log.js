const { DataTypes, Model } = require('sequelize')
const database = require('../database')

class Log extends Model {
}

Log.init({
	type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	route: {
		type: DataTypes.STRING,
	},
	req: {
		type: DataTypes.TEXT,
	},
	headers: {
		type: DataTypes.TEXT,
	},
}, {
	sequelize: database,
	modelName: 'Log',
})

module.exports = Log