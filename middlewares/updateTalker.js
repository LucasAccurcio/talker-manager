const fs = require('fs');

module.exports = (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const talkers = JSON.parse(fs.readFileSync('./talker.json', 'utf-8'));
  const talkerIndex = talkers.findIndex((talker) => talker.id === parseInt(id, 10));
  const newObj = {
    name,
    age,
    id: parseInt(id, 10),
    talk,
  };
  talkers[talkerIndex] = { ...talkers[talkerIndex], name, age, talk };
  fs.writeFileSync('./talker.json', JSON.stringify(talkers));
  res.status(200).json(newObj);
};