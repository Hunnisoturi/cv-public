import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Snackbar, IconButton } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Close } from '@material-ui/icons';
import PropTypes from 'prop-types';

export const ErrorMessage = ({ open, onClose, msg }) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    open={open}
    onClose={onClose}
  >
    <Alert
      severity="error"
      variant="filled"
      action={(
        <>
          <IconButton
            size="small"
            aria-label="close"
            color="secondary"
            onClick={onClose}
          >
            <Close fontSize="small" />
          </IconButton>
        </>
      )}
    >
      <Trans i18nKey={msg} />
    </Alert>
  </Snackbar>
);

ErrorMessage.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
};

export const SuccessMessage = ({ open, onClose, msg }) => {
  const { t } = useTranslation();
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      message={t(msg)}
      action={(
        <>
          <IconButton
            size="small"
            aria-label="close"
            color="primary"
            onClick={onClose}
          >
            <Close fontSize="small" />
          </IconButton>
        </>
      )}
    />
  );
};

SuccessMessage.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
};
