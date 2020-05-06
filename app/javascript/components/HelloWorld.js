import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, LinearProgress } from '@material-ui/core';
import Container from './lv1/Container';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      greeting: '',
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            greeting: result.greeting,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  render() {
    const { greeting } = this.state;

    return (
      <Container>
        <Grid
          container
          direction="column"
          alignContent="center"
          justify="space-around"
          spacing={2}
        >
          <Grid item>
            <Typography variant="h2" color="primary">
              Greeting: {greeting}
            </Typography>
          </Grid>
          <Grid item>
            <LinearProgress />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

HelloWorld.propTypes = {
  url: PropTypes.string.isRequired,
};
export default HelloWorld;
