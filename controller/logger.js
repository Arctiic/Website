const path = require('path');
const log = require('logtools');
const st = require('stringtables');

module.exports = (app, io, t) => {
	app.use((req, res, next) => {
		let log = t.newLine(
			new st.Line(
				`${req.method}` || '',
				`${req.originalUrl}` || '',
				`${res.statusCode}  ` || '',
				" Latency ",
				`${req.ip}` || ''
			)
		);
		console.log(log);
		next();
	});
}
