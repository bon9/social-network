import React from "react";
import Dialogs from "./Dialogs";

import StoreContext from "./../../StoreContext";
import {
    sendMessageCreator,
    updateNewMessageValueCreator
} from "../../redux/dialogsReducer";

function DialogsContainer({ store }) {
    return (
        <StoreContext.Consumer>
            {store => {
                const dialogsPage = store.getState().dialogsPage;

                function onNewMessageChange(value) {
                    store.dispatch(updateNewMessageValueCreator(value));
                }

                function onSendMessageClick() {
                    store.dispatch(sendMessageCreator());
                }
                return (
                    <Dialogs
                        onNewMessageChange={onNewMessageChange}
                        sendMessageCreator={onSendMessageClick}
                        dialogs={dialogsPage.dialogs}
                        messages={dialogsPage.messages}
                        newMessageValue={dialogsPage.newMessageValue}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;
