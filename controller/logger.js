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
		let status = headersSent(res)
    	? String(res.statusCode)
    	: undefined
		let log = t.newLine(
			new st.Line(
				`${req.method}`,
				`${req.originalUrl}`,
				`${status}  `,
				"0 ms",
				`${ip}`,
				`${port}`
			)
		);
		next();
	});
}

headersSent = (res) => {
  return typeof res.headersSent !== 'boolean'
    ? Boolean(res._header)
    : res.headersSent
}
