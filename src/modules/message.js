const ADD_COMMENT = "message/ADD_COMMNET";

let nextId = 1;
export const addComment = (name, email, message) => ({
  type: ADD_COMMENT,
  text: {
    id: nextId++,
    name,
    email,
    message,
  },
});

const initialState = [
  { id: 0, name: "yhg0337", email: "yhg0337@gmail.com", message: "안녕하세요" },
];

export default function message(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return state.concat(action.text);
    default:
      return state;
  }
}
