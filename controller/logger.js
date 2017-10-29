const path = require('path');
const log = require('logtools');
const st = require('stringtables');

module.exports = (app, io, t) => {
	app.use((req, res, next) => {
		let ip =
			req.headers['x-real-ip'] ||
			req.connection.remoteAddress;
		let port =
			req.headers['x-forwarded-port'] ||
			req.connection.remotePort;
		let log = t.newLine(
			new st.Line(
				`${req.method}`,
				`${req.originalUrl}`,
				`${res.statusCode}  `,
				" Latency ",
				`${ip}`,
				`${port}`
			)
		);
		console.log(log);
		next();
	});
}
