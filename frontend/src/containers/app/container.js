import React, { Component } from 'react';
import debounce from "lodash.debounce";
import PropTypes from "prop-types";

import MainRouter from '../../routers/routes';

import "./styles.css";

class App extends Component {
  static propTypes ={
    currentBreakPoint: PropTypes.string
  };

  handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  
  componentDidMount() {
    window.addEventListener(
      "resize",
      debounce(this.handleWindowSizeChange, 500)
    );
    this.handleWindowSizeChange();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange() {
    const body = document.querySelector("body");
    // some browser will return the content with quotes
    const currentBreakpoint = window
      .getComputedStyle(body, ":after")
      .content.replace(/"/g, "");
    this.props.setScreenBreakpoint({ currentBreakpoint });
  }

  render() {
    return (
      <MainRouter />
    );
  }
}

export default App;
