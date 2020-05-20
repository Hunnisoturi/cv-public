import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Container, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { isFinnish } from '../utils/utils';

import privacyPathFI from '../texts/privacy_FI.md';
import privacyPathEN from '../texts/privacy_EN.md';

const privacyPolicyPaths = {
  fi: privacyPathFI,
  en: privacyPathEN,
};

const styles = makeStyles({
  footer: {
    display: 'flex',
    alignItems: 'center',
    background: '#F5F5F5',
    width: '100%',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
    marginBottom: '30px',
  },
});

const Footer = () => {
  const classes = styles();
  const { i18n } = useTranslation();

  const [open, setOpen] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState('');

  const getPolicy = () => {
    const privacyTextURL = isFinnish(i18n.language) ? privacyPolicyPaths.fi : privacyPolicyPaths.en;

    axios.get(privacyTextURL)
      .then(({ data }) => setPrivacyPolicy(data));
  };

  const handleOpen = () => {
    getPolicy();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Container component="footer" maxWidth="xl" className={classes.footer}>
      <Container maxWidth="xl" className={classes.container}>
        <Typography variant="h5">
          <Trans i18nKey="footerMsg" />
        </Typography>
        <Typography variant="h6" color="secondary">
          <Trans i18nKey="copyright" />
        </Typography>
        <Button
          color="secondary"
          onClick={handleOpen}
        >
          <Typography variant="h6">
            <Box fontWeight={700}>
              <Trans i18nKey="privacyPolicy" />
            </Box>
          </Typography>
        </Button>
      </Container>
      <Dialog
        onClose={handleClose}
        aria-labelledby="privacy policy"
        open={open}
        maxWidth="lg"
      >
        <DialogTitle>
          <Typography variant="h5">
            <Trans i18nKey="privacyPolicy" />
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <ReactMarkdown source={privacyPolicy} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            <Typography variant="h6">
              <Trans i18nKey="close" />
            </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Footer;
