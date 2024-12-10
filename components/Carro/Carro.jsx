'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css"; // Importa o CSS Module
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const showToast = () => {
  toast.warning('Projeto ainda em desenvolvimento!')
}

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    { id: 1, description: 'Uma simples lista de tarefas para voce não se perder!', title: "To-Do List", imageUrl: "/TODOLISST.png", url: "/todolist" },
    { id: 2, description: 'Descubra a previsão do tempo antes de sair de casa', title: "Previsão do tempo", imageUrl: "/wheater.svg", url: "/em-desenvolvimento" },
    { id: 3, description: 'Em andamento...', title: "Projeto 3", imageUrl: "/coding.svg", url: "/em-desenvolvimento" },
  ];

  const validaProjetoAndamento = (e, url) => {
    if(url === '/em-desenvolvimento') {
      e.preventDefault();
      showToast();
  
    }

  }
  

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
          <div className={styles.slideContent}>
              <Image src={slide.imageUrl} alt={slide.title} width={120} height={120} />
            <section>
              <h2>{slide.title}</h2>
              <Link href={slide.url} onClick={(e) => {validaProjetoAndamento(e, slide.url)} }>
                <h3 className={styles.viewProjectButton}>{slide.description}</h3>              
              </Link>
            </section>
          </div>
        </div>
        
        ))}
      </Slider>
      <ToastContainer />
    </div>
  );
};

export default MyCarousel;

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.slickNext} onClick={onClick}>
      Next
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.slickPrev} onClick={onClick}>
      Prev
    </div>
  );
};
