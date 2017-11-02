const path = require('path');
const express = require('express');
const log = require('logtools');

module.exports = (app, io) => {
	//PHPMyAdmin
	app.get('/phpMyAdmin/*', (req, res) => {
		res.send(`
      <h1></h1>
      <h3>Goodbye, Bot (or Hacker xP)</h3>
    `);
    res.status(418).end();
	});
}
