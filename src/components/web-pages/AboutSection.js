import React, { Component } from "react";
import { connect } from "react-redux";
import { addContent } from "../../store/actions/webActions";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class AboutSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subTitle: "",
      title: "",
      description: "",
      number1: "",
      number2: "",
      number3: "",
      number4: "",
      text1: "",
      text2: "",
      text3: "",
      text4: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.webContent !== prevProps.webContent) {
      this.setState({
        title: this.props.webContent.content.title,
        description: this.props.webContent.content.description,
        subTitle: this.props.webContent.content.subTitle,
        number1: this.props.webContent.content.number1,
        text1: this.props.webContent.content.text1,
        number2: this.props.webContent.content.number2,
        text2: this.props.webContent.content.text2,
        number3: this.props.webContent.content.number3,
        text3: this.props.webContent.content.text3,
        number4: this.props.webContent.content.number4,
        text4: this.props.webContent.content.text4,
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
    this.props.addContent("aboutSection", this.state);
    this.props.history.push("/aboutSection");
  }

  render() {
    console.log(this.state);
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
              id="description"
              className="materialize-textarea"
              onChange={this.handleChange}
              value={this.state.description}
            ></textarea>
          </div>
          <div>
            <label htmlFor="number1">Totals</label>
            <div style={{ display: "flex" }}>
              <div className="input-field" style={{ marginRight: "2rem" }}>
                <label htmlFor="number1" className="active">
                  number1
                </label>
                <textarea
                  id="number1"
                  className="materialize-textarea"
                  onChange={this.handleChange}
                  value={this.state.number1}
                ></textarea>
              </div>
              <div className="input-field">
                <label htmlFor="text1" className="active">
                  text1
                </label>
                <textarea
                  id="text1"
                  className="materialize-textarea"
                  onChange={this.handleChange}
                  value={this.state.text1}
                ></textarea>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="input-field" style={{ marginRight: "2rem" }}>
                <label htmlFor="number2" className="active">
                  number2
                </label>
                <textarea
                  id="number2"
                  className="materialize-textarea"
                  onChange={this.handleChange}
                  value={this.state.number2}
                ></textarea>
              </div>
              <div className="input-field">
                <label htmlFor="text2" className="active">
                  text2
                </label>
                <textarea
                  id="text2"
                  className="materialize-textarea"
                  onChange={this.handleChange}
                  value={this.state.text2}
                ></textarea>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="input-field" style={{ marginRight: "2rem" }}>
                <label htmlFor="number3" className="active">
                  number3
                </label>
                <textarea
                  id="number3"
                  className="materialize-textarea"
                  onChange={this.handleChange}
                  value={this.state.number3}
                ></textarea>
              </div>
              <div className="input-field">
                <label htmlFor="text3" className="active">
                  text3
                </label>
                <textarea
                  id="text3"
                  className="materialize-textarea"
                  onChange={this.handleChange}
                  value={this.state.text3}
                ></textarea>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="input-field" style={{ marginRight: "2rem" }}>
                <label htmlFor="number4" className="active">
                  number4
                </label>
                <textarea
                  id="number4"
                  className="materialize-textarea"
                  onChange={this.handleChange}
                  value={this.state.number4}
                ></textarea>
              </div>
              <div className="input-field">
                <label htmlFor="text4" className="active">
                  text4
                </label>
                <textarea
                  id="text4"
                  className="materialize-textarea"
                  onChange={this.handleChange}
                  value={this.state.text4}
                ></textarea>
              </div>
            </div>
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
      ? state.firestore.data.web.aboutSection
      : null,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "web" }])
)(AboutSection);
