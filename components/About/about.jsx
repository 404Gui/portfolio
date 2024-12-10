'use client';
import styles from "./styles.module.css";
import { faCode, faLaptopCode, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';

export default function About() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className={styles.about} id="sobre-mim">
                <motion.div className={styles.logos} variants={itemVariants}>
                    <FontAwesomeIcon icon={faCode} className={styles.icon} />
                    <FontAwesomeIcon icon={faLaptopCode} className={styles.icon} />
                    <FontAwesomeIcon icon={faProjectDiagram} className={styles.icon} />
                </motion.div>

                <motion.div className={styles.content} variants={itemVariants}>
                    <h1 className={styles.title}>Sobre mim</h1>
                    <p className={styles.code}>&lt;p&gt;</p> <br />
                    <p className={styles.texto}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et erat justo. Donec et purus blandit, feugiat erat sed, aliquet lorem. Sed ultrices maximus tempor. Cras nulla ex, lobortis at feugiat non, pellentesque eu quam. Maecenas euismod bibendum ultricies. Suspendisse eget urna eget justo sagittis vestibulum. Phasellus cursus eros vitae justo ultrices aliquet. Nunc facilisis mollis quam, a fermentum leo. Aenean accumsan pharetra velit vel feugiat. Nulla ac egestas ante. Morbi sed porttitor arcu. Duis blandit rhoncus risus, vel accumsan dui finibus sed. <br /> <br />

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et erat justo. Donec et purus blandit, feugiat erat sed, aliquet lorem. Sed ultrices maximus tempor. Cras nulla ex, lobortis at feugiat non, pellentesque eu quam. Maecenas euismod bibendum ultricies. Suspendisse eget urna eget justo sagittis vestibulum. Phasellus cursus eros vitae justo ultrices aliquet. Nunc facilisis mollis quam, a fermentum leo. Aenean accumsan pharetra velit vel feugiat. Nulla ac egestas ante. Morbi sed porttitor arcu. Duis blandit rhoncus risus, vel accumsan dui finibus sed.
                    </p> <br />
                    <p className={styles.code}>&lt;p&gt;</p>
                </motion.div>
            </div>
        </motion.div>
    );
}
