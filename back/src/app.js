const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
const port = 3002;

const sendRouter = require('./routes/send');

app.use(cors({
  origin: true,
  credentials: true,
  optionsSuccessStatus: 200,
}));

app.use(bodyParser.json());

dotenv.config();

app.disable('x-powered-by');

app.use('/send', sendRouter);

app.get('/', (req, res) => res.send('Moro :D'));

app.get('*', (_req, res) => res.status(404).end());

app.listen(port, () => console.log(`Backend listening on port ${port}`));
