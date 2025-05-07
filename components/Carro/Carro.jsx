"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";

const MyCarousel = () => {
  const [dragStartX, setDragStartX] = useState(0);
  const [dragging, setDragging] = useState(false);

  const t = useTranslations("carro");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      name: "Weather Forecast",
      role: "Esse projeto integra a API da OpenWeather para fornecer previsões do tempo em tempo real para qualquer localidade!",
      logoUrl: "/nubank-logo.png",
      avatarUrl: "/avatar2.png",
      backgroundUrl: "/weather-background.png",
      url: "https://weatherforecast-project-nine.vercel.app",
      githubUrl: "https://github.com/404Gui/weather-app",
    },
    {
      id: 2,
      name: "To-do List",
      role: "Uma lista de tarefas simples, mas altamente útil, para ajudar você a se organizar e não esquecer de nada importante!",
      logoUrl: "/stack-overflow-logo.png",
      avatarUrl: "/todolist",
      backgroundUrl: "/todolist-background.png",
      url: "/todolist",
      githubUrl: "https://github.com/404Gui/todolist",
    },
    {
      id: 3,
      name: "Projeto futuro",
      role: "Projeto ainda em desenvolvimento...",
      logoUrl: "/luizalabs-logo.png",
      avatarUrl: "/avatar3.png",
      backgroundUrl: "/lorem.png",
      url: "",
      githubUrl: "",
    },
    {
      id: 4,
      name: "Projeto futuro",
      role: "Projeto ainda em desenvolvimento...",
      logoUrl: "/google-logo.png",
      avatarUrl: "/avatar4.png",
      backgroundUrl: "/lorem.png",
      url: "",
      githubUrl: "",
    },
  ];

  const handleMouseDown = (e) => {
    setDragStartX(e.clientX);
    setDragging(false);
  };

  const handleMouseUp = (e, slide) => {
    if (e.button !== 0) return;

    const dragDistance = Math.abs(e.clientX - dragStartX);

    if (dragDistance < 10) {
      if (slide.url !== "") {
        window.location.href = slide.url;
      } else {
        toast.warning(t("toast"));
      }
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={styles.slide}
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => handleMouseUp(e, slide)}
          >
            <h3 className={styles.name}>{slide.name}</h3>
            <div className={styles.card}>
              <Image
                src={slide.backgroundUrl}
                alt={slide.name}
                className={styles.backgroundImage}
                fill
                style={{ objectFit: "cover" }}
              />
              <section></section>
              <div className={styles.descricao}></div>
            </div>
            <p className={styles.role}>{slide.role}</p>
            {slide.githubUrl && (
              <a
                href={slide.githubUrl}
                className={styles.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onMouseDown={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
              >
                [ {t("code")} <FontAwesomeIcon icon={faGithub} size="lg" />]
              </a>
            )}
          </div>
        ))}
      </Slider>
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
