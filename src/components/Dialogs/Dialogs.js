import React from "react";
import { Navigate } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from "./Dialogs.module.css";

function Dialogs({ sendMessage, dialogsPage, isAuth }) {
  const state = dialogsPage;

  const addNewMessage = value => {
    sendMessage(value);
  };

  const dialogsElements = state.dialogs.map(dialog => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  const messagesElements = state.messages.map(message => (
    <Message message={message.message} key={message.id} />
  ));

  if (!isAuth) return <Navigate to="/login" />;

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
}

const AddMessageForm = () => {
  return (
    <form>
      <div>
        <textarea placeholder="Enter your message"></textarea>
        <div>
          <button>Send message</button>
        </div>
      </div>
    </form>
  );
};

export default Dialogs;
