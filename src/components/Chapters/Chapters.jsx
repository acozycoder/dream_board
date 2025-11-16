import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BibleHeader from "../BibleHeader/BibleHeader";
import "./Chapters.css";
import { getChapters, getChapterVerses } from "../../utils/BibleApi";
import { API_KEY, bibleVersionID } from "../../utils/constants";
import ChapterVerses from "../ChapterVerses/ChapterVerses";

function Chapters({ chapters, setChapters }) {
  const { bookId } = useParams();
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [verses, setVerses] = useState([]);
  const [isLoadingVerses, setIsLoadingVerses] = useState(false);

  useEffect(() => {
    if (bookId) {
      getChapters(bibleVersionID, API_KEY, bookId)
        .then((chaptersData) => {
          setChapters(chaptersData);
        })
        .catch((error) => {
          console.error("Failed to fetch chapters:", error);
          setChapters([]);
        });
    }
  }, [bookId, setChapters]);

  const handleChapterClick = (chapterId) => {
    setSelectedChapter(chapterId);
    setIsLoadingVerses(true);

    getChapterVerses(bibleVersionID, API_KEY, chapterId)
      .then((versesData) => {
        console.log(versesData);
        setVerses(versesData);
      })
      .catch((error) => {
        console.error("Failed to fetch verses:", error);
        setVerses([]);
      })
      .finally(() => {
        setIsLoadingVerses(false);
      });
  };

  if (!chapters) {
    return <div className="chapters">Loading chapters...</div>;
  }

  const chaptersArray = Array.isArray(chapters)
    ? chapters
    : Object.values(chapters);

  return (
    <section className="chapterlist">
      <BibleHeader />
      <p className="chapterlist__heading">Choose a chapter below</p>
      <div>
        <ul className="chapterlist__chapters">
          {chaptersArray.map((chapter) => (
            <li
              key={chapter.id}
              className={`chapterlist__chapter ${
                selectedChapter === chapter.id
                  ? "chapterlist__chapter-selected"
                  : ""
              }`}
            >
              <button
                onClick={() => handleChapterClick(chapter.id)}
                className="chapterlist__button"
              >
                {chapter.number}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ChapterVerses verses={verses} isLoading={isLoadingVerses} />
    </section>
  );
}

export default Chapters;
