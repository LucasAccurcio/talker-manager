// referencias função validação de data https://www.delftstack.com/pt/howto/javascript/javascript-validate-date/

function validaData(data) {
  const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;

  if (dateRegex.test(data)) {
      return true;
  }
  return false;
}

module.exports = (req, res, next) => {
  const { watchedAt, rate } = req.body;

  if ([watchedAt, rate].includes(undefined)) {
    return res.status(400)
    .json({ message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }

  if (!validaData(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  if (!(parseInt(rate, 10) < 1 && parseInt(rate, 10) > 5)) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  next();
};