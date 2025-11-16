import "./Header.css";
import Logo from "../../images/Logo.svg";
import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";

function Header({ handleAddPrayer, isLoggedIn, handleRegister }) {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={Logo} alt="dream logo" />
      </NavLink>
      {isLoggedIn ? (
        <div>
          <div className="header__nav-container">
            <Navigation isLoggedIn={isLoggedIn} />
            <button
              onClick={handleAddPrayer}
              type="button"
              className="header__add-button"
            >
              + Add a Prayer
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="header__nav-container">
            <Navigation isLoggedIn={isLoggedIn} />
            <button
              onClick={handleRegister}
              type="button"
              className="header__auth-button"
            >
              Create a board
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
