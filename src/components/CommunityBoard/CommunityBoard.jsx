import "./CommunityBoard.css";
import PrayerCard from "../PrayerCard/PrayerCard";
import { useState } from "react";

function CommunityBoard({ prayerCards, handleCardClick }) {
  const [visibleCount, setVisibleCount] = useState(3);
  const visiblePrayers = prayerCards.slice(0, visibleCount);
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="community">
      <div className="community__content">
        <p className="community__title">DREAM Community Prayer Board</p>
        <p className="community__verse">
          "Therefore confess your sins to each other and pray for each other so
          that you may be healed. The prayer of a righteous person is powerful
          and effective." James 5:16 NIV
        </p>
        <ul className="cards__list">
          {visiblePrayers.map((prayer) => (
            <PrayerCard
              key={prayer._id || `prayer-${prayer.title}-${Date.now()}`}
              prayer={prayer}
              onCardClick={handleCardClick}
            />
          ))}
          {visibleCount < prayerCards.length && (
            <button onClick={handleShowMore} className="cards__show-more">
              Show more
            </button>
          )}
        </ul>
      </div>
    </section>
  );
}

export default CommunityBoard;
