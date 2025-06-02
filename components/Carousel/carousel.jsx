// import { useState } from "react";
// import styles from "./styles.module.css";
// import Image from "next/image";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


// export function Carousel ({ projects }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextProject = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === projects.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevProject = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? projects.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div style={{ display: "flex", alignItems: "center" }}>
//       <button onClick={prevProject} className={styles.roundButtonStyle}>
//         <FontAwesomeIcon icon={faArrowLeft} />
//       </button>

//       <div
//         style={{
//           margin: "0 1rem",
//           width: "300px",
//           textAlign: "center",
//           height: "300px",
//         }}
//       >
//         <Image
//           className={styles.imagem}
//           src={projects[currentIndex].image}
//           alt={projects[currentIndex].title}
//           width={300}
//           height={200}
//           objectFit="cover"
//           onClick={showToast}
//         />
//         <h2>{projects[currentIndex].title}</h2>
//         <p
//           style={{
//             maxHeight: "50px",
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//           }}
//         >
//           {projects[currentIndex].description}
//         </p>
//       </div>

//       <button onClick={nextProject} className={styles.roundButtonStyle}>
//         <FontAwesomeIcon icon={faArrowRight} />
//       </button>

//       <ToastContainer />
//     </div>
//   );
// };

