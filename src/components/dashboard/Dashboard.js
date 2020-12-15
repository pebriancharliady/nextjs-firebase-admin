import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import SectionList from "../web-pages/SectionList";

class Dashboard extends Component {
  render() {
    const { webContent } = this.props;
    console.log(webContent);
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m12">
            <SectionList webContent={webContent} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    webContent: state.firestore.ordered.web,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "web" }])
)(Dashboard);
