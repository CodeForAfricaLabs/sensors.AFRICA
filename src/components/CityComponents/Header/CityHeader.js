import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import CityMenuBar from './CityMenuBar';
import AirCityHeaderContent from '../../Header/JumbotronContent/AirCityHeaderContent';

const styles = theme => ({
  jumbotron: {
    flexGrow: 1,
    backgroundColor: '#2FB56B',
    borderRadius: 'none',
    height: 566,
    [theme.breakpoints.up('md')]: {
      height: 513
    }
  }
});

function CityHeader({ airPol, city, classes, handleChange }) {
  return (
    <Grid container className={classes.jumbotron}>
      <Grid item xs={12}>
        <CityMenuBar handleChange={handleChange} />
        <AirCityHeaderContent city={city} airPol={airPol} />
      </Grid>
    </Grid>
  );
}

CityHeader.propTypes = {
  airPol: PropTypes.string,
  city: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

CityHeader.defaultProps = {
  airPol: '0'
};

export default withStyles(styles)(CityHeader);
