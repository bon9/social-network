import React from "react";
import Dialogs from "./Dialogs";

import {
  sendMessageCreator,
  updateNewMessageValueCreator
} from "../../redux/dialogsReducer";

function DialogsContainer({ store }) {
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
}

export default DialogsContainer;
