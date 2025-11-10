import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";

import AddPrayerModal from "../AddPrayerModal/AddPrayerModal";
import PrayerModal from "../PrayerModal/PrayerModal";
import Booklist from "../Booklist/Booklist";
import Chapters from "../Chapters/Chapters";

import CommunityBoard from "../CommunityBoard/CommunityBoard";

import { getBooks } from "../../utils/BibleApi";
import { API_KEY, bibleVersionID } from "../../utils/constants";
import { addPrayer, getPrayers } from "../../utils/api";

function App() {
  const [prayerCards, setPrayerCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [books, setBooks] = useState([]);
  const [chapters, setChapters] = useState({});
  const [verse] = useState([]);

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (prayer) => {
    setActiveModal("preview");
    setSelectedCard(prayer);
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    const handleOverlay = (e) => {
      if (e.target.classList.contains("modal")) {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleOverlay);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleOverlay);
    };
  }, [activeModal]);

  function handleSubmit(request) {
    setIsLoading(true);
    {
      isLoading && <Preloader />;
    }

    request()
      .then(closeActiveModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  const handleAddPrayer = () => {
    setActiveModal("add-prayer");
  };

  const handleAddPrayerModalSubmit = ({ title, prayer, imageUrl }) => {
    const makeRequest = () => {
      return addPrayer({ title, prayer, imageUrl }).then((prayer) => {
        setPrayerCards([prayer, ...prayerCards]);
      });
    };

    handleSubmit(makeRequest);
  };

  useEffect(() => {
    setIsLoading(true);

    getPrayers()
      .then((data) => {
        data.sort((a, b) => b._id - a._id);
        setPrayerCards(data);
      })
      .catch(console.error);

    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);

    getBooks(bibleVersionID, API_KEY)
      .then((booksData) => {
        setBooks(booksData);
      })
      .catch((error) => {
        console.error("Failed to fetch books:", error);
        setBooks([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddPrayer={handleAddPrayer} />

        <Routes>
          <Route
            path="/"
            element={
              <Main
                prayerCards={prayerCards}
                handleAddPrayer={handleAddPrayer}
                handleCardClick={handleCardClick}
                verse={verse}
              />
            }
          />
          <Route path="/about" element={<About prayerCards={prayerCards} />} />
          <Route
            path="/bible"
            element={<Booklist books={books} chapters={chapters} />}
          />
          <Route
            path="/chapter/:bookId"
            element={
              <Chapters
                chapters={chapters}
                setChapters={setChapters}
                books={books}
              />
            }
          />

          <Route
            path="/community"
            element={
              <CommunityBoard
                handleCardClick={handleCardClick}
                prayerCards={prayerCards}
              />
            }
          />
        </Routes>

        <Footer />
      </div>
      {activeModal === "add-prayer" && (
        <AddPrayerModal
          onClose={closeActiveModal}
          isLoading={isLoading}
          onAddPrayerModalSubmit={handleAddPrayerModalSubmit}
        />
      )}
      <PrayerModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeActiveModal}
      />
    </div>
  );
}

export default App;
