import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header({ isAuth, login, logout }) {
  return (
    <header className={classes.header}>
      <img
        alt="logo"
        src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-abstract-s-logo-design_460848-13703.jpg"
      />
      <div className={classes.loginBlock}>
        {!isAuth ? (
          <NavLink to={"/login"}>Login</NavLink>
        ) : (
          <div>
            {login} - <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
