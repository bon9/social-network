import React from "react";
import classes from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs({ onNewMessageChange, sendMessageCreator, dialogsPage }) {
    const dialogsElements = dialogsPage.dialogs.map(({ name, id }) => (
        <DialogItem name={name} id={id} />
    ));

    const messagesRender = dialogsPage.messages.map(({ message }) => (
        <Message message={message} />
    ));

    function onChangeHandler(e) {
        const value = e.target.value;
        onNewMessageChange(value);
    }

    function onClickHandler() {
        sendMessageCreator();
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
                        value={dialogsPage.newMessageValue}
                        onChange={onChangeHandler}
                        placeholder="Enter your message"
                    ></textarea>
                    <button onClick={onClickHandler}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
