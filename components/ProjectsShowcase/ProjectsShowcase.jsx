"use client";
import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Info,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  SiPython,
  SiFastapi,
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

import styles from "./ProjectsShowcase.module.css";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export function ProjectsShowcase() {
  const t = useTranslations("projects");

  const projects = [
    {
      id: 1,
      name: "Taskoom",
      role: "Sistema de produtividade",
      description:
        "Taskoom é um sistema moderno de gerenciamento de tarefas que oferece autenticação segura via JWT, organização eficiente por listas e tarefas, além de integração com IA da Hugging Face para sugerir e otimizar a criação de listas.",
      image: "/taskoom-background.png",
      url: "https://taskoom.com/",
      github: "",
      stack: [
        { name: "Python", icon: <SiPython size={24} color="#3776AB" /> },
        { name: "FastAPI", icon: <SiFastapi size={24} color="#009688" /> },
        {
          name: "TypeScript",
          icon: <SiTypescript size={24} color="#3178C6" />,
        },
        { name: "Next.js", icon: <SiNextdotjs size={24} color="#ffffff" /> },
      ],
    },
    {
      id: 2,
      name: "Weather Forecast",
      role: "App de previsão do tempo",
      description:
        "App que exibe a previsão do tempo com base em localização e API de clima, com animações e dados atualizados.",
      image: "/weather-background.png",
      url: "https://weatherforecast-project-nine.vercel.app",
      github: "https://github.com/404Gui/weather-app",
      stack: [
        { name: "Node.js", icon: <SiNodedotjs size={24} color="#339933" /> },
        { name: "Express", icon: <SiExpress size={24} color="#ffffff" /> },
        {
          name: "TypeScript",
          icon: <SiTypescript size={24} color="#3178C6" />,
        },
        { name: "Next.js", icon: <SiNextdotjs size={24} color="#ffffff" /> },
      ],
    },
    {
      id: 3,
      name: "To-do List",
      role: "Gerenciador de tarefas simples",
      description:
        "Uma to-do list leve e intuitiva para gerenciamento rápido de tarefas com persistência local.",
      image: "/todolist-background.png",
      url: "/todolist",
      github: "https://github.com/404Gui/todolist",
      stack: [
        { name: "React", icon: <SiReact size={24} color="#61DAFB" /> },
        {
          name: "TypeScript",
          icon: <SiTypescript size={24} color="#3178C6" />,
        },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  const prevProject = () =>
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const nextProject = () =>
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  const getProjectAt = (offset) => {
    const index = (currentIndex + offset + projects.length) % projects.length;
    return projects[index];
  };

  const toggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  const currentProject = projects[currentIndex];

  return (
    <section className={styles.projectsSection}>
      <div className={styles.carousel}>
        <div className={styles.sideWrapper}>
          <button
            className={clsx(styles.navButton, styles.prevButton)}
            onClick={prevProject}
          >
            <ChevronLeft size={24} />
          </button>
          <div className={styles.sideCard}>
            <Image
              src={getProjectAt(-1).image}
              alt={getProjectAt(-1).name}
              fill
              className={styles.sideImage}
            />
          </div>
        </div>

        <div className={styles.mainCard}>
          <Image
            src={currentProject.image}
            alt={currentProject.name}
            fill
            className={styles.mainImage}
          />
          <div className={styles.overlay}>
            <h3>{currentProject.name}</h3>
            <p>{currentProject.role}</p>
            <div className={styles.overlayLinks}>
              <a
                href={currentProject.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} style={{ marginRight: 4 }} /> Ver
                projeto
              </a>
              {currentProject.github && (
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} style={{ marginRight: 4 }} /> GitHub
                </a>
              )}
              <a onClick={toggleDescription} className={styles.descButton}>
                <Info size={16} style={{ marginRight: 4 }} /> Ver descrição
              </a>
            </div>
          </div>
          {showDescription && (
            <div
              className={styles.descriptionOverlay}
              onClick={toggleDescription}
            >
              <p>{currentProject.description}</p>
              <div className={styles.techIcons}>
                {currentProject.techs?.map((Icon, index) => (
                  <Icon key={index} size={20} style={{ marginRight: 8 }} />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles.sideWrapper}>
          <div className={styles.sideCard}>
            <Image
              src={getProjectAt(1).image}
              alt={getProjectAt(1).name}
              fill
              className={styles.sideImage}
            />
          </div>
          <button
            className={clsx(styles.navButton, styles.nextButton)}
            onClick={nextProject}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className={styles.projectStack}>
        <div className={styles.stackIcons}>
          {currentProject.stack.map((tech, index) => (
            <div key={index} className={styles.stackIcon} title={tech.name}>
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
