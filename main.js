const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ip = require('ip');
const log = require('logtools');
const path = require('path');
const config = require('./config.json');
const st = require('stringtables');

const t = new st.Table(" Type ", " Path                               ", " Status ", " Latency ", " IP                 ", " Port ");
const controllers = [
	'logger',
	'controller',
	'errors',
	'safteynet'
];

app.use('/cli', express.static(`${__dirname}/cli/`));

app.enable('case sensitive routing');
app.enable('trust proxy');

for (let i = 0; i < controllers.length; i++) {
	require(`./controller/${controllers[i]}.js`)(app, io, t);
}

http.listen(config.port, () => {
    log.info(`Ready! http://${ip.address()}:${config.port}`);
		console.log(t.newHeader());
})
