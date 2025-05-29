import styles from "./styles.module.css";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flag from "react-world-flags";
import { Link } from "../../src/i18n/navigation";

export function Header({ t }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <span className={styles.techs}>&lt;TS/&gt;</span>
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
        <div className={styles.languagesWrapper}>
          <span className={styles.label}>{t("idioma")}</span>
          <div className={styles.languages}>
            <Link href="/" locale="pt">
              <Flag code="BR" className={styles.flags} />
            </Link>
            <Link href="/" locale="en">
              <Flag code="US" className={styles.flags} />
            </Link>
          </div>
        </div>

        <div className={styles.socialWrapper}>
          <span className={styles.label}>{t("rede")}</span>
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
