import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const withAuthRedirect = Component => {
  class RedirectComponent extends React.Component {
    render() {
      return this.props.isAuth ? (
        <Component {...this.props} />
      ) : (
        <Redirect to={"/login"} />
      );
    }
  }
  return connect(mapStateToProps)(RedirectComponent);
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  };
};
