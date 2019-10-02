import React from "react";
import classes from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {
  sendMessageCreator,
  updateNewMessageValueCreator
} from "../../redux/dialogsReducer";

function Dialogs({
  dialogsPage: { dialogs, messages, newMessageValue },
  dispatch
}) {
  const dialogsElements = dialogs.map(({ name, id }) => (
    <DialogItem name={name} id={id} />
  ));

  const messagesRender = messages.map(({ message }) => (
    <Message message={message} />
  ));

  function onNewMessageChange(e) {
    const value = e.target.value;
    dispatch(updateNewMessageValueCreator(value));
  }

  function onSendMessageClick() {
    dispatch(sendMessageCreator());
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>

      <div className={classes.messages}>
        <div>{messagesRender}</div>
        <div>
          <textarea
            cols="10"
            rows="3"
            value={newMessageValue}
            onChange={onNewMessageChange}
            placeholder="Enter your message"
          ></textarea>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
