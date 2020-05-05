import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from 'react-i18next';
import { Container, Chip, Typography } from '@material-ui/core';
import { Tech } from '../utils/constants';

const styles = makeStyles(theme => ({
  chipContainer: {
    paddingTop: '30px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(0.7),
    },
  },
  container: {
    paddingTop: '100px',
  },
}));

const Technologies = () => {
  const classes = styles();
  const tech = Tech;

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h3" align="center" color="textPrimary">
        <Trans i18nKey="technologies" />
      </Typography>
      <Container maxWidth="sm" className={classes.chipContainer}>
        {tech.map(t => (
          <Chip
            key={t}
            variant="outlined"
            color="primary"
            label={t}
          />
        ))}
      </Container>
    </Container>
  );
};

export default Technologies;
