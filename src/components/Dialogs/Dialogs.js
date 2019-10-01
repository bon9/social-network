import React from "react";
import classes from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({ dialogsData, messagesData }) => {
  const dialogsElements = dialogsData.map(({ name, id }) => (
    <DialogItem name={name} id={id} />
  ));

  const messages = messagesData.map(({ message }) => (
    <Message message={message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>

      <div className={classes.messages}>{messages}</div>
    </div>
  );
};

export default Dialogs;
