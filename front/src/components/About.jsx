import React from 'react';
import { Trans } from 'react-i18next';
import { Avatar, Grid, Typography, Container } from '@material-ui/core';
import { School, Code, SportsKabaddi } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { about } from '../utils/data';

import portrait from '../assets/portrait.jpg';

const styles = makeStyles(theme => ({
  avatar: {
    marginTop: '50px',
    height: '200px',
    width: '200px',
    [theme.breakpoints.down('xs')]: {
      height: '180px',
      width: '180px',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '200px',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '100px',
    },
  },
  gridContainer: {
    marginTop: '50px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '50px',
    },
  },
  icon: {
    height: '80px',
    width: '80px',
    paddingBottom: '30px',
  },
  nameText: {
    marginTop: '30px',
  },
  element: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '40px',
    },
    minWidth: '300px',
  },
  text: {
    width: '85%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
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
      <Typography variant="h4">
        <Trans i18nKey="whoami" />
      </Typography>
      <Avatar alt="Aapo Attila" src={portrait} className={classes.avatar} />
      <Typography variant="body1" color="secondary" className={classes.nameText}>
        <Trans i18nKey="name" />
        <Trans i18nKey="age" />
      </Typography>
      <Grid container className={classes.gridContainer} justify="center">
        {about.map((i, index) => (
          <Grid item xs={4} key={i.name} className={classes.element}>
            <Grid container direction="column" item alignItems="center">
              <Grid item xs>
                {icons[index].icon}
              </Grid>
              <Grid item xs className={classes.text}>
                <Typography variant="body1">
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
