import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  design: {
    display: 'inline-block',
    whiteSpace: 'pre',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
});

const Headline = () => {
  const classes = styles();

  return (
    <div>
      <Typography variant="h2" color="textPrimary" className={classes.design}>
        <Box fontWeight={400}>
          <Trans i18nKey="headlineStart" />
        </Box>
      </Typography>
      <Typography variant="h2" color="primary" className={classes.design}>
        <Box fontWeight={400}>
          <Trans i18nKey="design" />
          <Trans i18nKey="comma" />
        </Box>
      </Typography>
      <Typography variant="h2" color="textPrimary">
        <Box fontWeight={400}>
          <Trans i18nKey="headlineEnd" />
        </Box>
      </Typography>
      <Typography variant="h5" color="secondary">
        <Trans i18nKey="title" />
      </Typography>
    </div>
  );
};

export default Headline;
