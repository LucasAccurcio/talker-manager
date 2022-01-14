const fs = require('fs');

module.exports = (req, res) => {
  const { id } = req.params;
  const talkers = JSON.parse(fs.readFileSync('./talker.json', 'utf-8'));
  const talker = talkers.find((speaker) => speaker.id === parseInt(id, 10));

  if (!talker) {
    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  res.status(200).json(talker);
};
