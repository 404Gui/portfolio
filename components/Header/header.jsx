import styles from "./Header.module.css";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

import Flag from "react-world-flags";
import { Link } from "../../src/i18n/navigation";
import { Terminal } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher/LanguageSwitcher";
import { MobileMenu } from "./MobileSocialMenus/MobileMenu";

export function Header({ t }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Terminal className={styles.techs} />
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

      <div className={styles.mobileMenu}>
        <MobileMenu />
      </div>

      <div className={styles.actions}>
        <div className={styles.socialWrapper}>
          <nav className={styles.socialnav}>
            <ul className={styles.socialMenu}>
              <li className={styles.socialLinks}>
                <Link
                  href="https://github.com/404Gui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandGithub size={24} className={styles.socialIcons} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/guilherme-pappi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandLinkedin size={24} className={styles.socialIcons} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.languagesWrapper}>
        <div className={styles.languages}>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
