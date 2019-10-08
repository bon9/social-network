import Dialogs from "./Dialogs";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";

import { connect } from "react-redux";
import { compose } from "redux";

import { sendMessageCreator } from "../../redux/dialogsReducer";

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  };
};

export default compose(
  connect(
    mapStateToProps,
    { sendMessageCreator }
  ),
  withAuthRedirect
)(Dialogs);
