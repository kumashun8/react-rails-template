import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, LinearProgress } from '@material-ui/core';
import Container from './lv1/Container';
import { pooring } from '../lib/api';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      greeting: '',
      loading: true,
    };
  }

  startAction() {
    this.setState({ loading: true });
  }
  finishAction() {
    this.setState({ loading: false });
  }
  successAction(greeting) {
    this.setState({ greeting: greeting });
  }
  failuerAction(error) {
    this.setState({ error: error });
  }
  hoge() {
    console.log('hoge');
  }

  componentDidMount() {
    this.hoge;
    //
  }

  render() {
    const { greeting, loading } = this.state;

    return (
      <Container>
        <Grid
          container
          direction='column'
          alignContent='center'
          justify='space-around'
          spacing={2}
        >
          <Grid itemScope>
            <Typography variant='h2' color='primary'>
              {loading ? 'loading ...' : greeting}
            </Typography>
          </Grid>
          {loading && (
            <Grid item>
              <LinearProgress />
            </Grid>
          )}
        </Grid>
      </Container>
    );
  }
}

HelloWorld.propTypes = {
  url: PropTypes.string.isRequired,
};

export default HelloWorld;
