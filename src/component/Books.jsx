import { useState } from "react";

import SearchBox from "./SearchBox";
import SideCard from "./SideCard";
import BookCard from "./BookCard";
import DownloadModal from "./DownloadModal";
import { books as bookData } from "../constants/mockData";
import styles from "./Books.module.css";

function Books() {
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const query = search.trim().toLowerCase();
  const books = query
    ? bookData.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query),
      )
    : bookData;

  const toggleLike = (book) => {
    setLiked((prev) =>
      prev.some((i) => i.id === book.id)
        ? prev.filter((i) => i.id !== book.id)
        : [...prev, book],
    );
  };

  const confirmDownload = () => {
    const link = document.createElement("a");
    link.href = selectedBook.pdf;
    link.download = selectedBook.title;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.click();
    setSelectedBook(null);
  };

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} />

      <div className={styles.container}>
        <div className={styles.cards}>
          {books.length ? (
            books.map((book) => (
              <BookCard
                key={book.id}
                data={book}
                isLiked={liked.some((i) => i.id === book.id)}
                onToggleLike={toggleLike}
                onDownload={setSelectedBook}
              />
            ))
          ) : (
            <p className={styles.empty}>No books found.</p>
          )}
        </div>

        <div className={styles.favorite}>
          <h4>Favorite {liked.length > 0 && `(${liked.length})`}</h4>
          {liked.length ? (
            liked.map((book) => <SideCard key={book.id} data={book} />)
          ) : (
            <p className={styles.emptyFav}>
              Tap the heart on a book to add it here.
            </p>
          )}
        </div>
      </div>

      <DownloadModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
        onConfirm={confirmDownload}
      />
    </>
  );
}

export default Books;
