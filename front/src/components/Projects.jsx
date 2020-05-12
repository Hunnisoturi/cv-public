import React from 'react';
import { Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper, Container, Link } from '@material-ui/core';
import { Spacers } from '../utils/styles';
import { projects } from '../utils/data';
import ArrowDown from './ArrowDown';

const styles = makeStyles(theme => ({
  paper: {
    borderRadius: '25px',
    width: '82%',
    minWidth: '360px',
    height: '500px',
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gridContainer: {
    marginTop: Spacers.spacerDesktop,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      marginTop: Spacers.spacerMobile,
    },
  },
  gridItem: {
    minWidth: '440px',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    borderRadius: '25px 25px 0px 0px',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
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
    marginTop: Spacers.spacerDesktop,
    [theme.breakpoints.down('xs')]: {
      marginTop: Spacers.spacerMobile,
    },
    link: {
      textDecoration: 'none',
    },
  },
}));

const Projects = () => {
  const classes = styles();

  return (
    <Container maxWidth="xl" className={classes.container}>
      <ArrowDown />
      <Typography variant="h3" className={classes.headline} id="projects">
        <Trans i18nKey="projects" />
      </Typography>
      <Grid container className={classes.gridContainer} justify="center" alignItems="center" spacing={10}>
        {projects.map(p => (
          <Grid item xs={4} className={classes.gridItem} key={p.name}>
            <Paper elevation={5} className={classes.paper}>
              <Grid container direction="column">
                <Grid item xs>
                  <div className={classes.imageContainer}>
                    <img alt="Project" src={p.image} className={classes.image} />
                  </div>
                  <div className={classes.textContainer}>
                    <Typography variant="h4" className={classes.header}>
                      <Link href={p.link} className={classes.link} target="_blank" color="textPrimary">
                        <Trans i18nKey={p.name} />
                      </Link>
                    </Typography>
                    <Typography variant="h5" color="secondary" className={classes.subtitle}>
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
