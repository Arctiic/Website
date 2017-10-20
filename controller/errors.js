const path = require('path');
const log = require('logtools');

module.exports = (app, io) => {
	//404 Handling
	app.use((req, res, next) => {
		res.status(404).sendFile(path.resolve(`${__dirname}/../cli/errors/404.html`));
	});

	//500 Handling
	app.use((req, res, next) => {
		res.status(500).send('500: Internal Server Error');
	});
}
