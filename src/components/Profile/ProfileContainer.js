import { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Profile from "./Profile";
import {
  getStatus,
  getUserProfile,
  updateStatus,
} from "../../redux/profile-reducer";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;

    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
const mapStateToProps = state => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
  authorizedUserId: state.authReducer.userId,
  isAuth: state.authReducer.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);
