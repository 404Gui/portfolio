import styles from "./styles.module.css";
import { ProjectsShowcase } from "../ProjectsShowcase/ProjectsShowcase";

export function SectionCarousel({ t }) {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionWrapper}>
        <div className={styles.quoteContainer}>
          <span className={styles.subline}>
            “A lot of times, people don’t know what they want until you show it to them”
          </span>
          <span className={styles.quoteAuthor}>— Steve Jobs</span>
        </div>

        <div className={styles.carouselSection}>
          <ProjectsShowcase />
        </div>
      </div>
    </section>
  );
}
