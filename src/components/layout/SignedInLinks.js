import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOutAction } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
  const { signOutAction, profile } = props;
  return (
    <ul className="right">
      <li>
        <a href onClick={signOutAction}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOutAction: () => dispatch(signOutAction()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
