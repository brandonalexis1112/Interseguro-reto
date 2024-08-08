const jwt = require('jsonwebtoken');

const secret = 'your_jwt_secret';

exports.generateToken = (userId) => {
  return jwt.sign({ sub: userId }, secret, { expiresIn: '1h' });
};

exports.verifyToken = (token, callback) => {
  jwt.verify(token, secret, callback);
};
