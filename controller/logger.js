const path = require('path');
const log = require('logtools');
const st = require('stringtables');

module.exports = (app, io, t) => {
	app.use((req, res, next) => {
		let log = t.newLine(
			new Line(req.method || '', req.originalUrl || '', req.statusCode || '', res.statusCode || '', " Latency ", req.connection.remoteAddress || '')
		);
		console.log(log);
		next();
	});
}
