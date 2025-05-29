import styles from "./styles.module.css";
import { MyCarousel } from "../Carro/Carro";

export function SectionCarousel({ t }) {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionWrapper}>
        <div className={styles.textSection}>
          <h1>{t("title")}</h1>
          <p>{t("description")}</p>
        </div>

        <div className={styles.carouselSection}>
          <MyCarousel />
        </div>
      </div>
    </section>
  );
}
