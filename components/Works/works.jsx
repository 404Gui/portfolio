'use client';
import styles from "./styles.module.css";
import { motion } from 'framer-motion';
import SectionWithCarousel from "../SectionsAndCarro";

export default function Works() {    

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
          className={styles.div}
          id="works"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div className={styles.title} variants={itemVariants} id="projects">
            <h1>Projetos</h1>
            <br />
            <p>Seção dedicada a pequenos projetos</p>
            <motion.div className={styles.arrowsContainer} variants={itemVariants}>
              <motion.div
                className={styles.arrow}
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                ↓
              </motion.div>
            </motion.div>
            <br />
          </motion.div>
          {/* <SectionWithCarousel /> */}
        </motion.div>
    );
}
