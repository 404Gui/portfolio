"use client";
import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";


const Footer = () => {
  const t = useTranslations("footer");
  
  const scrollToTop = () => {
    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.topRow}>
          <section className={styles.section}>
            <h2 className={styles.title}>{t("aboutTitle")}</h2>
            <p className={styles.pitch}>{t("aboutText")}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.title}>{t("connectTitle")}</h2>
            <div className={styles.socialLinks}>
              <Link
                href="https://github.com/404Gui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.socialIcons}
                  icon={faGithub}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/guilherme-pappi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.socialIcons}
                  icon={faLinkedin}
                />
              </Link>
            </div>
          </section>
        </div>

        <div className={styles.separator} />

        <div className={styles.bottomRow}>
          <p className={styles.copy}>{t("copyright")}</p>
          <button onClick={scrollToTop} className={styles.toTopButton}>
            {t("toTop")}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
