import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Container = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <ThemeProvider>
      <React.Fragment>
        <div className={classes.root}>{children}</div>
      </React.Fragment>
    </ThemeProvider>
  );
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
