const path = require('path');
const log = require('logtools');
const st = require('stringtables');
const morgan = require('morgan');

module.exports = (app, io, t) => {
	app.all('*', (req, res, next) => {
		let ip =
			req.headers['x-real-ip'] ||
			req.connection.remoteAddress;
		let port =
			req.headers['x-forwarded-port'] ||
			req.connection.remotePort;
		morgan(function (tokens, req, res) {
			return new st.Line (
				`${tokens.method(req, res)}`,
				`${tokens.url(req, res)}`,
				`${tokens.status(req, res)}`,
				`${tokens['response-time'](req, res)}`,
				`${ip}`,
				`${port}`
			)
		});
		next();
	});
}
