import React, { Component } from "react";
import { connect } from "react-redux";
import { addContent } from "../../store/actions/webActions";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class HeroSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      ctaButton1: "",
      ctaButton2: "",
      description: "",
      subTitle: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.webContent !== prevProps.webContent) {
      this.setState({
        title: this.props.webContent.content.title,
        description: this.props.webContent.content.description,
        ctaButton1: this.props.webContent.content.ctaButton1,
        ctaButton2: this.props.webContent.content.ctaButton2,
        subTitle: this.props.webContent.content.subTitle,
      });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addContent("heroSection", this.state);
    this.props.history.push("/herosection");
  }

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5
            className="grey-text text-darken-3"
            style={{ marginBottom: "3rem" }}
          >
            Edit Content
          </h5>
          <div className="input-field">
            <textarea
              placeholder="Sub Title"
              id="subTitle"
              type="text"
              className="materialize-textarea"
              onChange={this.handleChange}
              value={this.state.subTitle}
            />

            <label htmlFor="subTitle" className="active">
              Sub Title
            </label>
          </div>
          <div className="input-field">
            <label htmlFor="Title" className="active">
              Title
            </label>
            <textarea
              type="text"
              id="title"
              onChange={this.handleChange}
              value={this.state.title}
              className="materialize-textarea"
            />
          </div>
          <div className="input-field">
            <label htmlFor="description" className="active">
              Description
            </label>
            <textarea
              type="text"
              id="description"
              onChange={this.handleChange}
              value={this.state.description}
              className="materialize-textarea"
            />
          </div>
          <div className="input-field">
            <label htmlFor="ctaButton1" className="active">
              cta-button-1
            </label>
            <textarea
              id="ctaButton1"
              className="materialize-textarea"
              onChange={this.handleChange}
              value={this.state.ctaButton1}
            ></textarea>
          </div>
          <div className="input-field">
            <label htmlFor="ctaButton2" className="active">
              cta-button-2
            </label>
            <textarea
              id="ctaButton2"
              className="materialize-textarea"
              onChange={this.handleChange}
              value={this.state.ctaButton2}
            ></textarea>
          </div>

          <div className="input-field">
            <button className="btn blue lighten-1 z-depth-0">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addContent: (prevState, newContent) =>
      dispatch(addContent(prevState, newContent)),
  };
};

const mapStateToProps = (state) => {
  return {
    webContent: state.firestore.data.web
      ? state.firestore.data.web.heroSection
      : null,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "web" }])
)(HeroSection);
