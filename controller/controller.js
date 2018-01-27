const path = require('path');
const express = require('express');
const log = require('logtools');

module.exports = (app, io, t) => {

	//Main Homepage
	app.get('/', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/html/home.html`));
	});

	//Code Page
	app.get('/code', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/html/code.html`));
	});

	//Get my IP Page
	app.get('/ip', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/html/ip.html`));
	});

	//URL Hub
	app.get('/hub', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/html/hub.html`));
	});

	//Tools page
	app.get('/t', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/html/tools.html`));
	});

	//Apps access
	app.get('/a/:app', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/apps/${req.params.app}/main.html`));
	});

	//Tools access
	app.get('/t/:tool', (req, res) => {
		if (req.params.tool != 'encoder') {
			res.sendFile(path.resolve(`${__dirname}/../cli/tools/${req.params.tool}/main.html`));
		}
	});

	//Manual Testing
	app.get('/err/:id', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/errors/${req.params.id || "404"}.html`));
	});
}
