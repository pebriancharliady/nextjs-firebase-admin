import { Link } from "react-router-dom";
import heroSection from "../../images/hero-section.jpg";

const SectionList = () => {
  return (
    <div className="project-list section" style={{ marginTop: "2rem" }}>
      <div className="row">
        <div className="col s6">
          <div>
            <h5
              className="blue-text text-darken-4"
              style={{ marginBottom: "2rem" }}
            >
              Hero Section
            </h5>
            <Link to="/herosection">
              <button className="waves-effect waves-light btn blue">
                Edit Content
              </button>
            </Link>
          </div>
        </div>
        <div className="col s6">
          <img src={heroSection} width="500" alt="" className="z-depth-2" />
        </div>
      </div>
      <div className="row">
        <div className="col s6">
          <div>
            <h5
              className="blue-text text-darken-4"
              style={{ marginBottom: "2rem" }}
            >
              About Section
            </h5>
            <Link to="/aboutsection">
              <button className="waves-effect waves-light btn blue">
                Edit Content
              </button>
            </Link>
          </div>
        </div>
        <div className="col s6">
          <img src={heroSection} width="500" alt="" className="z-depth-2" />
        </div>
      </div>
    </div>
  );
};

export default SectionList;
