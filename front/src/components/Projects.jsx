import React from 'react';
import { Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper, Container } from '@material-ui/core';
import ArrowDown from './ArrowDown';

import cvPhoto from '../assets/cvProject2x.jpg';


const styles = makeStyles({
  paper: {
    borderRadius: '25px',
    width: '82%',
    minWidth: '360px',
    maxHeight: '485px',
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gridContainer: {
    marginTop: '150px',
    width: '100%',
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
    marginTop: '40px',
  },
  subtitle: {
    marginTop: '40px',
    marginBottom: '40px',
  },
  textContainer: {
    padding: '30px',
  },
  headline: {
    marginTop: '150px',
  },
});

const projects = [
  1,
  2,
  3,
];

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
          <Grid item xs={4} className={classes.gridItem} key={p}>
            <Paper elevation={5} className={classes.paper}>
              <Grid container direction="column">
                <Grid item xs>
                  <div className={classes.imageContainer}>
                    <img alt="Project" src={cvPhoto} className={classes.image} />
                  </div>
                  <div className={classes.textContainer}>
                    <Typography variant="h4" className={classes.header}>
                      <Trans i18nKey="cvCardHeader" />
                    </Typography>
                    <Typography variant="h5" color="secondary" className={classes.subtitle}>
                      <Trans i18nKey="cvCardSubtitle" />
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
