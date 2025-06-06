import styles from "./About.module.css";
import {
  faCode,
  faLaptopCode,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

export function About({ t }) {
  const icons = [faCode, faLaptopCode, faProjectDiagram];

  return (
    <div className={styles.about} id="about">
      <div className={styles.content}>
        <h1 className={styles.title}>{t("title")}</h1>

        <p className={styles.texto}>
          {t.rich("p1", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>

        <p className={styles.texto}>
          {t.rich("p2", {
            span: (chunks) => <span className={styles.destaque}>{chunks}</span>,
          })}
        </p>

        <p className={styles.texto}>{t("p3")}</p>

        <p className={styles.texto}>{t("p4")}</p>

        <p className={styles.texto}>
          {t.rich("p5", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>

        <p className={styles.texto}>
          {t.rich("p6", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
      </div>
    </div>
  );
}
