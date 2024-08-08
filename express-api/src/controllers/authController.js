const jwtService = require('../services/jwtService');
const users = [
  { id: 1, username: 'root', password: '1234' }
];

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = jwtService.generateToken(user.id);
    res.json({ token });
  } else {
    res.status(400).send('Username or password is incorrect');
  }
};
