import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";

import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { initializeAppThunk } from "./redux/appReducer";
import store from "./redux/store";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeAppThunk();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" component={DialogsContainer} />
          <Route path="/profile/:userId?" component={ProfileContainer} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    initialized: state.app.initialized
  };
};

const AppConnect = connect(
  mapStateToProps,
  { initializeAppThunk }
)(App);

const AppContainer = () => (
  <BrowserRouter>
    <Provider store={store}>
      <AppConnect />
    </Provider>
  </BrowserRouter>
);

export default AppContainer;
