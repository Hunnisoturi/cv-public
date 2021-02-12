import React from 'react';
import { Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper, Container, Link, Box } from '@material-ui/core';
import { Spacers } from '../utils/styles';
import { projects } from '../utils/data';
import ArrowDown from './ArrowDown';

const styles = makeStyles(theme => ({
  paper: {
    borderRadius: '15px',
    // width: '82%',
    height: '100%',
    minWidth: '298px',
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gridContainer: {
    marginTop: '50px',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      marginTop: Spacers.spacerMobile,
    },
  },
  gridItem: {
    height: '100%',
    minWidth: '378px',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    borderRadius: '15px 15px 0px 0px',
  },
  header: {
    marginTop: '10px',
  },
  subtitle: {
    marginTop: '30px',
    marginBottom: '30px',
  },
  textContainer: {
    padding: '30px',
  },
  headline: {
    marginTop: '100px',
    [theme.breakpoints.down('xs')]: {
      marginTop: Spacers.spacerMobile,
    },
  },
  link: {
    textDecoration: 'none',
  },
}));

const Projects = () => {
  const classes = styles();

  return (
    <Container maxWidth="xl" className={classes.container}>
      <ArrowDown />
      <Typography variant="h4" className={classes.headline} id="projects">
        <Trans i18nKey="projects" />
      </Typography>
      <Grid container className={classes.gridContainer} spacing={10}>
        {projects.map(p => (
          <Grid item xs={4} className={classes.gridItem} key={p.name}>
            <Paper elevation={5} className={classes.paper}>
              <Grid container direction="column">
                <Grid item xs>
                  <div>
                    <img alt="Project" src={p.image} className={classes.image} />
                  </div>
                  <div className={classes.textContainer}>
                    <Typography variant="h5" className={classes.header}>
                      <Link href={p.link ? p.link : null} target="_blank" underline="none" color="textPrimary">
                        <Trans i18nKey={p.name} />
                      </Link>
                    </Typography>
                    <Typography variant="subtitle1" color="secondary" className={classes.subtitle}>
                      <Trans i18nKey={p.subtitle} />
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
