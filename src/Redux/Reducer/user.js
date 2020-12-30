import { SIGN_IN } from "../Constants";
const initialState = {
  login: null,
};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SIGN_IN:
      state.login = actions.payload;
      return { ...state };
      break;

    default:
      return { ...state };
  }
};
export default userReducer;
