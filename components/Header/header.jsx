"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flag from "react-world-flags";
import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";


export default function Header() {
  const techs = ["TS", "C#", "JS"];
  const [currentTech, setCurrentTech] = useState(techs[0]);
  const [visible, setVisible] = useState(true);
  
  const t = useTranslations("header");

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentTech((prev) => {
          const nextIndex = (techs.indexOf(prev) + 1) % techs.length;
          return techs[nextIndex];
        });
        setVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <span
            className={styles.techs}
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            &lt;{currentTech}/&gt;
          </span>
          <span className={styles.name}>Guilherme Pappi</span>
        </div>
        <nav className={styles.navbar}>
          <ul className={styles.navmenu}>
            <li className={styles.navlinks}>
              <Link href="#home">{t("home")}</Link>
            </li>
            <li className={styles.navlinks}>
              <Link href="#about">{t("about")}</Link>
            </li>
            <li className={styles.navlinks}>
              <Link href="#projects">{t("projects")}</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <nav className={styles.socialnav}>
            <ul className={styles.socialMenu}>
              <li className={styles.socialLinks}>
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
              </li>
              <li className={styles.socialLinks}>
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
              </li>
              <li className={styles.socialLinks}>
                <Link
                  href="https://www.instagram.com/404guii"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className={styles.socialIcons}
                    icon={faInstagram}
                  />
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.languages}>
            <Link href="/" locale="pt" >
              <Flag code="BR" className={styles.flags} />            
            </Link>
            <Link href="/" locale="en">
              <Flag code="US" className={styles.flags} />
            </Link>
          </div>
        </div>
      </header>
      <hr className={styles.divider} />
    </>
  );
}
