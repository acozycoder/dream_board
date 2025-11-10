import "./Footer.css";

import Navigation from "../Navigation/Navigation";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        Developed by Alicia McKinney | BibleApi {currentYear}{" "}
      </p>
      <div className="footer__navigation">
        <Navigation />
      </div>
    </footer>
  );
}

export default Footer;
