const initialState = {
  activeValue: 0,
};

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "SET_ACTIVE_VIEW":
      return { ...state, activeValue: action.payload };

    default:
      return state;
  }
};

export default reducer;
