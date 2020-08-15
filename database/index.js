const { Sequelize } = require('sequelize')

module.exports = new Sequelize('casamento', 'root', 'root', {
	dialect: 'mysql',
	host: 'localhost',
	collate: 'utf8mb4_unicode_ci',
})