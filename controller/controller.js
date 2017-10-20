const path = require('path');
const express = require('express');
const log = require('logtools');

module.exports = (app, io) => {
	//Main Homepage
	app.get('/', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/html/index.html`));
	});

	//Code Page
	app.get('/code', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/html/index.html`));
	});

	//URL Hub
	app.get('/hub', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/html/index.html`));
	});

	//Manual Error Handling
	app.get('/err/:id', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/errors/${req.params.id || "404"}.html`));
	})
}
