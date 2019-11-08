import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeAppThunk } from "./redux/appReducer";
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
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    initialized: state.app.initialized
  };
};

export default connect(
  mapStateToProps,
  { initializeAppThunk }
)(App);
