import React from "react"
import PropTypes from "prop-types"
import { CircularProgress } from '@material-ui/core'
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        <CircularProgress />
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
