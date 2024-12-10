import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToast = () => {
    toast.warning('Projeto ainda em desenvolvimento!')
}


const Carousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* Botão de navegação anterior com estilo redondo */}
      <button onClick={prevProject} className={styles.roundButtonStyle}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      {/* Exibe o card atual com a imagem */}
      <div
        style={{
          margin: "0 1rem",
          width: "300px",
          textAlign: "center",
          height: "300px",
        }}
      >
        <Image
          className={styles.imagem}
          src={projects[currentIndex].image}
          alt={projects[currentIndex].title}
          width={300}
          height={200}
          objectFit="cover"
          onClick={showToast}
        />
        <h2>{projects[currentIndex].title}</h2>
        <p
          style={{
            maxHeight: "50px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {projects[currentIndex].description}
        </p>
      </div>

      {/* Botão de navegação próximo com estilo redondo */}
      <button onClick={nextProject} className={styles.roundButtonStyle}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>

      <ToastContainer />
    </div>
  );
};

// const roundButtonStyle = {
//   borderRadius: "50%",
//   width: "50px",
//   height: "50px",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   border: "none",
//   backgroundColor: "#333",
//   color: "#fff",
//   cursor: "pointer",
//   fontSize: "20px",
// };

export default Carousel;
