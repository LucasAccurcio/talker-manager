const fs = require('fs');

module.exports = (req, res) => {
  const { q } = req.query;

  const talkers = JSON.parse(fs.readFileSync('./talker.json', 'utf-8'));

  if (!q) return res.status(200).json(talkers);

  const searchTalkers = talkers.filter((t) => t.name.includes(q));

  return res.status(200).send(searchTalkers);
};