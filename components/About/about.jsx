"use client";
import styles from "./About.module.css";
import {
  faCode,
  faLaptopCode,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className={styles.about} id="about">
        <motion.div className={styles.logos} variants={itemVariants}>
          <FontAwesomeIcon icon={faCode} className={styles.icon} />
          <FontAwesomeIcon icon={faLaptopCode} className={styles.icon} />
          <FontAwesomeIcon icon={faProjectDiagram} className={styles.icon} />
        </motion.div>

        <motion.div className={styles.content} variants={itemVariants}>
          <h1 className={styles.title}>{t("title")}</h1>
          <p className={styles.texto}>
            {t.rich("p1", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          <p className={styles.texto}>{t("p2")}</p>

          <p className={styles.texto}>
            {t.rich("p3", {
              span: (chunks) => (
                <span className={styles.destaque}>{chunks}</span>
              ),
            })}
          </p>

          <p className={styles.texto}>{t("p4")}</p>

          <p className={styles.texto}>
            {t.rich("p5", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
