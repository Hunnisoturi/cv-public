import React from 'react';
import { Trans } from 'react-i18next';
import { Avatar, Grid, Typography, Container } from '@material-ui/core';
import { School, Code, SportsKabaddi } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Spacers } from '../utils/styles';
import { about } from '../utils/data';

import portrait from '../assets/portrait.jpg';

const styles = makeStyles(theme => ({
  avatar: {
    marginTop: '100px',
    height: '300px',
    width: '300px',
    [theme.breakpoints.down('xs')]: {
      height: '180px',
      width: '180px',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '100px',
  },
  gridContainer: {
    marginTop: Spacers.spacerDesktop,
    [theme.breakpoints.down('xs')]: {
      marginTop: Spacers.spacerMobile,
    },
  },
  icon: {
    height: '150px',
    width: '150px',
    paddingBottom: '50px',
  },
  nameText: {
    marginTop: '30px',
  },
  element: {
    minWidth: '400px',
  },
  text: {
    width: '85%',
  },
}));

const About = () => {
  const classes = styles();

  const icons = [
    {
      icon: <School color="primary" className={classes.icon} />,
    },
    {
      icon: <Code color="primary" className={classes.icon} />,
    },
    {
      icon: <SportsKabaddi color="primary" className={classes.icon} />,
    },
  ];

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Typography variant="h3">
        <Trans i18nKey="whoami" />
      </Typography>
      <Avatar alt="Aapo Attila" src={portrait} className={classes.avatar} />
      <Typography variant="h5" color="secondary" className={classes.nameText}>
        <Trans i18nKey="name" />
        <Trans i18nKey="age" />
      </Typography>
      <Grid container className={classes.gridContainer} spacing={3} justify="center">
        {about.map((i, index) => (
          <Grid item xs={4} key={i.name} className={classes.element}>
            <Grid container direction="column" item alignItems="center">
              <Grid item xs={6}>
                {/* <Mood color="primary" className={classes.icon} /> */}
                {icons[index].icon}
              </Grid>
              <Grid item xs={12} className={classes.text}>
                <Typography variant="h5">
                  <Trans i18nKey={i.subtitle} />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default About;
