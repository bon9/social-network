import Dialogs from "./Dialogs";

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

const DialogsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
