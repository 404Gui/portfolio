"use client";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import SectionCarousel from "../SectionCarousel/SectionCarousel";
import { useTranslations } from "next-intl";

export default function Works() {
  const t = useTranslations("header");

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
      className={styles.div}
      id="works"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        className={styles.title}
        variants={itemVariants}
        id="projects"
      >
        <h1 className={styles.glowTitle}>{t("projects")}</h1>
        <span className={styles.subline}>
          “A lot of times, people don’t know what they want until you show it to
          them”
        </span>
        <span className={styles.quoteAuthor}>— Steve Jobs</span>

        <motion.div className={styles.arrowsContainer} variants={itemVariants}>
          <motion.div
            className={styles.arrow}
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            <FiChevronDown size={40} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
