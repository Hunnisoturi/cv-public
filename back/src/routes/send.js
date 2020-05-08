const express = require('express');
const { transporter, getMessage } = require('../mailer');

const router = express.Router();

router.post('/', ({ body: { name, company, email, message } }, res) => {
  res.sendStatus(200);
  transporter.sendMail(getMessage(name, company, email, message));
});

module.exports = router;