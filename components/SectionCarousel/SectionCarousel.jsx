"use client";
import React from "react";
import MyCarousel from "../Carro/Carro";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";

const SectionCarousel = () => {
  const t = useTranslations("projects");

  return (
    <div className={styles.sectionContainer}>
      <motion.div
        className={styles.sectionWrapper}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className={styles.textSection}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ amount: 0.2 }}
        >
          <h1>{t("title")}</h1>
          <p>{t("description")}</p>
        </motion.div>

        <motion.div
          className={styles.carouselSection}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ amount: 0.2 }}
        >
          <MyCarousel />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionCarousel;
