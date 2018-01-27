const path = require('path');
const log = require('logtools');
const st = require('stringtables');
const int = require('../modules/strint');

const _int = {
	floor: (n) => {
		let r = n;
		while (true) {
			if (!r.includes('.')) {
				break;
			}
			r = r.slice(0, -1);
		}
		return n;
	},
	mod: (n, m) => {
		if (int.mul(int.div(n, m), m) != n) {
			return "1";
		}
		return "0";
	},
	exp: (n, exp) => {
		let r = n;
		for (let i = 0; i < exp; i++) {
			r = int.mul(r, n);
		}
		return r;
	}
};

function getCharFromId (id) {
	switch (id) {
		case '00':
			return '\uf8ff';
			break;
		case '01':
			return 'a';
			break;
		case '02':
			return 'b';
			break;
		case '03':
			return 'c';
			break;
		case '04':
			return 'd';
			break;
		case '05':
			return 'e';
			break;
		case '06':
			return 'f';
			break;
		case '07':
			return 'g';
			break;
		case '08':
			return 'h';
			break;
		case '09':
			return 'i';
			break;
		case '10':
			return 'j';
			break;
		case '11':
			return 'k';
			break;
		case '12':
			return 'l';
			break;
		case '13':
			return 'm';
			break;
		case '14':
			return 'n';
			break;
		case '15':
			return 'o';
			break;
		case '16':
			return 'p';
			break;
		case '17':
			return 'q';
			break;
		case '18':
			return 'r';
			break;
		case '19':
			return 's';
			break;
		case '20':
			return 't';
			break;
		case '21':
			return 'u';
			break;
		case '22':
			return 'v';
			break;
		case '23':
			return 'w';
			break;
		case '24':
			return 'x';
			break;
		case '25':
			return 'y';
			break;
		case '26':
			return 'z';
			break;
		case '3001':
			return 'A';
			break;
		case '3002':
			return 'B';
			break;
		case '3003':
			return 'C';
			break;
		case '3004':
			return 'D';
			break;
		case '3005':
			return 'E';
			break;
		case '3006':
			return 'F';
			break;
		case '3007':
			return 'G';
			break;
		case '3008':
			return 'H';
			break;
		case '3009':
			return 'I';
			break;
		case '3010':
			return 'J';
			break;
		case '3011':
			return 'K';
			break;
		case '3012':
			return 'L';
			break;
		case '3013':
			return 'M';
			break;
		case '3014':
			return 'N';
			break;
		case '3015':
			return 'O';
			break;
		case '3016':
			return 'P';
			break;
		case '3017':
			return 'Q';
			break;
		case '3018':
			return 'R';
			break;
		case '3019':
			return 'S';
			break;
		case '3020':
			return 'T';
			break;
		case '3021':
			return 'U';
			break;
		case '3022':
			return 'V';
			break;
		case '3023':
			return 'W';
			break;
		case '3024':
			return 'X';
			break;
		case '3025':
			return 'Y';
			break;
		case '3026':
			return 'Z';
			break;
		case '27':
			return ' ';
			break;
		case '28':
			return '$$TAB';
			break;
		case '29':
			return '$$ENTER';
			break;
		case '30':
			return '$$SHIFT';
			break;
		case '31':
			return '1';
			break;
		case '32':
			return '2';
			break;
		case '33':
			return '3';
			break;
		case '34':
			return '4';
			break;
		case '35':
			return '5';
			break;
		case '36':
			return '6';
			break;
		case '37':
			return '7';
			break;
		case '38':
			return '8';
			break;
		case '39':
			return '9';
			break;
		case '40':
			return '0';
			break;
		case '41':
			return '!';
			break;
		case '42':
			return '@';
			break;
		case '43':
			return '#';
			break;
		case '44':
			return '$';
			break;
		case '45':
			return '%';
			break;
		case '46':
			return '^';
			break;
		case '47':
			return '&';
			break;
		case '48':
			return '*';
			break;
		case '49':
			return '(';
			break;
		case '50':
			return ')';
			break;
		case '51':
			return '.';
			break;
		case '52':
			return ',';
			break;
		case '53':
			return '?';
			break;
		case '54':
			return ':';
			break;
		case '55':
			return ';';
			break;
		case '56':
			return '\'';
			break;
		case '57':
			return '"';
			break;
		case '58':
			return '+';
			break;
		case '59':
			return '=';
			break;
		case '60':
			return '-';
			break;
		case '61':
			return '_';
			break;
		case '62':
			return '[';
			break;
		case '63':
			return ']';
			break;
		case '64':
			return '<';
			break;
		case '65':
			return '>';
			break;
		case '66':
			return '{';
			break;
		case '67':
			return '}';
			break;
		case '68':
			return '/';
			break;
		case '69':
			return '\\';
			break;
		case '70':
			return '|';
			break;
	};
}
function getIdFromChar (char) {
	switch (char) {
		case '\uf8ff':
			return '00';
			break;
		case 'a':
			return '01';
			break;
		case 'b':
			return '02';
			break;
		case 'c':
			return '03';
			break;
		case 'd':
			return '04';
			break;
		case 'e':
			return '05';
			break;
		case 'f':
			return '06';
			break;
		case 'g':
			return '07';
			break;
		case 'h':
			return '08';
			break;
		case 'i':
			return '09';
			break;
		case 'j':
			return '10';
			break;
		case 'k':
			return '11';
			break;
		case 'l':
			return '12';
			break;
		case 'm':
			return '13';
			break;
		case 'n':
			return '14';
			break;
		case 'o':
			return '15';
			break;
		case 'p':
			return '16';
			break;
		case 'q':
			return '17';
			break;
		case 'r':
			return '18';
			break;
		case 's':
			return '19';
			break;
		case 't':
			return '20';
			break;
		case 'u':
			return '21';
			break;
		case 'v':
			return '22';
			break;
		case 'w':
			return '23';
			break;
		case 'x':
			return '24';
			break;
		case 'y':
			return '25';
			break;
		case 'z':
			return '26';
			break;
		case 'A':
			return '3001';
			break;
		case 'B':
			return '3002';
			break;
		case 'C':
			return '3003';
			break;
		case 'D':
			return '3004';
			break;
		case 'E':
			return '3005';
			break;
		case 'F':
			return '3006';
			break;
		case 'G':
			return '3007';
			break;
		case 'H':
			return '3008';
			break;
		case 'I':
			return '3009';
			break;
		case 'J':
			return '3010';
			break;
		case 'K':
			return '3011';
			break;
		case 'L':
			return '3012';
			break;
		case 'M':
			return '3013';
			break;
		case 'N':
			return '3014';
			break;
		case 'O':
			return '3015';
			break;
		case 'P':
			return '3016';
			break;
		case 'Q':
			return '3017';
			break;
		case 'R':
			return '3018';
			break;
		case 'S':
			return '3019';
			break;
		case 'T':
			return '3020';
			break;
		case 'U':
			return '3021';
			break;
		case 'V':
			return '3022';
			break;
		case 'W':
			return '3023';
			break;
		case 'X':
			return '3024';
			break;
		case 'Y':
			return '3025';
			break;
		case 'Z':
			return '3026';
			break;
		case ' ':
			return '27';
			break;
		case '$$TAB':
			return '28';
			break;
		case '$$ENTER':
			return '29';
			break;
		case '$$SHIFT':
			return '30';
			break;
		case '1':
			return '31';
			break;
		case '2':
			return '32';
			break;
		case '3':
			return '33';
			break;
		case '4':
			return '34';
			break;
		case '5':
			return '35';
			break;
		case '6':
			return '36';
			break;
		case '7':
			return '37';
			break;
		case '8':
			return '38';
			break;
		case '9':
			return '39';
			break;
		case '0':
			return '40';
			break;
		case '!':
			return '41';
			break;
		case '@':
			return '42';
			break;
		case '#':
			return '43';
			break;
		case '$':
			return '44';
			break;
		case '%':
			return '45';
			break;
		case '^':
			return '46';
			break;
		case '&':
			return '47';
			break;
		case '*':
			return '48';
			break;
		case '(':
			return '49';
			break;
		case ')':
			return '50';
			break;
		case '.':
			return '51';
			break;
		case ',':
			return '52';
			break;
		case '?':
			return '53';
			break;
		case ':':
			return '54';
			break;
		case ';':
			return '55';
			break;
		case '\'':
			return '56';
			break;
		case '"':
			return '57';
			break;
		case '+':
			return '58';
			break;
		case '=':
			return '59';
			break;
		case '-':
			return '60';
			break;
		case '_':
			return '61';
			break;
		case '[':
			return '62';
			break;
		case ']':
			return '63';
			break;
		case '<':
			return '64';
			break;
		case '>':
			return '65';
			break;
		case '{':
			return '66';
			break;
		case '}':
			return '67';
			break;
		case '/':
			return '68';
			break;
		case '\\':
			return '69';
			break;
		case '|':
			return '70';
			break;
	};
}

class Encoder {

	encode(message, key) {
		let edm = this.method;
		let r = "1";

		for (let i = 0; i < message.length; i++) {
			let char = getIdFromChar(message.charAt(i));
			if (char != null) {
				r += char;
			}
		}

		r = int.mul(r, key);
		r = this._complicate(r);

		if (edm == 1) {
			r = this._numToBin(r);
			r = this._buffer(r);
			r = this._binToText(r);
		}

		if (edm == 2) {
			r = this._numToHex(r);
		}

		return r;
	}

	decode(message, key) {
		let edm = this.method;
		let r = "";
		let m = message;

		if (edm == 1) {
			m = this._textToBin(m);
			m = this._unbuffer(m);
			m = this._binToNum(m);
		}

		if (edm == 2) {
			m = this._hexToNum(m);
		}

		m = this._decomplicate(m);
		m = int.div(m, key);
		m = m.substring(1);

		for (let i = 0; i < m.length; i += 2) {
			let char = getCharFromId(m.charAt(i) + m.charAt(i + 1));
			if (char != null) {
				r += char;
			}
		}

		return r;
	}

	setMethod (method) {
		let m;
		switch (method) {
			case 'BIN':
				m = 1;
				break;
			case 'HEX':
				m = 2;
				break;
		}

		this.method = m;
	}

	_complicate(n) {
		let r = n;
		let firstTwo = r.substring(0, 2);

		r = int.mul(r, firstTwo);
		r = firstTwo + r;

		let lastTwo = r.slice(-2);

		r = int.mul(r, lastTwo);
		r += lastTwo;

		return r;
	}

	_decomplicate(n) {
		let
			r = n,
			lastTwo = r.slice(-2),
			split = r.slice(0, -2);

		r = int.div(split, lastTwo);

		let firstTwo = '' + r.substring(0, 2);
		split = '' + r.slice(2);

		r = int.div(split, firstTwo);

		return r;
	}

	_buffer(n) {
		let r = n;
		r += "1"
		while (true) {
			if (_int.mod("" + r.length, "8") == "0") {
				return r;
			}
			r += "0";
		}
	}

	_unbuffer(n) {
		let r = n;
		while (true) {
			if (r.slice(-1) == "1") {
				r = r.slice(0, -1);
				return r;
			}
			r = r.slice(0, -1);
		}
	}

	_numToBin (n) {
		// NUM TO BIN HERE
	}

	_binToNum (b) {
		// BIN TO NUM HERE
	}

	_numToHex (n) {
		return parseInt(n).toString(16).toUpperCase();
	}

	_hexToNum (h) {
		return parseInt(h, 16);
	}

	_textToBin (t) {
		let r = '';
		for (let i = 0; i < t.length; i++) {
			let tmp = t.charCodeAt(i).toString(2);
			for (let j = 0;
				(tmp.length % 8) != 0; j++) {
				tmp = "0" + tmp;
			}
			r += tmp;
		}
		return r;
	}

	_binToText (b) {
		let r = '';
		for (let i = 0; i < b.length; i += 8) {
			r += String.fromCharCode(parseInt(b.substring(i, i + 8), 2));
		}
		return r;
	}
}

let resultArr = [];

module.exports = (app, io, t) => {
	// Dedicated JS
	{
		app.post('/http/encoder', (req, res) => {
			let encoder = new Encoder();
			let data = req.body;
			let method = data.encodeMethod;
			let edMethod = data.edMethod;
			let message = data.message;
			let key = data.key;

			let r;

			try {
				encoder.setMethod(edMethod);

				if (method == "ENCODE") r = encoder.encode(message, key);
				if (method == "DECODE") r = encoder.decode(message, key);
			} catch (e) {}

			resultArr.push(r);

			res.send(JSON.stringify({
				id: resultArr.length - 1
			}));
		});

		app.get('/t/encoder/:id', (req, res) => {
			let data = resultArr[req.params.id];
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

						<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" />
						<link rel="stylesheet" type="text/css" href="/cli/assets/css/main.css" />
						<link rel="icon" href="/cli/assets/img/spy.png" />

						<style>
							button {
								background-color: #4CAF50; /* Green */
								border: none;
								color: white;
								padding: 15px 32px;
								text-align: center;
								text-decoration: none;
								display: inline-block;
								font-size: 16px;
							}
						</style>
					</head>
					<body>
						<iframe id="header" style="width: 100%; height: 60px; border: none;" src="/cli/html/header.html" scrolling="no" onload="setInterval(function () {
							document.getElementById('header').style.height = document.getElementById('header').contentWindow.document.body.scrollHeight + 'px';
						}, 25)"></iframe>
						<h1>Spy's Encoder/Decoder</h1>
						<h2>Result:</h2>
						<br>
						<p>${data}<p>
						<br>
						<button onclick="window.location.href='/t/encoder'>Again!</button>
					</body>
				</html>
			`));
		});

		app.get('/t/encoder', (req, res) => {

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

						<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" />
						<link rel="stylesheet" type="text/css" href="/cli/assets/css/main.css" />
						<link rel="icon" href="/cli/assets/img/spy.png" />

						<style>
						  html {
							  text-align: center;
							  font-family: sans-serif;
						  }

		 				  body {
			 				  padding-bottom: 25px;
						  }

	 					  input {
							  border: solid;
		 					  border-color: gray;
							  border-radius: 5px;
							  border-width: 1px;
						  }

						  textarea {
							  border: solid;
							  font-size: 20px;
							  border-color: gray;
							  border-radius: 5px;
							  border-width: 1px;
							  resize: none;
						  }

						  #message {
							  width: 75%;
							  height: 250px;
						  }

						  #pass {
							  width: 25%;
							  height: 35px;
						  }

						  #submit {
							  width: 100px;
						  }

							button {
								background-color: #4CAF50;
								border: none;
								color: white;
								text-align: center;
								text-decoration: none;
								display: inline-block;
								height: 30px;
							}
					 </style>

						<script>
							var xhr;
							function encode (method, msg, key, edm) {
								xhr = new XMLHttpRequest();
								xhr.open('POST', '/http/encoder', true);
								xhr.setRequestHeader("Content-Type", "application/json");
								xhr.send(JSON.stringify({
									encodeMethod: method,
									edMethod: edm,
									message: msg,
									key:  key,
								}));
								xhr.addEventListener("readystatechange", processRequest, false);
							}

							function processRequest(e) {
							  if (xhr.readyState == 4 && xhr.status == 200) {
							    window.location.href='/t/encoder/' + JSON.parse(xhr.responseText).id;
							  }
							}
						</script>

					</head>
					<body onload="load();">
						<iframe id="header" style="width: 100%; height: 60px; border: none;" src="/cli/html/header.html" scrolling="no" onload="setInterval(function () {
							document.getElementById('header').style.height = document.getElementById('header').contentWindow.document.body.scrollHeight + 'px';
						}, 25)"></iframe>
						<h1>Spy's Encoder/Decoder</h1>
						<br><br>
				    <h2>Token</h2>
				    <textarea id="pass" name="p" type="password" maxlength="4"></textarea>
				    <br><br>
				    <h2>Message</h2>
				    <textarea id="message" name="m" type="text"></textarea>
						<br><br>
				    <h2>Method</h2>
						<p>Write either HEX or BIN. HEX is recommended</p>
				    <textarea id="edm" name="edm" type="text" rows="1" style="height: 35px;"></textarea>
				    <br><br>
				    <button id="submit" onclick="encode('ENCODE', document.getElementById('message').value, document.getElementById('pass').value, document.getElementById('edm').value)">Encode</button>
				    <button id="submit" onclick="encode('DECODE', document.getElementById('message').value, document.getElementById('pass').value, document.getElementById('edm').value)">Decode</button>
					</body>
				</html>
			`));
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
