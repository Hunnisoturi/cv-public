import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowDownward } from '@material-ui/icons';
import { Spacers } from '../utils/styles';

const styles = makeStyles(theme => ({
  arrowSpan: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: Spacers.spacerDesktop,
    [theme.breakpoints.down('xs')]: {
      marginTop: Spacers.spacerMobile,
    },
  },
  arrow: {
    height: '100px',
    width: 'auto',
  },
}));

const ArrowDown = () => {
  const classes = styles();

  return (
    <span className={classes.arrowSpan}>
      <ArrowDownward color="secondary" className={classes.arrow} />
    </span>
  );
};

export default ArrowDown;
