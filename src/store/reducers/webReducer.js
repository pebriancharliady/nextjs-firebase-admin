const initState = {
  comproContent: [{}],
};
const webReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CONTENT":
      console.log(action.newContent);
      return state;
    case "ADD_CONTENT_ERROR":
      console.log(action.err);
      return state;
    default:
      return state;
  }
};

export default webReducer;
