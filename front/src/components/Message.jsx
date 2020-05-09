import React from 'react';
import { Trans } from 'react-i18next';
import { Snackbar, IconButton } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Close } from '@material-ui/icons';

const Message = (show, handleClose, translation, severity) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    open={show}
    autoHideDuration={6000}
    onClose={handleClose}
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
  >
    <Alert severity={severity}>
      <Trans i18nKey={translation} />
    </Alert>
  </Snackbar>
);

export default Message;
