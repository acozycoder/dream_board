import "./Header.css";
import Logo from "../../images/Logo.svg";
import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";

function Header({ handleAddPrayer }) {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={Logo} alt="dream logo" />
      </NavLink>

      <div>
        <div className="header__nav-container">
          <Navigation />
          <button
            onClick={handleAddPrayer}
            type="button"
            className="header__add-button"
          >
            + Add a Prayer
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
