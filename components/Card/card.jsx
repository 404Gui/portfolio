import styles from "./styles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faGraduationCap, faEnvelope, faGlobe, faBriefcase  } from '@fortawesome/free-solid-svg-icons';


export default function Card() {

    return (

        <section className={styles.card}>
            <img src="/eu_foto.jpg" alt="Profile Image" className={styles.profileImage}/>
            <h2 className={styles.cardNome}>Guilherme</h2>
            <p className={styles.carrer}>Desenvolvedor Front-end</p>
            <ul>
                <li>
                <FontAwesomeIcon icon={faBriefcase} width={15} height={15} />
                Dev Jr. na<span className={styles.empresa}>2Clix Tecnologias</span>
                    
                </li>
                <li>
                    <FontAwesomeIcon icon={faGraduationCap} width={15} height={15}/>
                    Gestão de T.I - Fatec Assis
                </li>

                <li>
                <FontAwesomeIcon icon={faEnvelope} width={15} height={15}/>
                    guilhermepappi@gmail.com
                    
                </li>

                <li>
                <FontAwesomeIcon icon={faGlobe} width={15} height={15}/>
                    pappi.dev
                </li>
                
                <li>
                <FontAwesomeIcon icon={faLocationDot} width={15} height={15} />
                    Brasil
                    
                </li>
                
            </ul>
            <div className={styles.skills}>
            <span>HTML</span>
            <span>CSS</span>
            <span>JS</span>
            <span>REACT</span>
            </div>
            {/* <button className={styles.downloadBtn}>Download CV</button> */}
        </section>

    )

    



}