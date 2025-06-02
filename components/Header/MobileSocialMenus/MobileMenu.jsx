"use client";

import { useState } from "react";
import { Menu, ArrowLeft } from "lucide-react";
import styles from "./MobileMenu.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("header");

  return (
    <>
      <button className={styles.burger} onClick={() => setMenuOpen(true)}>
        <Menu size={28} />
      </button>

      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.open : styles.closed
        }`}
      >
        <button
          className={styles.backButton}
          onClick={() => setMenuOpen(false)}
        >
          <ArrowLeft size={24} />
        </button>

        <nav className={styles.navbar}>
          <ul className={styles.navmenu}>
            <li>
              <Link href="#home" onClick={() => setMenuOpen(false)}>
                {t("home")}
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={() => setMenuOpen(false)}>
                {t("about")}
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={() => setMenuOpen(false)}>
                {t("projects")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
