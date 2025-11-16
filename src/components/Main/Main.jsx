import "./Main.css";
import AboutInfo from "../AboutInfo/AboutInfo";
import CommunityBoard from "../CommunityBoard/CommunityBoard";

function Main({ isLoggedIn, prayerCards, handleCardClick }) {
  return (
    <main className="main">
      {isLoggedIn ? (
        <CommunityBoard
          prayerCards={prayerCards}
          handleCardClick={handleCardClick}
        />
      ) : (
        <div>
          <CommunityBoard
            prayerCards={prayerCards}
            handleCardClick={handleCardClick}
          />
          <AboutInfo />
        </div>
      )}
    </main>
  );
}

export default Main;
