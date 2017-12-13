const path = require('path');
const log = require('logtools');
const st = require('stringtables');

module.exports = (app, io, t) => {
	// Dedicated JS
	{
		app.get('/t/encoder', (req, res) => {
			res.sendFile(path.resolve(`${__dirname}/../cli/tools/encoder/main.html`));
		});
	}

	// Dedicated html
	{
		//Portal
		app.get('/portal', (req, res) => {
			res.set('Content-Type', 'text/html');
			res.send(new Buffer(`<!DOCTYPE html><html><head></head><body onload="window.location.href='/portal/1';"></body></html>`));
		});
		app.get('/portal/:page', (req, res) => {
			let pageNum = parseInt(req.params.page);
			let json = {
				"title": "Uh-oh...",
				"text": "Hey There! This page doesn't exist yet! Check for updates when we do upload!"
			};
			let jsonNext = {
			 	"title": "Unfinished"
			}
			try {
				json = require(`../cli/assets/portal/${pageNum}.json`);
				jsonNext = require(`../cli/assets/portal/${pageNum + 1}.json`);
			} catch (e) {};
			let title = json.title;
			let text = json.text;
			let command = jsonNext.title;
			res.set('Content-Type', 'text/html');
			res.send(new Buffer(`
				<!DOCTYPE html>
				<html>
					<head>
						<title>Spy's Website</title>
						<script src="/cli/assets/js/main.js"></script>
						<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
						<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>
						<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>

						<script>
						let fs = false;
						function typeWriter(text, n) {
							if (n < text.length) {
								$('#command').html(text.substring(0, n+1) + '▌');
								n++;
								setTimeout(function() {
									typeWriter(text, n)
								}, 200);
							} else {
								blink();
							}
						}

						function start () {
							let box = false;
							let text = $('#command').data('text');

							typeWriter(text, 0);
						}

						function blink () {
							let text = $('#command').data('text');
							setTimeout(() => {
								$('#command').html(text);
								setTimeout(() => {
									$('#command').html(text + '▌');
									blink();
								}, 1000);
							}, 1000);
						}
						</script>

						<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" />
						<link rel="stylesheet" href="/cli/assets/css/main.css" />
						<link rel="icon" href="/cli/assets/img/spy.png" />

					</head>
					<body onload="load(); start();
						$('#app-bar').css('width', '500px');
						$('#homebrew').css('width', '500px');
						$('#app-bar').css('height', '20px');
						$('#homebrew').css('height', '150px');
					" class="portal">
						<iframe id="header" style="width: 100%; height: 60px; border: none;" src="/cli/html/header.html" scrolling="no" onload="setInterval(function () {
							document.getElementById('header').style.height = document.getElementById('header').contentWindow.document.body.scrollHeight + 'px';
						}, 25)"></iframe>
						<div id="info">
							<h4><br /></h4>

							<h2>${title}</h2>

							<!-- Trick to center embed -->
							<p style="text-align:center;">
								<embed src="/cli/assets/portal/img/${req.params.page}.jpeg" width="768" height="448">
							</p>

							<p>${text}</p>
						</div>
						<div id="terminal">
							<div class="app-bar" id="app-bar">
								<div  id="close"style="background-color: #ff0000;" class="icon" onclick="window.location.href='about:blank'"></div>
								<div id="minimize" style="background-color: #fdbe42;" class="icon" onclick="$('#terminal').hide();"></div>
								<div id="fullscreen" style="background-color: #35c649;" class="icon" onclick="
									if (fs) {
										$('#app-bar').css('width', '500px');
										$('#homebrew').css('width', '500px');
										$('#homebrew').css('height', '150px');
										$('#info').show();
									} else {
										$('#app-bar').css('width', $(window).width() + 'px');
										$('#homebrew').css('width', $(window).width() + 'px');
										$('#homebrew').css('height', $(window).height() + 'px');
										$('#info').hide();
									}
									fs = !fs;
								"></div>
								<span class="title" style="text-align: center; font-size: 15px; margin: 0px 2px">Terminal - $bash</span>
							</div>
							<div class="homebrew" id="homebrew">
							<h1 style="font-size:30px; color:#000000;">.</h1>
								<a href="/portal/${pageNum + 1}">
									<span id="command" style="text-align:center; top:50px;" onclick="hide(); return false" data-text=">${command}">></span>
								</a>
							</div>
						</div>
					</body>
				</html>
			`));
		});
	}
}
