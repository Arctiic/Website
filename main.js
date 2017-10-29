const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ip = require('ip');
const log = require('logtools');
const path = require('path');
const config = require('./config.json');
const st = require('stringtables');

const t = new st.Table(" Type ", " Path               ", " Res ", " Latency ", " IP                 ");

app.use('/cli', express.static(`${__dirname}/cli/`));

app.enable('case sensitive routing');
app.enable('trust proxy');

require('./controller/logger.js')(app, io, t);
require('./controller/controller.js')(app, io);
require('./controller/errors.js')(app, io);

http.listen(config.port, () => {
    log.info(`Node Server is setup and it is listening on http://${ip.address()}:${config.port}`);
		console.log(t.newHeader());
})
