import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { deleteProject, editProject } from "../../store/actions/projectActions";
import moment from "moment";

class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      showForm: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.editProject(this.props.project, this.state);
    this.props.history.push("/");
  }

  handleDelete() {
    this.props.deleteProject(this.props.projectId);
    this.props.history.push("/");
  }

  render() {
    const { project } = this.props;
    if (project) {
      return (
        <>
          {this.state.showForm ? (
            <div className="container">
              <form className="white" onSubmit={this.handleEdit}>
                <h5 className="grey-text text-darken-3">Edit Project</h5>
                <div className="input-field">
                  <label htmlFor="title">Project Title</label>
                  <input type="text" id="title" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="content">Project Content</label>
                  <textarea
                    id="content"
                    className="materialize-textarea"
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <div className="input-field">
                  <button className="btn pink lighten-1 z-depth-0">Edit</button>
                </div>
              </form>
            </div>
          ) : (
            <div className="container section project-details">
              <div className="card z-depth-0">
                <div className="card-content">
                  <span className="card-title">{project.title}</span>
                  <p>{project.content}</p>
                  <div className="card-action gret lighten-4 grey-text">
                    <div>
                      Posted by {project.authorFirstName}{" "}
                      {project.authorLastName}
                    </div>

                    <div>{moment(project.createdAt.toDate()).calendar()}</div>
                  </div>
                </div>
                <button
                  className="waves-effect waves-light btn"
                  onClick={this.handleDelete}
                >
                  Delete
                </button>
                <button
                  className="waves-effect waves-light btn"
                  onClick={this.toggleEdit}
                >
                  Edit
                </button>
              </div>
            </div>
          )}
        </>
      );
    } else {
      return <div className="container center">Loding Project ....</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  return {
    project: project,
    projectId: id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (projectId) => dispatch(deleteProject(projectId)),
    editProject: (prevProject, newProject) =>
      dispatch(editProject(prevProject, newProject)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
