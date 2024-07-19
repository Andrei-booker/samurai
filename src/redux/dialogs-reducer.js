const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your IT-Kamasutra?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "See you later!" },
  ],
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const newMessage = {
        id: 5,
        message: action.newMessage,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default:
      return state;
  }
};

export const sendMessage = newMessage => ({
  type: SEND_MESSAGE,
  newMessage,
});

export default dialogsReducer;
