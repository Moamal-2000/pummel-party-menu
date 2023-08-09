import styles from "./MainMenu.module.css";
import OptionsContainer from "./OptionsContainer";

const MainMenu = () => {
  return (
    <>
      <header className={styles.header}>
        <h2>Main Menu</h2>
      </header>

      <OptionsContainer />

      <footer className={styles.footer}>
        <h2>Pummel Party</h2>
        <span className={styles.version}>Version 1.11.1a</span>
      </footer>
    </>
  );
};

export default MainMenu;
