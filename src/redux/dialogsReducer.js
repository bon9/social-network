const UPDATE_NEW_MESSAGE_VALUE = "UPDATE_NEW_MESSAGE_VALUE";
const SEND_MESSAGE = "SEND_MESSAGE";

const dialogsReducer = (state, action) => {
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
