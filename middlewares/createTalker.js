const fs = require('fs');

module.exports = (req, res) => {
  const { name, age, watchedAt, rate } = req.body;
  const { authorization } = req.headers;
  console.log(authorization);
  const talkers = JSON.parse(fs.readFileSync('./talker.json', 'utf-8'));

  const newObj = {
    name,
    age,
    id: talkers.length.toString(),
    talk: {
      watchedAt,
      rate,
    },
  };

  talkers.push(newObj);
  fs.writeFileSync('./talker.json', JSON.stringify(talkers));
  res.status(201).json(newObj);
};