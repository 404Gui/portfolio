import styles from "./styles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faGraduationCap, faEnvelope, faGlobe, faBriefcase  } from '@fortawesome/free-solid-svg-icons';




export default function CardTwo() {

    return (

        <section className={styles.card}>
            <img src="/codeLines.svg" alt="React Logo" className={styles.profileImage}/>         
            {/* <img src="/jsLogo.png" alt="React Logo" className={styles.profileImage}/>         
            <img src="/htmlLogo.svg" alt="React Logo" className={styles.profileImage}/>         
            <img src="/cssLogo.svg" alt="React Logo" className={styles.profileImage}/>          */}
            {/* <span>HTML</span> <br />
            <span>CSS</span> <br />
            <span>JS</span> <br />
            <span>REACT</span> */}
            {/* <button className={styles.downloadBtn}>Download CV</button> */}
        </section>

    )

}