import React from 'react';
import { Trans } from 'react-i18next';
import { Typography, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Spacers } from '../utils/styles';

import { ReactComponent as EduDot } from '../assets/dotWhite.svg';

const styles = makeStyles(theme => ({
  container: {
    marginTop: Spacers.spacerDesktop,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: Spacers.spacerMobile,
    },
  },
  dotText: {
    position: 'relative',
    bottom: '50%',
  },
  dot: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  item: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: '30px',
    },
  },
}));

const schools = [
  1,
  2,
];

const Education = () => {
  const classes = styles();

  return (
    <Container maxWidth="xl">
      <Grid container direction="row" justify="center" className={classes.container} spacing={5}>
        <Grid item className={classes.dot} xs>
          <div>
            <EduDot />
            <div className={classes.dotText}>
              <Typography variant="h3" color="primary" align="center" justify="center">
                <Trans i18nKey="education" />
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid container direction="column" item xs alignItems="center">
          {schools.map(s => (
            <Grid container direction="column" item xs justify="center" key={s} spacing={5} className={classes.item}>
              <Grid item>
                <Typography variant="h5">
                  <Trans i18nKey="amk" />
                </Typography>
                <Typography variant="h6" color="secondary">
                  <Trans i18nKey="amkPlaceAndTime" />
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Education;
