import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Navbar from 'components/Header/Navbar';
import AboutHeader from 'components/About/Air/Header';
import Partners from 'components/About/Partners';
import Stories from 'components/About/Stories';
import Staff from 'components/About/Staff';
import Support from 'components/Support';
import Footer from 'components/Footer';

const useStyles = makeStyles(theme => ({
  aboutSupport: {
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5
  }
}));

function About() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <AboutHeader />
      <Partners />
      <Staff />
      <Stories />
      <Support classNames={classes.aboutSupport} />
      <Footer />
    </>
  );
}

export default About;