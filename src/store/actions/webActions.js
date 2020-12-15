export const addContent = (docId, newContent) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("web")
      .doc(docId)
      .set({
        content: newContent
      })
      .then(() => {
        dispatch({ type: "ADD_CONTENT"}, newContent);
      })
      .catch((err) => {
        dispatch({ type: "ADD_CONTENT_ERROR", err });
      });
  };
};
