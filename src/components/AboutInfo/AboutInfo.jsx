import "./AboutInfo.css";
import Logo from "../../images/Logo.svg";

function AboutInfo() {
  return (
    <section className="about__section">
      <img className="about__image" src={Logo} alt="dream logo" />
      <p className="about__title">What is DREAM?</p>
      <p className="about__info">
        DREAM is a digital platform designed to support believers like you in
        their prayer life through a digital prayer board. Inspired by prayerful
        women in the Bible; Deborah, Ruth, Esther, Anna, and Mary, DREAM gives
        you access to a community integrated system allowing you to share your
        prayers and pray for others as well.
      </p>
      <div className="about__cards">
        <div className="about__card">
          <p className="about__card-title">Community</p>
          <p className="about__card-info">
            View prayers from the DREAM community and take time to pray with
            them.
          </p>
        </div>
        <div className="about__card about__card-middle">
          <p className="about__card-title">Personal</p>
          <p className="about__card-info">
            Allow others to pray for you by sharing prayers on the community
            board.
          </p>
        </div>
        <div className="about__card">
          <p className="about__card-title">Daily Bread</p>
          <p className="about__card-info">
            Recieve your daily bread by accessing the Bible, made available with
            Bible.API.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutInfo;
