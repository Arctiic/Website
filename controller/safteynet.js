const path = require('path');
const express = require('express');
const log = require('logtools');

module.exports = (app, io) => {
	//PHPMyAdmin
	app.all('/phpMyAdmin/*', (req, res) => {
		res.send(`
      <h1>Error 418 - I'm a Teapot</h1>
      <h3>Goodbye, Bot (or Hacker xP)</h3>
    `);
    res.status(418).end();
	});

	//HNAP1
	app.all('/HNAP1', (req, res) => {
		res.send(`
      <h1>Error 418 - I'm a Teapot</h1>
      <h3>Goodbye, Bot (or Hacker xP)</h3>
    `);
    res.status(418).end();
	});
}
