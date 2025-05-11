"use client";
import React from "react";
import MyCarousel from "../Carro/Carro";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";

const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const SectionCarousel = () => {
  const t = useTranslations("projects");

  return (
    <motion.section
      className={styles.sectionContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div className={styles.sectionWrapper} variants={fadeInUp}>
        <motion.div
          className={styles.textSection}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          <motion.h1 whileHover={{ scale: 1.05 }}>
            {t("title")}
          </motion.h1>
          <motion.p transition={{ delay: 0.2 }}>{t("description")}</motion.p>
        </motion.div>

        <motion.div
          className={styles.carouselSection}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <MyCarousel />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SectionCarousel;
