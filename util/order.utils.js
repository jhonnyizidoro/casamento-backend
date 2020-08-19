const sendMail = require('../services/email')

module.exports.sendCreatedOrderEmail = (paymentMethod, userName, userEmail, orderId) => {
	let html
	if (paymentMethod === 'boleto') {
		html = `
				Olá ${userName}, seu pedido foi recebido.<br><br>
				Você logo receberá o link para imprimir seu boleto.<br>
				Você também pode ver o status do pedido clicando <a href="https://casamentoleoejeny.com.br/my-orders">nesse link</a>.
			`
	} else {
		html = `
				Olá ${userName}, seu pedido foi recebido e está sendo processado.<br><br>
				Assim que ele for atualizado você será notificado por e-mail.<br>
				Você também pode ver o status do pedido clicando <a href="https://casamentoleoejeny.com.br/my-orders">nesse link</a>.
			`
	}
	sendMail(userEmail, `Seu pedido ${orderId} foi recebido`, html)
}

module.exports.sendUpdatedOrderEmail = (url, currentStatus, paymentMethod, userEmail, orderId) => {
	let html
	if (url && currentStatus === 'waiting_payment' && paymentMethod === 'boleto') {
		html = `
				Olá, o link para o pagamento do seu boleto foi gerado.<br><br>
				Para imprimir o boleto, basta <a href="${url}">clicar aqui</a>.<br>
				Você também pode acompanhar o seu pedido diretamente pelo site.
			`
	} else {
		html = `
				Olá, seu pedido foi atualizado.<br><br>
				Você pode verificar o status atual do seu pedido clicando <a href="https://casamentoleoejeny.com.br/my-orders">nesse link</a>.
			`
	}
	sendMail(userEmail, `Seu pedido ${orderId} foi atualizado`, html)
}