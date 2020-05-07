import React from 'react';
import { Trans } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  scrollDown: {
    marginTop: '350px',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const CallToAction = () => {
  const classes = styles();

  return (
    <div className={classes.scrollDown}>
      <Typography
        color="secondary"
        align="center"
        variant="h5"
        className={classes.scrollDown}
      >
        <Trans i18nKey="callToAction" />
      </Typography>
      <span className={classes.icon}>
        <KeyboardArrowDown color="secondary" className={classes.animated} />
      </span>
    </div>
  );
};

export default CallToAction;