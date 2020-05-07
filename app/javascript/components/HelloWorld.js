import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, LinearProgress } from '@material-ui/core';
import Container from './lv1/Container';
import { pooring } from '../lib/api';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.startAction = this.startAction.bind(this);
    this.finishAction = this.finishAction.bind(this);
    this.successAction = this.successAction.bind(this);
    this.failuerAction = this.failuerAction.bind(this);
    this.hello = this.hello.bind(this);
    this.state = {
      response: {
        greeting: '',
      },
      error: null,
      loading: true,
    };
  }

  startAction() {
    this.setState({ loading: true });
  }
  finishAction() {
    this.setState({ loading: false });
  }
  successAction(res) {
    console.log(res);
    this.setState({
      response: {
        greeting: res.greeting,
      },
    });
  }
  failuerAction(error) {
    this.setState({ error: error });
  }

  componentDidMount() {
    pooring({
      startAction: this.startAction,
      finishAction: this.finishAction,
      successAction: this.successAction,
      failuerAction: this.failuerAction,
      url: this.props.url,
    });
  }

  render() {
    const { response, loading } = this.state;

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
              {loading ? 'loading ...' : response.greeting}
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
