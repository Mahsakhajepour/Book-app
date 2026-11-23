import { AiFillHeart } from "react-icons/ai";
import styles from "./BookCard.module.css";

function BookCard({ data, isLiked, onToggleLike, onDownload }) {
  const { title, author, image, language, pages, pdf } = data;

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />

      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>

        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>

        <div className={styles.actions}>
          <a href={pdf} target="_blank" rel="noreferrer">
            Read Book
          </a>
          <button type="button" onClick={() => onDownload(data)}>
            Download
          </button>
        </div>
      </div>

      <button
        type="button"
        className={styles.favoriteButton}
        onClick={() => onToggleLike(data)}
        aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
        aria-pressed={isLiked}
      >
        <AiFillHeart color={isLiked ? "red" : "#959595"} fontSize="1.8rem" />
      </button>
    </div>
  );
}

export default BookCard;
