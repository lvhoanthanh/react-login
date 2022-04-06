import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/GlobalStyles";
import { Home } from "./containers/Home";
import { LoginPage } from "./containers/LoginPage";
import { RegisterPage } from "./containers/RegisterPage";
import { Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./router";
import { connect } from "react-redux";
import { history } from "./helpers/history";
import { alertActions } from "./actions";
import { Alert } from "./components/common/Alert.styled";
import CountingPage from "./containers/CountingPage";

class App extends Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {
      //clear alert on location change
      this.props.clearAlerts();
    });
  }

  render() {
    const theme = {
      colors: {
        header: "#ebfbff",
        body: "#fff",
        footer: "#003333",
      },
      mobile: "768px",
    };

    const { alert } = this.props;
    return (
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Switch>
            <PrivateRoute path={"/"} component={Home} exact />
            <Route path={"/login"} component={LoginPage} exact />
            <Route path={"/register"} component={RegisterPage} exact />
            <Route path={"/countdown"} component={CountingPage} />
            {/* <Redirect from="*" to="/" /> */}
          </Switch>
          {alert.message && (
            <Alert type={alert.type}>{alert.message}</Alert>
            // <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
        </ThemeProvider>
      </Router>
    );
  }
}
//get state from redux
function mapPropsToState(state) {
  const { alert, authentication } = state;
  return { alert, authentication };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

export default connect(mapPropsToState, actionCreators)(App);
