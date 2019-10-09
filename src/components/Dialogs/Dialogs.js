import React from "react";
import classes from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import { Form, Field } from "react-final-form";
import { maxLength } from "./../../utils/validators";

function Dialogs({ sendMessageCreator, dialogsPage }) {
  const dialogsElements = dialogsPage.dialogs.map(({ name, id }) => (
    <DialogItem name={name} id={id} key={id} />
  ));

  const messagesRender = dialogsPage.messages.map(({ message, id }) => (
    <Message message={message} key={id} />
  ));

  const onSubmit = values => {
    sendMessageCreator(values.newMessageText);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>

      <div className={classes.messages}>
        <div>{messagesRender}</div>
        <AddMessageForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}

const AddMessageForm = ({ onSubmit }) => {
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
              <Field name="newMessageText" validate={maxLength(5)}>
                {({ input, meta }) => (
                  <div>
                    <textarea
                      {...input}
                      type="text"
                      placeholder="add text your message"
                      className={
                        meta.error && meta.touched
                          ? classes.required
                          : undefined
                      }
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <button
                type="submit"
                disabled={
                  submitting || pristine || maxLength(5)(values.newMessageText)
                }
              >
                ADD
              </button>
            </div>
          </form>
        );
      }}
    />
  );
};

export default Dialogs;
