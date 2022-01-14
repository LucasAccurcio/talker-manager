module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  const MAX_LENGTH = 16;

  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  } 
  
  if (authorization.length !== MAX_LENGTH) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  return next();
};
