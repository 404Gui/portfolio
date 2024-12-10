'use client';
import styles from "./styles.module.css";
import { motion } from 'framer-motion';
import Carousel from "../Carousel/carousel";
import MyCarouselTwo from "../Carro/Carro";

export default function Works() {    

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Anima os filhos em sequência
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
            viewport={{ once: false, amount: 0.2 }} // Animação ocorre sempre que 20% do componente estiver visível
        >
            <motion.div className={styles.title} variants={itemVariants}>
                <h1>Projetos</h1>
                <br />
                <p>Seção dedicada a pequenos projetos</p>
                <motion.div className={styles.decorativeLine} variants={itemVariants}>
                    <span className={styles.dot}></span>
                    <span className={styles.line}></span>
                    <span className={styles.dot}></span>
                </motion.div>
                <br />                
                    <MyCarouselTwo />
            </motion.div>
        </motion.div>
    );
}
