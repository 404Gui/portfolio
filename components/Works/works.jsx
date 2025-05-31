import styles from "./styles.module.css";
import { FiChevronDown } from "react-icons/fi";

export function Works({ t }) {
  return (
    <div className={styles.div} id="works">
      <div className={styles.title} id="projects">
        <h1 className={styles.glowTitle}>{t("title")}</h1>
        
        {/* <span className={styles.subline}>
          “A lot of times, people don’t know what they want until you show it to them”
        </span>
        <span className={styles.quoteAuthor}>— Steve Jobs</span> */}

        <div className={styles.arrowsContainer}>
          <div className={styles.arrow}>
            <FiChevronDown size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
