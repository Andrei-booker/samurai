import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const withAuthRedirect = Component => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to="/login" />;
      return <Component {...this.props} />;
    }
  }
  const mapStateToPropsForRedirect = state => ({
    isAuth: state.authReducer.isAuth,
  });
  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );
  return ConnectedAuthRedirectComponent;
};

export default withAuthRedirect;
