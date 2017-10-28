module.exports = (req) => {
  if (req.headers) {
    if (is.ip(req.headers['x-client-ip'])) {
      return req.headers['x-client-ip'];
    }
    const xForwardedFor = getClientIpFromXForwardedFor(req.headers['x-forwarded-for']);

    if (is.ip(xForwardedFor)) {
      return xForwardedFor;
    }

    if (is.ip(req.headers['cf-connecting-ip'])) {
      return req.headers['cf-connecting-ip'];
    }

    if (is.ip(req.headers['true-client-ip'])) {
      return req.headers['true-client-ip'];
    }

    if (is.ip(req.headers['x-real-ip'])) {
      return req.headers['x-real-ip'];
    }

    if (is.ip(req.headers['x-cluster-client-ip'])) {
      return req.headers['x-cluster-client-ip'];
    }

    if (is.ip(req.headers['x-forwarded'])) {
      return req.headers['x-forwarded'];
    }

    if (is.ip(req.headers['forwarded-for'])) {
      return req.headers['forwarded-for'];
  	}

    if (is.ip(req.headers.forwarded)) {
      return req.headers.forwarded;
    }
  }

  if (is.existy(req.connection)) {
    if (is.ip(req.connection.remoteAddress)) {
      return req.connection.remoteAddress;
    }

    if (is.existy(req.connection.socket) && is.ip(req.connection.socket.remoteAddress)) {
      return req.connection.socket.remoteAddress;
    }
  }

  if (is.existy(req.socket) && is.ip(req.socket.remoteAddress)) {
    return req.socket.remoteAddress;
  }

  if (is.existy(req.info) && is.ip(req.info.remoteAddress)) {
    return req.info.remoteAddress;
  }
  return null;
}
