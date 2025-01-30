'use client';
import React from 'react';
import MyCarousel from '../Carro/Carro';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

const SectionWithCarousel = () => {
  return (
    <motion.div
      className={styles.sectionContainer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className={styles.textSection}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ amount: 0.2 }}
      >
        <h1>Seção dedicada a pequenos projetos concluídos e futuros projetos</h1>
        <p>Explore meus projetos desenvolvidos, que abordam soluções simples e práticas para o dia a dia. Em alguns projetos, utilizei a API Route do Next.js. É só clicar e testar o projeto para ver como funciona na prática e, se preferir, conferir o código no GitHub!</p>
      </motion.div>

      <motion.div
        className={styles.carouselSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        viewport={{ amount: 0.2 }}
      >
        <MyCarousel />
      </motion.div>
    </motion.div>
  );
};

export default SectionWithCarousel;
