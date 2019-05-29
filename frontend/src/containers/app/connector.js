import { connect } from "react-redux";

import { setScreenBreakpoint } from "../../core/actions/breakpoints";

import App from "./container";

const mapStateToProps = state => ({
  currentBreakPoint: state.breakpoints.currentBreakPoint
})

const mapDispatchToProps = dispatch => ({
  setScreenBreakpoint: currentBreakpoint =>
    dispatch(setScreenBreakpoint({ currentBreakpoint }))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
