import React from 'react';
import { Trans } from 'react-i18next';
import { Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { Spacers } from '../utils/styles';

import { ReactComponent as Bubbles } from '../assets/Technologies.svg';

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100px',
    [theme.breakpoints.down('xs')]: {
      marginTop: Spacers.spacerMobile,
    },
  },
  bubbles: {
    marginTop: '100px',
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  subtitle: {
    marginTop: '50px',
    textAlign: 'center',
  },
}));

const Technologies = () => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        <Trans i18nKey="technologies" />
      </Typography>
      <Typography variant="h6" color="secondary" className={classes.subtitle}>
        <Trans i18nKey="technologySubtitle" />
      </Typography>
      <div className={classes.bubbles}>
        <Bubbles />
      </div>
    </div>
  );
};

export default Technologies;
