import React from 'react';
import { Trans } from 'react-i18next';
import { Avatar, Grid, Typography } from '@material-ui/core';
import { Mood } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import portrait from '../assets/portrait.jpg';

const styles = makeStyles({
  avatar: {
    marginTop: '100px',
    height: '300px',
    width: '300px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '100px',
  },
  gridContainer: {
    marginTop: '150px',
  },
  icon: {
    height: '100px',
    width: '100px',
    paddingBottom: '50px',
  },
  nameText: {
    marginTop: '30px',
  },
});

const items = [
  1,
  2,
  3,
];

const About = () => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Typography variant="h3">
        <Trans i18nKey="whoami" />
      </Typography>
      <Avatar alt="Aapo Attila" src={portrait} className={classes.avatar} />
      <Typography variant="h5" color="secondary" className={classes.nameText}>
        <Trans i18nKey="name" />
      </Typography>
      <Grid container className={classes.gridContainer}>
        {items.map(i => (
          <Grid item xs={4} key={i}>
            <Grid container direction="column" item alignItems="center">
              <Grid item xs={6}>
                <Mood color="primary" className={classes.icon} />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5">
                  <Trans i18nKey="selfDescription" />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default About;
