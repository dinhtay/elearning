const { STAR_LOADING, STOP_LOADING } = require("../Constants");

const initialState = {
  isLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case STAR_LOADING:
      state.isLoading = true;
      return { ...state };
      break;
    case STOP_LOADING:
      state.isLoading = false;
      return { ...state };
      break;
    default:
      return { ...state };
      break;
  }
};

export default loadingReducer;
