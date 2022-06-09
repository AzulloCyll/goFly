const initialState = {
  topMenuTabsValue: 2,
  sliderIndexValue: 0,
};

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "SET_TOPMENU_TAB_INDEX":
      return { ...state, topMenuTabsValue: action.payload };
    case "SET_SLIDER_INDEX_VALUE":
      return { ...state, sliderIndexValue: action.payload };

    default:
      return state;
  }
};

export default reducer;
