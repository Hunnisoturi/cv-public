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
    <Typography variant="h1" color="textPrimary" className={classes.multiline}>
      <Trans i18nKey="headline" />
    </Typography>
  );
};

export default Headline;
