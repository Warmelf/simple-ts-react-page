const initialState = {
  lang: "ru",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_LANGUAGE": {
      return {
        ...state,
        lang: action.lang,
      };
    }
    default:
      return state;
  }
}
