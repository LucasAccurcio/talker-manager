const fs = require('fs');

module.exports = (req, res) => {
  const { name, age, talk } = req.body;
  const { watchedAt, rate } = talk;

  const talkers = JSON.parse(fs.readFileSync('./talker.json', 'utf-8'));

  const newObj = {
    name,
    age,
    id: talkers.length + 1,
    talk: {
      watchedAt,
      rate,
    },
  };

  talkers.push(newObj);
  fs.writeFileSync('./talker.json', JSON.stringify(talkers));
  res.status(201).json(newObj);
};