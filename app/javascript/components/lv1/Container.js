import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "@material-ui/core"
class Container extends React.Component {
  render () {
    return (
      <React.Fragment>
        <ThemeProvider>
          {this.props.children}
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

Container.propTypes = {
  children: PropTypes.element.isRequired
}

export default Container
