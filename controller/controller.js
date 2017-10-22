const path = require('path');
const express = require('express');
const log = require('logtools');
const react = require('react');
const reactDOM = require('react-dom');

module.exports = (app, io) => {
	//Main Homepage
	app.get('/', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/html/home.html`));
	});

	//Code Page
	app.get('/code', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/html/code.html`));
	});

	//URL Hub
	app.get('/hub', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/html/hub.html`));
	});

	//Manual Testing
	app.get('/err/:id', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/errors/${req.params.id || "404"}.html`));
	})
}
