const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ip = require('ip');
const log = require('logtools');
const path = require('path');
const config = require('./config.json');
const morgan = require('morgan');

app.use('s', express.static(`${__dirname}/public/`))

require('./controller/logger.js')(app, io);
require('./controller/controller.js')(app, io);
require('./controller/errors.js')(app, io);

http.listen(config.port, () => {
    log.info(`Node Server is setup and it is listening on http://${ip.address()}:${config.port}`);
})
