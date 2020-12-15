const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" },
  ],
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log(action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log(action.err);
      return state;
    case "EDIT_PROJECT":
      console.log("Edit Success");
      return state;
    case "EDIT_PROJECT_ERROR":
      console.log("Edit Error: ", action.err);
      return state;
    case "DELETE_PROJECT":
      console.log("Delete success");
      return state;
    case "DELETE_PROJECT_ERROR":
      console.log("Delete Error: ", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
