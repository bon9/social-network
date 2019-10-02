const UPDATE_NEW_MESSAGE_VALUE = "UPDATE_NEW_MESSAGE_VALUE";
const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "where are you from ?" },
    { id: 3, message: "Ukarine" },
    { id: 4, message: "Yo" }
  ],
  dialogs: [
    { id: 1, name: "Oleh" },
    { id: 2, name: "Denya" },
    { id: 3, name: "Dima" },
    { id: 4, name: "Igor" }
  ],
  newMessageValue: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = { message: state.newMessageValue, id: 5 };
      state.messages.push(newMessage);
      state.newMessageValue = "";
      return state;

    case UPDATE_NEW_MESSAGE_VALUE:
      state.newMessageValue = action.newValue;
      return state;

    default:
      return state;
  }
};

export function sendMessageCreator() {
  return { type: SEND_MESSAGE };
}

export function updateNewMessageValueCreator(newValue) {
  return { type: UPDATE_NEW_MESSAGE_VALUE, newValue };
}

export default dialogsReducer;
