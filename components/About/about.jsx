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

export function About() {
  const t = useTranslations("about");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 150,
      },
    },
    whileHover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 },
    },
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
          {[faCode, faLaptopCode, faProjectDiagram].map((icon, idx) => (
            <motion.div
              key={idx}
              variants={iconVariants}
              className={styles.iconWrapper}
            >
              <FontAwesomeIcon icon={icon} className={styles.icon} />
            </motion.div>
          ))}
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
