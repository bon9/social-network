import Dialogs from "./Dialogs";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";

import { connect } from "react-redux";

import {
  sendMessageCreator,
  updateNewMessageValueCreator
} from "../../redux/dialogsReducer";

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNewMessageChange: value => {
      dispatch(updateNewMessageValueCreator(value));
    },
    sendMessageCreator: () => {
      dispatch(sendMessageCreator());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthRedirect(Dialogs));
