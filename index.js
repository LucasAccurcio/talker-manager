const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const talker = require('./middlewares/talker');
const talkerId = require('./middlewares/talkerId');
const login = require('./middlewares/login');
const emailValidation = require('./middlewares/emailValidation');
const passwordValidation = require('./middlewares/passwordValidation');
const createTalker = require('./middlewares/createTalker');
const authMiddleware = require('./middlewares/authMiddleware');
const nameValidation = require('./middlewares/nameValidation');
const ageValidation = require('./middlewares/ageValidation');
const talkValidation = require('./middlewares/talkValidation');
const dateAndRateValidation = require('./middlewares/dateAndRateValidation');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', talker);

app.get('/talker/:id', talkerId);

app.post('/login',
emailValidation,
passwordValidation,
login);

app.post('/talker', 
  authMiddleware,
  nameValidation,
  ageValidation,
  talkValidation,
  dateAndRateValidation,
  createTalker);

app.listen(PORT, () => {
  console.log('Online');
});
