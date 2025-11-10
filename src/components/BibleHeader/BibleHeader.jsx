import "./BibleHeader.css";

function BibleHeader() {
  return (
    <section className="bible">
      <h1 className="bible__header">
        The Holy Bible, American Standard Version
      </h1>
      <p className="bible__copyright">
        The Bible generated in the DREAM app uses{" "}
        <a href="https://scripture.api.bible/" target="_blank">
          API.Bible
        </a>{" "}
        to display the Holy Bible, American Standard Version.
      </p>
    </section>
  );
}

export default BibleHeader;
