import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoggedIn }) {
  return (
    <section className="navigation">
      {isLoggedIn ? (
        <div className="navigation_links">
          <NavLink to="/community">
            <p className="navigation__link">Community Board</p>
          </NavLink>
          <NavLink to="/bible">
            <p className="navigation__link">Bible</p>
          </NavLink>
          <NavLink to="/about">
            <p className="navigation__link">About</p>
          </NavLink>
        </div>
      ) : (
        <div className="navigation_links">
          <NavLink to="/bible">
            <p className="navigation__link">Bible</p>
          </NavLink>
          <NavLink to="/about">
            <p className="navigation__link">About</p>
          </NavLink>
        </div>
      )}
    </section>
  );
}

export default Navigation;
