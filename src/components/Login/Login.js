import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  return (
    <form>
      <div>
        <input placeholder="Email" />
      </div>
      <div>
        <input placeholder="Password" type="password" />
      </div>
      <div>
        <input type="checkbox" /> Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const Login = ({ isAuth }) => {
  if (isAuth) {
    return <Navigate replace to="/profile" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
