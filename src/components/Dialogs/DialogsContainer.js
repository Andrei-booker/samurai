import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { compose } from "redux";
import { sendMessage } from "../../redux/dialogs-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsReducer,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    sendMessage: text => {
      dispatch(sendMessage(text));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
