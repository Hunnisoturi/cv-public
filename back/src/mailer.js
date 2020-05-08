const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'aapocvmailer@gmail.com',
    pass: '36Bg&8Q#%oaC',
  }
});

const getMessage = (name, company, email) => {
  const message = {
    from: 'aapocvmailer@gmail.com',
    to: 'aapo.attila@windowslive.com',
    subject: 'CV - Uusi yhteydenotto',
    html: `<p>Uusi yhteydenotto!<br/>
          <br/>
          Sinulle on uusi yhteydenottopyyntö:<br/>
          Nimi: <b>${name}</b><br/>
          Yritys: <b>${company}</b><br/>
          Sähköpostiosoite: <b>${email}</b><br/>
          <br/>
          <b>MUISTA OTTAA YHTEYTTÄ<b/>`
  };
  return message;
}

module.exports = {
  transporter,
  getMessage,
};

