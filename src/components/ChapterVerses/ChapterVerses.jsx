import "./ChapterVerses.css";
import Preloader from "../Preloader/Preloader";

function ChapterVerses({ verses, isLoading }) {
  if (isLoading) {
    return <Preloader />;
  }

  if (!verses.length) {
    return (
      <p className="chapter-verses__title">Select a chapter to view verses</p>
    );
  }

  return (
    <section className="chapter-verses">
      {verses.map((verse) => (
        <div
          key={verse.id}
          className="chapter-verses__verses"
          dangerouslySetInnerHTML={{ __html: verse.content }}
        />
      ))}
    </section>
  );
}

export default ChapterVerses;
