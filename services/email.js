const { createTransport } = require('nodemailer')

const getTransporter = () => createTransport({
	host: 'smtp.umbler.com',
	port: 587,
	auth: {
		user: 'naoresponda@casamentoleoejeny.com.br',
		pass: process.env.EMAIL_PASSWORD,
	},
})

module.exports = (to, subject, html) => {
	const transporter = getTransporter()

	transporter.sendMail({
		to,
		subject,
		html,
		from: 'naoresponda@casamentoleoejeny.com.br',
	}, (err, info) => {
		if (err) {
			console.log('Erro ao enviar email', err)
		} else {
			console.log('Email enviado com sucesso', info)
		}
	})
}