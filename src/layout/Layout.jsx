import styles from "./Layout.module.css";
import ThemeToggle from "../component/ThemeToggle";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>

        <div className={styles.headerActions}>
          <p>
            <a href="https://botostart.ir" target="_blank" rel="noreferrer">
              Botostart
            </a>
            {" | React.js Full Course"}
          </p>

          <ThemeToggle />
        </div>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        <p>Developed by Mahi with 🤍</p>
      </footer>
    </>
  );
}

export default Layout;
