let e = console.error;
console.error = (err) => {
	if (err.toString().includes("Can't set headers")) return;
	e(err);
}

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ip = require('ip');
const log = require('logtools');
const path = require('path');
const config = require('./config.json');
const st = require('stringtables');
const uid = require('uid-gen');
const bodyParser = require('body-parser');
const Enmap = require("enmap");

const t = new st.Table(" Type ", " Path                               ", " Status ", " Latency ", " IP                 ", " Port ", "   Whitelist   ");
const idgen = new uid.IDGenerator();
const controllers = [
	'dedicated',
	'controller',
	'errors'
];

const blacklist = new Enmap({
	name: "blacklist",
	persistent: true
});

const SESSION_ID = idgen.simple(12);
let whitelistCode;
let blacklistCode;

app.use('/cli', express.static(`${__dirname}/cli/`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.enable('case sensitive routing');
app.enable('trust proxy');

app.all('*', (req, res, next) => {
	let method =
		req.method;
	let path =
		req.originalUrl;
	let status =
		res.statusCode;
	let ip =
		req.headers['x-real-ip'] ||
		req.connection.remoteAddress;
	let port =
		req.headers['x-forwarded-port'] ||
		req.connection.remotePort;
	let sd = '';

	if (!ip) return;

	if (checkIP(ip) == 'BLACKLIST' && !path.includes('/redeem/')) {
		res.end();
		sd = ' - X';
	}

	checkPath(path, ip);

	let line = t.newLine(
		new st.Line(
			`${method}`,
			`${path}`,
			`${status}`,
			"N/A",
			`${ip}`,
			`${port}`,
			`${checkIP(ip)}${sd}`
		)
	);

	console.log(line);
	next();
});

app.get('/redeem/:code', (req, res) => {
	let redeem = req.params.code;
	let ip =
		req.headers['x-real-ip'] ||
		req.connection.remoteAddress;

	if (redeem == whitelistCode) {
		blacklist.set(ip, 'WHITELIST');
		generateCode();

		res.send("Sucess!");
	} else if (redeem == blacklistCode && checkIP(ip) == 'BLACKLIST') {
		blacklist.set(ip, 'NONE');
		generateCode();

		res.send("Sucess!");
	} else if (redeem == "XXXXXXXX" && checkIP(ip) == 'WHITELIST') {
		blacklist.set(ip, 'NONE');

		res.send("Sucess!");
	} else {
		res.send("Failiure!");
	}
});

app.get('/grc/:sessionid', (req, res) => {
	let s;
	s += 'Whitelist: ' + whitelistCode + '\n';
	s += 'UnBlacklist:' + blacklistCode + '\n';

	if (req.params.sessionid == SESSION_ID) {
		res.send('Whitelist: ' + whitelistCode + ' ' + 'UnBlacklist:' + blacklistCode);
	} else {
		res.end();
	}
});

for (let i = 0; i < controllers.length; i++) {
	require(`./controller/${controllers[i]}.js`)(app, io);
}

http.listen(config.port, () => {
		generateCode();
    log.info(`Ready! http://${ip.address()}:${config.port}`);
		console.log(`This session password: ${SESSION_ID}`);
		console.log(t.newHeader());
})

checkPath = (path, ip) => {
	let keywords = ['MYADMIN', 'HNAP1', 'SCRIPTS', 'PHPUNIT'];
	if (checkIP() == 'NONE') {
		for (let i = 0; i < keywords.length; i++) {
			if (path.toUpperCase().includes(keywords[i])) {
				blacklist.set(ip, 'BLACKLIST');
			}
		}
	}
}

checkIP = (ip) => {
	if (ip.includes("10.") || ip.includes("172.16.") || ip.includes("192.168.")) return 'WHITELIST';

	ipbl = blacklist.get(ip);
	if (ipbl != 'NONE' && ipbl != 'BLACKLIST' && ipbl != 'WHITELIST') {
		blacklist.set(ip, 'NONE');
	}
	return blacklist.get(ip);
}

generateCode = () => {
	whitelistCode = idgen.id();
	blacklistCode = idgen.id();
}
