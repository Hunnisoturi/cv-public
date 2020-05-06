import React from 'react';
import { Typography } from '@material-ui/core';
import { Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  multiline: {
    whiteSpace: 'pre',
  },
});

const Headline = () => {
  const classes = styles();

  return (
    <div>
      <Typography variant="h1" color="textPrimary">
        <Trans i18nKey="headlineStart" />
      </Typography>
      <Typography variant="h1" color="primary">
        <Trans i18nKey="design" />
        <Trans i18nKey="comma" />
      </Typography>
      <Typography variant="h1" color="textPrimary" className={classes.multiline}>
        <Trans i18nKey="headlineEnd" />
      </Typography>
    </div>
  );
};

export default Headline;
