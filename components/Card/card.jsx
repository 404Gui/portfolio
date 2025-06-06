import styles from "./Card.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faGraduationCap, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Card() {
    const skillsIcons = {
        TYPESCRIPT: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        JS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        REACT: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        Sass: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
        CSHARP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    };
    const skills = Object.keys(skillsIcons);

      const t = useTranslations("card");
    

    return (
      <section className={styles.card}>
        <div className="flex justify-center">
          <Image
            src="/eu-foto2.jpg"
            alt="Profile"
            className={styles.profileImage}
            quality={100} 
            width={300} 
            height={300} 
            priority={"true"}
          />
        </div>
        <h2 className={styles.cardNome}>Guilherme</h2>
        <p className={styles.carrer}>{t("carrerInfo")}</p>
        <ul className={styles.infoList}>
          <li>
            <FontAwesomeIcon icon={faBriefcase} />
            {t("info1")}
          </li>
          <li>
            <FontAwesomeIcon icon={faGraduationCap} /> {t("info2")}
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> {t("info3")}
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationDot} />
            {t("info4")}
          </li>
        </ul>
        <div className={styles.skillsContainer}>
          <div className={styles.skillsWrapper}>
            {skills.concat(skills).map((skill, index) => (
              <img
                key={index}
                src={skillsIcons[skill]}
                alt={skill}
                className={styles.skillIcon}
              />
            ))}
          </div>
        </div>
      </section>
    );
}
