import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";

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
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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

  const handleRegister = () => {
    setActiveModal("register");
  };

  const handleRegisterModalSubmit = (credentials) => {
    setIsLoading(true);

    const mockUser = {
      id: 1,
      name: "User Name",
      email: credentials.email,
    };

    setCurrentUser(mockUser);
    setIsLoggedIn(true);

    setIsLoading(false);

    closeActiveModal();
  };

  const handleLogin = () => {
    setActiveModal("login");
  };

  const handleLoginModalSubmit = (credentials) => {
    setIsLoading(true);

    const mockUser = {
      id: 1,
      name: "User Name",
      email: credentials.email,
    };

    setCurrentUser(mockUser);
    setIsLoggedIn(true);

    setIsLoading(false);

    closeActiveModal();
  };

  const handleSwitch = () => {
    if (activeModal === "register") {
      setActiveModal("login");
    }

    if (activeModal === "login") {
      setActiveModal("register");
    }
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
      <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
        <div className="page__content">
          <Header
            handleAddPrayer={handleAddPrayer}
            isLoggedIn={isLoggedIn}
            handleRegister={handleRegister}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  isLoggedIn={isLoggedIn}
                  prayerCards={prayerCards}
                  handleAddPrayer={handleAddPrayer}
                  handleCardClick={handleCardClick}
                  verse={verse}
                />
              }
            />
            <Route
              path="/about"
              element={<About prayerCards={prayerCards} />}
            />
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

          <Footer isLoggedIn={isLoggedIn} />
        </div>
      </CurrentUserContext.Provider>
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
      {activeModal === "register" && (
        <RegisterModal
          activeModal={activeModal}
          onClose={closeActiveModal}
          onRegisterModalSubmit={handleRegisterModalSubmit}
          isLoading={isLoading}
          onSwitch={handleSwitch}
        />
      )}
      {activeModal === "login" && (
        <LoginModal
          activeModal={activeModal}
          onClose={closeActiveModal}
          onLoginModalSubmit={handleLoginModalSubmit}
          isLoading={isLoading}
          onSwitch={handleSwitch}
        />
      )}
    </div>
  );
}

export default App;
