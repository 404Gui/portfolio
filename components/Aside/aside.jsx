import styles from "./styles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faGraduationCap, faEnvelope, faGlobe, faBriefcase  } from '@fortawesome/free-solid-svg-icons';




export default function CardTwo() {

    return (

        <section className={styles.card}>
            <img src="/codeLines.svg" alt="React Logo" className={styles.profileImage}/>
        </section>

    )

}