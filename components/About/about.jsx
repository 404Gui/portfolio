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
            <div className={styles.about} id="about">
                <motion.div className={styles.logos} variants={itemVariants}>
                    <FontAwesomeIcon icon={faCode} className={styles.icon} />
                    <FontAwesomeIcon icon={faLaptopCode} className={styles.icon} />
                    <FontAwesomeIcon icon={faProjectDiagram} className={styles.icon} />
                </motion.div>

                <motion.div className={styles.content} variants={itemVariants}>
                    <h1 className={styles.title}>Sobre mim</h1>
                    <p className={styles.code}>&lt;p&gt;</p> <br />
                    <p className={styles.texto}>
                    👋 Olá! Eu me chamo Guilherme Pappi, sou desenvolvedor apaixonado por tecnologia, desenvolvimento web, criação de aplicações e tudo que envolve programação. Tenho 2 anos de experiencia com desenvolvimento e sou um grande apoiador da cultura open source. Criei este portfólio para compartilhar meus trabalhos, ideias e, quem sabe, conectar com outras pessoas que também curtem tecnologia e inovação.
                        <br /> <br />

                        Pode-se dizer que sou um grande entusiasta da programação. Gosto de explorar tecnologias e aplicá-las na prática em projetos, especialmente no desenvolvimento web e na criação de APIs. Em meus projetos gosto de utilizar tecnologias como TypeScript, Node, React, Next,  além de outras ferramentas para estar em constante aprendizado e crescimento. De 2024 até então atuo como desenvolvedor na 2Clix, focado no desenvolvimento front-end e back-end. 
                        {/* <br /> <br /> */}

                        {/* De 2024 até então atuo como desenvolvedor na 2Clix, focado no desenvolvimento front-end e back-end com tecnologias como JavaScript, C# e SQL  */}
                        {/* também adquirindo experiência com tecnologias como SQL, C#, .NET e ASP.NET Core MVC.                                            */}
                        <br /> <br />

                        </p>

                    <p className={styles.code}>&lt;p&gt;</p>
                </motion.div>
            </div>
        </motion.div>
    );
}
