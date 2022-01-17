const fs = require('fs');

module.exports = (req, res) => {
  const { id } = req.params;

  const talkers = JSON.parse(fs.readFileSync('./talker.json', 'utf-8'));
  const talkerIndex = talkers.findIndex((talker) => talker.id === parseInt(id, 10));

  talkers.splice(talkerIndex, 1);

  fs.writeFileSync('./talker.json', JSON.stringify(talkers));

  res.status(204).end();
};