"use client";
import styles from "./styles.module.css";
import {
  faCode,
  faLaptopCode,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

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
          <p className={styles.code}>&lt;p&gt;</p>
          <p className={styles.texto}>
            👋 <strong>Me chamo Guilherme Pappi</strong>, sou desenvolvedor de
            sistemas, apaixonado por tecnologia, inovação e criação de
            aplicações.
          </p>
          <p className={styles.texto}>
            Sou um grande apoiador da cultura do open source e estou sempre aprendendo e evoluindo, de olho nas novas tendências para entregar resultados cada vez melhores e acredito no potencial do conhecimento como agente de mudança social e pessoal.
          </p>
          <p className={styles.texto}>
            Trago 2 anos de experiência prática com as melhores tecnologias do
            mercado, sempre focado em{" "}
            <span className={styles.destaque}>
              transformar ideias e problemas em ótimas e modernas soluções
            </span>
            .
          </p>
          <p className={styles.texto}>
          Neste portfólio mostro um pouco dos meus projetos, minhas ideias e do que desenvolvo. Se quiser conversar sobre projetos, ideias ou precisar de alguma ajuda, pode contar comigo!
          </p>
          <p className={styles.texto}>
            👀 <strong>Aproveite e dê uma olhada nos meus projetos logo abaixo!</strong>
          </p>
          <p className={styles.code}>&lt;/p&gt;</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
