// "use client";

// import Image from "next/image";
// import styles from "./CertificatesSection.module.css";

// const certificates = [
//   {
//     title: "React & Next.js 15",
//     url: "https://cursos.alura.com.br/user/guilherme-pappi/degree-node-js-express-495958/certificate",
//     image: "/certificados/udemy_c1.jpg",
//     institutionLogo: "/icons/udemy.png",
//   },
//   {
//     title: "TypeScript Essentials",
//     url: "https://cursos.alura.com.br/user/guilherme-pappi/degree-typescript-v309729-309729/certificate",
//     image: "/certificados/masters.png",
//     institutionLogo: "/icons/alura.jpg",
//   },
//   {
//     title: "Boas Práticas Node.js",
//     url: "https://cursos.alura.com.br/user/guilherme-pappi/degree-boas-praticas-node-js-typescript-742430/certificate",
//     image: "/certificados/alura_node.png",
//     institutionLogo: "/icons/udemy.png",
//   },
// ];

// export default function CertificatesSection() {
//   return (
//     <section className={styles.section}>
//       <h2 className={styles.title}>Certificados</h2>

//       <div className={styles.grid}>
//         {certificates.map((cert, index) => (
//           <a
//             key={index}
//             href={cert.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.card}
//           >
//             <div className={styles.imageWrapper}>
//               <Image
//                 src={cert.image}
//                 alt={cert.title}
//                 fill
//                 className={styles.image}
//               />
//             </div>
//             <div className={styles.overlay}>
//               <h3 className={styles.certTitle}>{cert.title}</h3>
//               <div className={styles.logoWrapper}>
//                 <Image
//                   src={cert.institutionLogo}
//                   alt="Logo da instituição"
//                   width={24}
//                   height={24}
//                 />
//               </div>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }
