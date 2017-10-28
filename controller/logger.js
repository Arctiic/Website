const path = require('path');
const log = require('logtools');
const st = require('stringtables');
const ip = require('ipware')().get_ip();

module.exports = (app, io, t) => {
	app.use((req, res, next) => {
		let log = t.newLine(
			new st.Line(
				`${req.method}` || '',
				`${req.originalUrl}` || '',
				`${res.statusCode}  ` || '',
				" Latency ",
				ip(req) || ''
			)
		);
		console.log(log);
		next();
	});
}
