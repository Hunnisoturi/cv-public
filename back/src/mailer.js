const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER_USERNAME,
    pass: process.env.SMTP_USER_PASSWORD,
  }
});

const getMessage = (name, company, email, msg) => {
  const message = {
    from: process.env.SMTP_USER_USERNAME,
    to: process.env.RECEPIENT_EMAIL,
    subject: 'CV - Uusi yhteydenotto',
    html: `<p>Uusi yhteydenotto!<br/>
          <br/>
          Sinulle on uusi yhteydenottopyyntö:<br/>
          Nimi: <b>${name}</b><br/>
          Yritys: <b>${company}</b><br/>
          Sähköpostiosoite: <b>${email}</b><br/>
          Viesti: <b>${msg}</b><br/>
          <br/>
          <b>MUISTA OTTAA YHTEYTTÄ<b/>`
  };
  return message;
}

module.exports = {
  transporter,
  getMessage,
};

