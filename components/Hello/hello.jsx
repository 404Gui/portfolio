// "use client"
// import React, { useEffect, useState } from 'react';
// import styles from './styles.module.css';

// const TerminalAnimation = () => {
//   const [text, setText] = useState('');
//   const lines = [
//     '$ npm start',
//     '> Starting portfolio...',
//     '> Loading components...',
//     '> Hello World! 🚀'
//   ];
//   const [lineIndex, setLineIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);

//   useEffect(() => {
//     if (lineIndex < lines.length) {
//       if (charIndex < lines[lineIndex].length) {
//         const timeout = setTimeout(() => {
//           setText((prev) => prev + lines[lineIndex][charIndex]);
//           setCharIndex(charIndex + 1);
//         }, 10);
//         return () => clearTimeout(timeout);
//       } else {
//         const timeout = setTimeout(() => {
//           setText((prev) => prev + '\n');
//           setLineIndex(lineIndex + 1);
//           setCharIndex(0);
//         }, 50);
//         return () => clearTimeout(timeout);
//       }
//     }
//   }, [charIndex, lineIndex, lines]);

//   return (
//     <div className={styles.terminalContainer}>
//       <pre className={styles.terminalText}>{text}</pre>
//     </div>
//   );
// };

// export default TerminalAnimation;


// // "use client"
// // import React, { useEffect, useState } from 'react';
// // import styles from './styles.module.css';

// // const TerminalAnimation = () => {
// //   const [text, setText] = useState('');
// //   const lines = [
// //     '$ npm start',
// //     '> Starting portfolio...',
// //     '> Loading components...',
// //     '> Hello World! 🚀'
// //   ];
// //   const [lineIndex, setLineIndex] = useState(0);
// //   const [charIndex, setCharIndex] = useState(0);
// //   const [highlight, setHighlight] = useState(false);

// //   useEffect(() => {
// //     if (lineIndex < lines.length) {
// //       if (charIndex < lines[lineIndex].length) {
// //         const timeout = setTimeout(() => {
// //           setText((prev) => prev + lines[lineIndex][charIndex]);
// //           setCharIndex(charIndex + 1);
// //         }, 100);
// //         return () => clearTimeout(timeout);
// //       } else {
// //         if (lines[lineIndex] === '> Hello World! 🚀') {
// //           setHighlight(true);
// //         }
// //         const timeout = setTimeout(() => {
// //           setText((prev) => prev + '\n');
// //           setLineIndex(lineIndex + 1);
// //           setCharIndex(0);
// //         }, 500);
// //         return () => clearTimeout(timeout);
// //       }
// //     } else {
// //       // Loop the animation
// //       const timeout = setTimeout(() => {
// //         setText('');
// //         setLineIndex(0);
// //         setCharIndex(0);
// //         setHighlight(false);
// //       }, 3000);
// //       return () => clearTimeout(timeout);
// //     }
// //   }, [charIndex, lineIndex, lines]);

// //   return (
// //     <div className={styles.terminalContainer}>
// //       <pre className={styles.terminalText}>
// //         {text.split('\n').map((line, index) => (
// //           <div key={index} className={line.includes('Hello World!') && highlight ? styles.highlight : ''}>
// //             {line}
// //             {index === text.split('\n').length - 1 && highlight && <span className={styles.cursor}>|</span>}
// //           </div>
// //         ))}
// //       </pre>
// //     </div>
// //   );
// // };

// // export default TerminalAnimation;