module.exports = (req, res, next) => {
  const { age } = req.body;
  const MIN_AGE = 18;
  const DECIMAL = 10;

  if ([age].includes(undefined)) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }

  if (parseInt(age, DECIMAL) < MIN_AGE) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }

  next();
};