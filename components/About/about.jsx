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
                        E aí! Meu nome é Guilherme Pappi sempre gostei de tecnologia, programação criação de sites e sou um apoiador da cultura open source. Criei este portfólio para compartilhar meus trabalhos, ideias e, quem sabe, conectar com outras pessoas que também curtem tecnologia e inovação. Além disso, foi uma forma de me desafiar e construir algo do zero, colocando em prática o que tenho aprendido com desenvolvimento front-end e back-end.

                        <br /> <br />

                        Tenho experiência com desenvolvimento web e, atualmente, estou atuando como desenvolvedor júnior na 2Clix, uma empresa que oferece soluções tecnológicas para a gestão inteligente de contact centers. Essa oportunidade tem sido fundamental para meu aprendizado e crescimento profissional, permitindo-me trabalhar com tecnologias como ASP.NET e contribuir em projetos desafiadores.
                        
                        <br /> <br />
                        </p>

                    <p className={styles.code}>&lt;p&gt;</p>
                </motion.div>
            </div>
        </motion.div>
    );
}
