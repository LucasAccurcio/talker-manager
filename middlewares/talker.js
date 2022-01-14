const fs = require('fs');

module.exports = (_req, res) => {
  const talker = fs.readFileSync('./talker.json', 'utf-8');

  if (!talker || talker.length === -1) {
    return res.status(200).json({ message: [] });
  }

  const talkerJson = JSON.parse(talker);

  res.status(200).json(talkerJson);
};
