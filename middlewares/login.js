const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = (req, res) => {
  const token = generateToken();

  res.status(200).json({ token });
};
