import React from 'react';
import { Trans } from 'react-i18next';
import { Typography, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Spacers } from '../utils/styles';
import { educations } from '../utils/data';

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
    maxWidth: '450px',
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

const Education = () => {
  const classes = styles();

  return (
    <Container maxWidth="xl">
      <Grid container direction="row" justify="center" className={classes.container} spacing={5}>
        <Grid item className={classes.dot} xs={6}>
          <div>
            <EduDot />
            <div className={classes.dotText}>
              <Typography variant="h3" color="primary" align="center" justify="center">
                <Trans i18nKey="education" />
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid container direction="column" item md={6} xs={12} alignItems="center">
          {educations.map(s => (
            <Grid container direction="column" item xs justify="center" key={s.name} spacing={5} className={classes.item}>
              <Grid item>
                <Typography variant="h5">
                  <Trans i18nKey={s.name} />
                </Typography>
                <Typography variant="h6" color="secondary">
                  <Trans i18nKey={s.subtitle} />
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
