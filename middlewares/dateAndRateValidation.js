// referencias função validação de data https://www.delftstack.com/pt/howto/javascript/javascript-validate-date/

function validaData(data) {
  const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

  if (dateRegex.test(data)) {
      return true;
  }
  return false;
}

module.exports = (req, res, next) => {
  const { talk: { watchedAt, rate } } = req.body;
  const DECIMAL = 10;

  const validation = validaData(watchedAt);

  if (!validation) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  if (parseInt(rate, DECIMAL) < 1 || parseInt(rate, DECIMAL) > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  next();
};