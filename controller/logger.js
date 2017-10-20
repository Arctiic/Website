const path = require('path');
const morgan = require('morgan');
const log = require('logtools');

module.exports = (app, io) => {
	app.use(morgan((tokens, req, res) => {
		return [
	    tokens.method(req, res),
	    tokens.url(req, res),
	    tokens.status(req, res),
	    tokens.res(req, res, 'content-length'), '-',
	    tokens['response-time'](req, res), 'ms'
	  ].join(' ')
	}));
}
