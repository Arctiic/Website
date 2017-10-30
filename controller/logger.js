const path = require('path');
const log = require('logtools');
const st = require('stringtables');
const morgan = require('morgan');

module.exports = (app, io, t) => {
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
				`${status}  `,
				"0 ms",
				`${ip}`,
				`${port}`
			)
		);

		console.log(line);
		next();
	});
}
