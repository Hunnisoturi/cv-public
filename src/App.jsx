import React from 'react';
import { Container, makeStyles, Grid } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import Header from './components/Header';
import Headline from './components/Headline';

const styles = makeStyles({
  root: {
    height: '100vh',
    background: '#F5F5F5',
  },
  container: {
    marginBottom: '4rem',
  },
  mainGrid: {
    paddingTop: '150px',
  },
});

const App = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Header />
      <main>
        <Container maxWidth="xl" className={classes.mainGrid}>
          <Grid container direction="row">
            <Grid item xs={6}>
              <Headline />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default withTranslation()(App);
