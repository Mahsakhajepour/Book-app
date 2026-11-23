import styles from "./DownloadModal.module.css";

function DownloadModal({ book, onClose, onConfirm }) {
  if (!book) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3>Download Book</h3>
        <p>
          Are you sure you want to download <strong>{book.title}</strong>?
        </p>
        <div className={styles.actions}>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className={styles.confirm} onClick={onConfirm}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default DownloadModal;
