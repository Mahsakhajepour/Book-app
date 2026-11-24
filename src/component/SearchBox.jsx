import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch }) {
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <button
          type="button"
          onClick={() => setSearch("")}
          aria-label="Clear search"
        >
          ✖
        </button>
      )}
    </div>
  );
}

export default SearchBox;
