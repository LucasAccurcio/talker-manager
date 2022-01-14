module.exports = (req, res, next) => {
  const { age } = req.body;
  const MIN_AGE = 18;

  if ([age].includes(undefined)) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }

  if (age.length < MIN_AGE) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }

  next();
};