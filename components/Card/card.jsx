import styles from "./styles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faGraduationCap, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';

export default function Card() {
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

    return (
        <section className={styles.card}>
            <img src="/eu_foto.jpg" alt="Profile" className={styles.profileImage} />
            <h2 className={styles.cardNome}>Guilherme</h2>
            <p className={styles.carrer}>Desenvolvedor Full-stack Jr.</p>
            <ul className={styles.infoList}>
                <li><FontAwesomeIcon icon={faBriefcase} /> 2024 - Atual (Dev. Front-end na 2Clix)</li>
                <li><FontAwesomeIcon icon={faGraduationCap} /> Gestão da Tecnologia da Informação</li>
                <li><FontAwesomeIcon icon={faEnvelope} /> guilhermepappi@gmail.com</li>
                <li><FontAwesomeIcon icon={faLocationDot} /> São Paulo</li>
            </ul>
            <div className={styles.skillsContainer}>
                <div className={styles.skillsWrapper}>
                    {skills.concat(skills).map((skill, index) => (
                        <img key={index} src={skillsIcons[skill]} alt={skill} className={styles.skillIcon} />
                    ))}
                </div>
            </div>
        </section>
    );
}
