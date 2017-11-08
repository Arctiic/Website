const path = require('path');
const express = require('express');
const log = require('logtools');

module.exports = (app, io) => {
	//Main Homepage
	app.get('/', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/html/home.html`));
	});

	//Code Page
	app.get('/code', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/html/code.html`));
	});

	//IP Page
	app.get('/ip', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/html/ip.html`));
	});

	//URL Hub
	app.get('/hub', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/html/hub.html`));
	});

	//Apps
	app.get('/a/:app', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/apps/${req.params.app}/main.html`));
	});

	//Manual Testing
	app.get('/err/:id', (req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../cli/errors/${req.params.id || "404"}.html`));
	})



	//Portal
	app.get('/portal', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.send(new Buffer(`<!DOCTYPE html><html><head></head><body onload="window.location.href='/portal/1';"></body></html>`));
	});
	app.get('/portal/:page', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.send(new Buffer(`
			<!DOCTYPE html>
			<html>
				<head>
					<title>Spy's Website</title>

					<script>
						let page = parseInt(${req.params.page});
						let next = page + 1;
						let last = page - 1;

						console.log("Page: " + page + " Next: " + next + " Last: " + last);
					</script>
					<script src="/cli/assets/js/main.js"></script>
					<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>
					<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>

					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" />
					<link rel="stylesheet" href="/cli/assets/css/main.css" />
					<link rel="icon" href="/cli/assets/img/spy.png" />

				</head>
				<body onload="load()" class="portal">
					<iframe id="header" style="width: 100%; height: 60px; border: none;" src="/cli/html/header.html" scrolling="no" onload="setInterval(function () {
						document.getElementById('header').style.height = document.getElementById('header').contentWindow.document.body.scrollHeight + 'px';
					}, 25)"></iframe>
					<h4><br /></h4>
					<h1><strong>The Portal Keeper</strong></h1>
					<h3>- Webcomic -</h3>

					<!-- Trick to center embed -->
					<p style="text-align:center;">
						<embed src="${req.params.page}.jpeg" width="768" height="448">
					</p>

					<div class="btn-group mr-2" role="group" aria-label="First group">
				    <button type="button" class="btn btn-secondary" onclick="window.location.href = '/portal/' + last;">Back</button>
				    <button type="button" class="btn btn-secondary" onclick="page()">Enter Page #</button>
				    <button type="button" class="btn btn-secondary" onclick="window.location.href = '/portal/' + next;">Next</button>
			  	</div>
				</body>
			</html>
		`));
	});

}
