export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};

export const deleteProject = (projectId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .doc(projectId)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_PROJECT" });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_PROJECT_ERROR", err });
      });
  };
};

export const editProject = (prevProject, newProject, projectId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .doc(projectId)
      .set({
        ...prevProject,
        title: newProject.title,
        content: newProject.content,
      })
      .then(() => {
        dispatch({ type: "EDIT_PROJECT" });
      })
      .catch((err) => {
        dispatch({ type: "EDIT_PROJECT_ERROR", err });
      });
  };
};
