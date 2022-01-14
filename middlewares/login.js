const generateToken = require('./tokenGenerate');

module.exports = (_req, res) => {
  const token = generateToken();

  res.status(200).json({ token });
};
