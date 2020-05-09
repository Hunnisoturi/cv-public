import React from 'react';
import { Trans } from 'react-i18next';
import { Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Bubbles } from '../assets/Technologies.svg';

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '150px',
  },
  bubbles: {
    marginTop: '150px',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  subtitle: {
    marginTop: '50px',
  },
}));

const Technologies = () => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Typography variant="h3">
        <Trans i18nKey="technologies" />
      </Typography>
      <Typography variant="h5" color="secondary" className={classes.subtitle}>
        <Trans i18nKey="technologySubtitle" />
      </Typography>
      <div className={classes.bubbles}>
        <Bubbles />
      </div>
    </div>
  );
};

export default Technologies;
