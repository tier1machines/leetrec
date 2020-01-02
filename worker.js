const amqp = require('amqplib/callback_api');
const CONN_URL = require('./config/urls.js');

amqp.connect(CONN_URL, (err, conn) => {
  conn.createChannel( (err, ch) => {
	ch.consume('virtualgroove-app', msg => {
	  console.log('Message: ', msg.content.toString());
	}, { noAck: true });
  });
});

