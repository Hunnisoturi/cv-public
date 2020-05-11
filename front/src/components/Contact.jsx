import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import
{ Typography,
  TextField,
  Button,
  Box,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  IconButton,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
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
    marginTop: '30px',
  },
  item: {
    marginTop: '30px',
    width: '100%',
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
  pre: {
    whiteSpace: 'pre',
  },
  subtitle: {
    marginTop: '50px',
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
  const [message, setMessage] = useState('');

  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const { t } = useTranslation();

  const handleNameChanged = event => setName(event.target.value);
  const handleCompanyChanged = event => setCompany(event.target.value);
  const handleEmailChanged = event => setEmail(event.target.value);
  const handleMessageChanged = event => setMessage(event.target.value);

  const handleShow = () => setShow(true);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShow(false);
  };

  const handleOpen = () => setOpen(true);
  const handleHide = () => setOpen(false);

  const handleShowError = () => setOpenError(true);
  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false);
  };

  const validate = () => {
    if (name.length !== 0 && company.length !== 0 && email.length !== 0) {
      handleOpen();
    } else {
      handleShowError();
    }
  };

  const sendMail = () => {
    API.send({ name, company, email, message })
      .then(() => {
        handleShow();
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        handleHide();
        setName('');
        setCompany('');
        setEmail('');
        setMessage('');
      });
  };

  const classes = styles();

  return (
    <Container id="contact" maxWidth="xl" className={classes.container}>
      <Typography variant="h3" className={classes.contact}>
        <Trans i18nKey="contact" />
      </Typography>
      <Typography variant="h5" color="secondary" className={classes.subtitle}>
        <Trans i18nKey="contactSubtitle" />
      </Typography>
      <Container maxWidth="sm" className={classes.form}>
        <span className={classes.item}>
          <Typography variant="h5" className={classes.label}>
            <Trans i18nKey="formName" />
          </Typography>
          <TextField
            required
            id="name"
            label="name"
            variant="outlined"
            color="primary"
            className={classes.field}
            value={name}
            onChange={handleNameChanged}
          />
        </span>
        <span className={classes.item}>
          <Typography variant="h5" className={classes.label}>
            <Trans i18nKey="formEmail" />
          </Typography>
          <TextField
            required
            id="email"
            label="email"
            variant="outlined"
            color="primary"
            className={classes.field}
            value={email}
            onChange={handleEmailChanged}
          />
        </span>
        <span className={classes.item}>
          <Typography variant="h5" className={classes.label}>
            <Trans i18nKey="formCompany" />
          </Typography>
          <TextField
            required
            id="company"
            label="company"
            variant="outlined"
            color="primary"
            className={classes.field}
            value={company}
            onChange={handleCompanyChanged}
          />
        </span>
        <span className={classes.item}>
          <Typography variant="h5" className={classes.label}>
            <Trans i18nKey="formMessage" />
          </Typography>
          <TextField
            inputProps={{
              maxLength: 256,
            }}
            id="message"
            label="message"
            variant="outlined"
            color="primary"
            multiline
            rows={5}
            className={classes.field}
            value={message}
            onChange={handleMessageChanged}
          />
        </span>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.send}
          onClick={validate}
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
      </Container>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={show}
        autoHideDuration={6000}
        onClose={handleClose}
        message={t('emailSent')}
        action={(
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="primary"
              onClick={handleClose}
            >
              <Close fontSize="small" />
            </IconButton>
          </>
        )}
      />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={openError}
        onClose={handleCloseError}
      >
        <Alert
          severity="error"
          variant="filled"
          action={(
            <>
              <IconButton
                size="small"
                aria-label="close"
                color="black"
                onClick={handleCloseError}
              >
                <Close fontSize="small" />
              </IconButton>
            </>
          )}
        >
          <Trans i18nKey="formError" />
        </Alert>
      </Snackbar>
      <Dialog
        open={open}
        onClose={handleHide}
      >
        <DialogTitle>
          <Typography variant="h5" component="p">
            <Trans i18nKey="sendDialogTitle" />
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="h6" color="secondary" className={classes.pre}>
            <Trans i18nKey="formName" />
            {`:   ${name}`}
          </Typography>
          <Typography variant="h6" color="secondary" className={classes.pre}>
            <Trans i18nKey="formCompany" />
            {`:   ${company}`}
          </Typography>
          <Typography variant="h6" color="secondary" className={classes.pre}>
            <Trans i18nKey="formEmail" />
            {`:   ${email}`}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={sendMail} color="primary">
            <Typography variant="h6">
              <Trans i18nKey="yes" />
            </Typography>
          </Button>
          <Button onClick={handleHide} color="primary">
            <Typography variant="h6">
              <Trans i18nKey="no" />
            </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Contact;
