import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink className={classes.navItem} to="/profile">
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink className={classes.navItem} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink className={classes.navItem} to="/users">
          Users
        </NavLink>
      </div>
      <div>
        <NavLink className={classes.navItem} to="/news">
          News
        </NavLink>
      </div>
      <div>
        <NavLink className={classes.navItem} to="/music">
          Music
        </NavLink>
      </div>
      <div>
        <NavLink className={classes.navItem} to="/settings">
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
