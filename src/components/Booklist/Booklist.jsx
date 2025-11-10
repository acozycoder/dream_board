import BibleHeader from "../BibleHeader/BibleHeader";
import "./Booklist.css";
import { Link } from "react-router-dom";

function Booklist({ books }) {
  if (!books) {
    return <div className="books">Loading books...</div>;
  }

  const booksArray = Array.isArray(books) ? books : Object.values(books);

  return (
    <section className="booklist">
      <BibleHeader />
      <p className="booklist__heading">Choose a book below to start reading.</p>
      <div>
        <ul className="booklist__books">
          {booksArray.map((book) => (
            <li key={book.id} className="booklist__book">
              <Link to={`/chapter/${book.id}`} className="booklist__book-title">
                {book.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Booklist;
