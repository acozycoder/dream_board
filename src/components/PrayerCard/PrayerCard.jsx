import "./PrayerCard.css";

function PrayerCard({ prayer, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(prayer);
  };

  return (
    <li className="prayer__card">
      <h2 className="prayer__name">{prayer.title}</h2>

      <img
        src={prayer.imageUrl}
        alt={prayer.title}
        className="prayer__image"
        onClick={handleCardClick}
      />
    </li>
  );
}

export default PrayerCard;
