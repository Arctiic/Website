const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ip = require('ip');
const log = require('logtools');
const path = require('path');
const config = require('./config.json');
const st = require('stringtables');

const t = new st.Table(" Type ", " Path                               ", " Status ", " Latency ", " IP                 ", " Port ");
const controllers = [
	'dedicated',
	'controller',
	'errors'
];

app.use('/cli', express.static(`${__dirname}/cli/`));

app.enable('case sensitive routing');
app.enable('trust proxy');

app.all('*', (req, res, next) => {
	let method =
		req.method;
	let path =
		req.originalUrl;
	let status =
		res.statusCode;
	let ip =
		req.headers['x-real-ip'] ||
		req.connection.remoteAddress;
	let port =
		req.headers['x-forwarded-port'] ||
		req.connection.remotePort;

	let line = t.newLine(
		new st.Line(
			`${method}`,
			`${path}`,
			`${status}`,
			"0 ms",
			`${ip}`,
			`${port}`
		)
	);

	console.log(line);
	next();
});

for (let i = 0; i < controllers.length; i++) {
	require(`./controller/${controllers[i]}.js`)(app, io, t);
}

http.listen(config.port, () => {
    log.info(`Ready! http://${ip.address()}:${config.port}`);
		console.log(t.newHeader());
})
