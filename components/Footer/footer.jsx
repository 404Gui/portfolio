"use client";
import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
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
            <h2 className={styles.title}>Sobre</h2>
            <p className={styles.pitch}>
              Desenvolvo soluções web modernas, performáticas e sob medida para
              transformar ideias em experiências digitais incríveis.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.title}>Conecte-se</h2>
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
          <p className={styles.copy}>
            © 2025 Guilherme Pappi. Todos os direitos reservados.
          </p>
          <button onClick={scrollToTop} className={styles.toTopButton}>
            Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
