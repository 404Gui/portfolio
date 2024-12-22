'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import Image from "next/image";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Exibe 3 slides por vez
    slidesToScroll: 1,
    centerMode: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // const slides = [
  //   { id: 1, description: 'Uma simples lista de tarefas para voce não se perder!', title: "To-Do List", imageUrl: "/TODOLISST.png", url: "/todolist" },
  //   { id: 2, description: 'Descubra a previsão do tempo antes de sair de casa', title: "Previsão do tempo", imageUrl: "/wheater.svg", url: "/em-desenvolvimento" },
  //   { id: 3, description: 'Em andamento...', title: "Projeto 3", imageUrl: "/coding.svg", url: "/em-desenvolvimento" },
  // ];

  const slides = [
    { 
      id: 1, 
      name: 'Todo List', 
      role: "Uma lista de tarefas simples, mas altamente útil, para ajudar você a se organizar e não esquecer de nada importante!", 
      logoUrl: "/stack-overflow-logo.png", 
      avatarUrl: "/todolist",
      backgroundUrl: "/background-todo.png",
      url: "/todolist",
    },
    { 
      id: 2, 
      name: 'Weather Forecast', 
      role: "Um projeto em desenvolvimento que utiliza uma API pública para fornecer informações atualizadas sobre a previsão do tempo.", 
      logoUrl: "/nubank-logo.png", 
      avatarUrl: "/avatar2.png",
      backgroundUrl: "/blur.png",
      url: "",      
    },
    { 
      id: 3, 
      name: 'Lorem ipsum', 
      role: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
      logoUrl: "/luizalabs-logo.png", 
      avatarUrl: "/avatar3.png",
      backgroundUrl: "/blur.png",
      url: "",      
    },
    { 
      id: 4, 
      name: 'Lorem ipsum', 
      role: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
      logoUrl: "/google-logo.png", 
      avatarUrl: "/avatar4.png",
      backgroundUrl: "/blur.png",
      url: "",      
    },
  ];
  
  const handleCardClick = (slide) => {
    if (slide.url != "") {
      window.location.href = slide.url;
    } else {
      toast.warning("Projeto em andamento!");
    }
  };
  

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className={styles.slide} 
            onClick={() => handleCardClick(slide)}
            >
            <h3 className={styles.name}>{slide.name}</h3>
            <div 
              className={styles.card}
              style={{
                backgroundImage: `url(${slide.backgroundUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <section></section>
              <div className={styles.descricao}>
              </div>
                <p className={styles.role}>{slide.role}</p>
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
      &gt;
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.slickPrev} onClick={onClick}>
      &lt;
    </div>
  );
};
