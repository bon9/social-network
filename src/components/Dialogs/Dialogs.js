import React from "react";
import classes from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({ state: { dialogs, messages } }) => {
  const dialogsElements = dialogs.map(({ name, id }) => (
    <DialogItem name={name} id={id} />
  ));

  const messagesRender = messages.map(({ message }) => (
    <Message message={message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>

      <div className={classes.messages}>{messagesRender}</div>
    </div>
  );
};

export default Dialogs;
