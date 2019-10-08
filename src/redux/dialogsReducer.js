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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = { message: action.message, id: 13 };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };

    default:
      return state;
  }
};

export function sendMessageCreator(message) {
  return { type: SEND_MESSAGE, message };
}

export default dialogsReducer;
