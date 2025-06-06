import Link from "next/link";
import styles from "./Footer.module.css";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";


export function Footer({ t }) {
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
                <IconBrandGithub size={24} /> 
                
              </Link>
              <Link
                href="https://www.linkedin.com/in/guilherme-pappi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin size={24} />
              </Link>
            </div>
          </section>
        </div>

        <div className={styles.separator} />

        <div className={styles.bottomRow}>
          <p className={styles.copy}>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
