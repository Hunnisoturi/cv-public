import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowDownward } from '@material-ui/icons';

const styles = makeStyles({
  arrowSpan: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '150px',
  },
  arrow: {
    height: '100px',
    width: 'auto',
  },
});

const ArrowDown = () => {
  const classes = styles();

  return (
    <span className={classes.arrowSpan}>
      <ArrowDownward color="secondary" className={classes.arrow} />
    </span>
  );
};

export default ArrowDown;
