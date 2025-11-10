import defaultPrayerCards from "../utils/prayerCards";

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const getPrayers = () => {
  const savedPrayers = localStorage.getItem("prayers");
  return Promise.resolve(
    savedPrayers ? JSON.parse(savedPrayers) : defaultPrayerCards
  );
};

const addPrayer = ({ title, prayer, imageUrl }) => {
  const newPrayer = {
    _id: Date.now(),
    title,
    prayer,
    imageUrl,
  };

  const savedPrayers = localStorage.getItem("prayers");
  const prayers = savedPrayers ? JSON.parse(savedPrayers) : defaultPrayerCards;

  const updatedPrayers = [newPrayer, ...prayers];

  localStorage.setItem("prayers", JSON.stringify(updatedPrayers));

  return Promise.resolve(newPrayer);
};

export { checkResponse, getPrayers, addPrayer };
