import "./Main.css";
import AboutInfo from "../AboutInfo/AboutInfo";
import CommunityBoard from "../CommunityBoard/CommunityBoard";

function Main({ prayerCards, handleCardClick }) {
  return (
    <main className="main">
      <CommunityBoard
        prayerCards={prayerCards}
        handleCardClick={handleCardClick}
      />
      <AboutInfo />
    </main>
  );
}

export default Main;
