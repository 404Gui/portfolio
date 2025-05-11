"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";
import styles from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyCarousel = () => {
  const t = useTranslations("carro");
  const [dragStartX, setDragStartX] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      name: "Weather Forecast",
      role: t("p1"),
      backgroundUrl: "/weather-background.png",
      url: "https://weatherforecast-project-nine.vercel.app",
      githubUrl: "https://github.com/404Gui/weather-app",
    },
    {
      id: 2,
      name: "To-do List",
      role: t("p2"),
      backgroundUrl: "/todolist-background.png",
      url: "/todolist",
      githubUrl: "https://github.com/404Gui/todolist",
    },
    {
      id: 3,
      name: t("pName"),
      role: t("p3"),
      backgroundUrl: "/lorem.png",
      url: "",
      githubUrl: "",
    },
  ];

  const handleMouseDown = (e) => {
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e, slide) => {
    const dragDistance = Math.abs(e.clientX - dragStartX);
    if (dragDistance < 10 && slide.url) {
      window.open(slide.url, "_blank");
    }
  };
  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <motion.div
            key={slide.id}
            className={styles.slide}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => handleMouseUp(e, slide)}
          >
            <h3 className={styles.name}>{slide.name}</h3>

            <div className={styles.card}>
              <Image
                src={slide.backgroundUrl}
                alt={slide.name}
                fill
                className={styles.backgroundImage}
                priority
              />
              <div className={styles.hoverInfo}>
                <p>{slide.role}</p>
              </div>
            </div>

            {slide.githubUrl && (
              <a
                href={slide.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
                onMouseDown={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
              >
                [ {t("code")} <FontAwesomeIcon icon={faGithub} /> ]
              </a>
            )}
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default MyCarousel;

const NextArrow = ({ onClick }) => (
  <div className={styles.slickNext} onClick={onClick}>
    ▶
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className={styles.slickPrev} onClick={onClick}>
    ◀
  </div>
);
