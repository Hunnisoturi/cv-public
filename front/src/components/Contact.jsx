import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Box } from '@material-ui/core';
import API from '../services/api';

import linkedin from '../assets/LinkedIn.png';

const styles = makeStyles({
  container: {
    width: '100%',
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px',
  },
  contact: {
    marginTop: '100px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    marginTop: '30px',
  },
  item: {
    marginTop: '30px',
    width: '50%',
  },
  field: {
    width: '100%',
  },
  label: {
    marginBottom: '10px',
  },
  send: {
    marginTop: '60px',
  },
  icons: {
    marginTop: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '50px',
  },
  icon: {
    height: '30px',
    width: '36px',
    marginLeft: '32px',
    marginRight: '32px',
  },
});

const icons = [
  1,
  2,
  3,
];

const Contact = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChanged = event => setName(event.target.value);
  const handleCompanyChanged = event => setCompany(event.target.value);
  const handleEmailChanged = event => setEmail(event.target.value);

  const sendMail = () => {
    API.send({ name, company, email })
      .then()
      .catch(error => {
        console.error(error);
      });
  };

  // const fieldsFilled = () => name && company && email;

  const classes = styles();

  return (
    <div className={classes.container}>
      <Typography variant="h3" className={classes.contact}>
        <Trans i18nKey="contact" />
      </Typography>
      <div className={classes.form}>
        <span className={classes.item}>
          <Typography variant="h5" className={classes.label}>
            <Trans i18nKey="formName" />
          </Typography>
          <TextField
            required
            id="name"
            variant="outlined"
            color="primary"
            className={classes.field}
            value={name}
            onChange={handleNameChanged}
          />
        </span>
        <span className={classes.item}>
          <Typography variant="h5" className={classes.label}>
            <Trans i18nKey="formCompany" />
          </Typography>
          <TextField
            required
            id="company"
            variant="outlined"
            color="primary"
            className={classes.field}
            value={company}
            onChange={handleCompanyChanged}
          />
        </span>
        <span className={classes.item}>
          <Typography variant="h5" className={classes.label}>
            <Trans i18nKey="formEmail" />
          </Typography>
          <TextField
            required
            id="email"
            variant="outlined"
            color="primary"
            className={classes.field}
            value={email}
            onChange={handleEmailChanged}
          />
        </span>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.send}
          onClick={sendMail}
          // disabled={disabled}
        >
          <Typography variant="h5">
            <Box fontWeight={700}>
              <Trans i18nKey="send" />
            </Box>
          </Typography>
        </Button>
        <span className={classes.icons}>
          {icons.map(i => (
            <img alt="linkedin" src={linkedin} className={classes.icon} key={i} />
          ))}
        </span>
      </div>
    </div>
  );
};

export default Contact;
