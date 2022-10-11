const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
<<<<<<< HEAD
  authMiddleware: function({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
=======
  signToken: function({ username, _id }) {
    const payload = { username, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  authMiddleware: function({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
  
    // separate "Bearer" from "<tokenvalue>"
>>>>>>> ec790a608e6a156d643ef7003fcb0283470a1f68
    if (req.headers.authorization) {
      token = token
        .split(' ')
        .pop()
        .trim();
    }
<<<<<<< HEAD

    if (!token) {
      return req;
    }

    try {
=======
  
    // if no token, return request object as is
    if (!token) {
      return req;
    }
  
    try {
      // decode and attach user data to request object
>>>>>>> ec790a608e6a156d643ef7003fcb0283470a1f68
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }
<<<<<<< HEAD

    return req;
  },
  signToken: function({ username, _id }) {
    const payload = { username, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
=======
  
    // return updated request object
    return req;
>>>>>>> ec790a608e6a156d643ef7003fcb0283470a1f68
  }
};