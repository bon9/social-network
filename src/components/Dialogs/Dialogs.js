import React from "react";
import classes from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import { Form, Field } from "react-final-form";

const MessageForm = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, values, form, submitting, pristine }) => {
        return (
          <form
            onSubmit={e => {
              handleSubmit(e);
              form.reset();
            }}
          >
            <div>
              <Field
                name="messageText"
                component="textarea"
                placeholder="add text your message"
              />
            </div>
            <div>
              <button type="submit" disabled={submitting || pristine}>
                ADD
              </button>
            </div>
          </form>
        );
      }}
    />
  );
};

function Dialogs({ sendMessageCreator, dialogsPage }) {
  const dialogsElements = dialogsPage.dialogs.map(({ name, id }) => (
    <DialogItem name={name} id={id} key={id} />
  ));

  const messagesRender = dialogsPage.messages.map(({ message, id }) => (
    <Message message={message} key={id} />
  ));

  const onSubmit = values => {
    sendMessageCreator(values.messageText);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>

      <div className={classes.messages}>
        <div>{messagesRender}</div>
        <MessageForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default Dialogs;
