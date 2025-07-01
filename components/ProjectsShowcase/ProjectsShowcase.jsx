"use client";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import {
  SiPython, SiFastapi, SiNextdotjs, SiTypescript, SiReact,
  SiNodedotjs, SiExpress, SiAngular, SiIonic
} from "react-icons/si";
import styles from "./ProjectsShowcase.module.css";
import { useTranslations } from "next-intl";

export function ProjectsShowcase() {
  const t = useTranslations("projects");

  const projects = [
    {
      id: 1,
      name: "Taskoom",
      role: t("taskoomRole"),
      description: t("taskoomDescription"),
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
      role: t("weatherRole"),
      description: t("weatherDescription"),
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
      role: t("todolistRole"),
      description: t("todolistDescription"),
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
    {
      id: 4,
      name: "Pokédex",
      role: t("pokedexRole"),
      description: t("pokedexDescription"),
      image: "/PokeDex.png",
      url: "https://poke-app-green.vercel.app/home",
      github: "https://github.com/404Gui/PokeAPP",
      stack: [
        { name: "React", icon: <SiAngular size={24} color="#DD0031" /> },
        {
          name: "TypeScript",
          icon: <SiIonic size={24} color="#3178C6" />,
        },
      ],
    }
  ];

  return (
    <section className={styles.projectsGrid}>
      {projects.map((project) => (
        <div key={project.id} className={styles.projectCard}>
          <div className={styles.imageWrapper}>
            <Image
              src={project.image}
              alt={project.name}
              fill
              className={styles.image}
            />
            <div className={styles.overlay}>
              <h3>{project.name}</h3>
              <p>{project.role}</p>
            </div>
          </div>

          <p className={styles.description}>{project.description}</p>

          <div className={styles.links}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} /> {t("verProjeto")}
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} /> GitHub
              </a>
            )}
          </div>

          <div className={styles.stack}>
            {project.stack.map((tech, index) => (
              <div key={index} title={tech.name}>
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
