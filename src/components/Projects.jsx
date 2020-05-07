import React from 'react';
import { Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper } from '@material-ui/core';

import cvPhoto from '../assets/cvProject2x.jpg';

const styles = makeStyles({
  paper: {
    padding: '30px',
    borderRadius: '25px',
    width: '400px',
    display: 'inline-block',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '150px',
  },
  gridContainer: {
    marginTop: '150px',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
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
});

const projects = [
  1,
  2,
  3,
];

const Projects = () => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Typography variant="h3">
        <Trans i18nKey="projects" />
      </Typography>
      <Grid container className={classes.gridContainer} justify="center">
        {projects.map(p => (
          <Grid item xs={4} className={classes.gridItem} key={p}>
            <Paper elevation={3} className={classes.paper}>
              <Grid container direction="column">
                <Grid item xs>
                  <div className={classes.image}>
                    <img alt="Project" src={cvPhoto} width="420" height="263" />
                  </div>
                  <Typography variant="h4" className={classes.header}>
                    <Trans i18nKey="cvCardHeader" />
                  </Typography>
                  <Typography variant="h5" color="secondary" className={classes.subtitle}>
                    <Trans i18nKey="cvCardSubtitle" />
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
