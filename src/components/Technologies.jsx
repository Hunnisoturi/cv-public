import React from 'react';
import { Trans } from 'react-i18next';
import { Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '150px',
  },
});

const Technologies = () => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Typography variant="h3">
        <Trans i18nKey="technologies" />
      </Typography>
    </div>
  );
};

export default Technologies;
