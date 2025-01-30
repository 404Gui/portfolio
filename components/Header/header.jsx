'use client'
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {

  const techs = ["TS", "C#", "JS"];
  const [currentTech, setCurrentTech] = useState(techs[0]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentTech((prev) => {
          const nextIndex = (techs.indexOf(prev) + 1) % techs.length;
          return techs[nextIndex];
        });
        setVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
        <span className={styles.code}>
          <span className={styles.techs} style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            &lt;{currentTech}/&gt;
          </span>
          Guilherme Pappi
        </span>

            <nav className={styles.navbar}>
            <ul className={styles.navmenu}>
              <li className={styles.navlinks}>
                <Link href="#home">
                  Home
                </Link>              
              </li>
              <li className={styles.navlinks}>
              <Link href="#about">
                  Sobre mim                  
              </Link> 
              </li>
              <li className={styles.navlinks}>
              <Link href="#projects">
                  Projetos
              </Link>                   
              </li>            
            </ul>
            </nav>

          <nav className={styles.socialnav}>
            <ul className={styles.socialMenu}>
              <li className={styles.socialLinks}>
                <Link href="https://www.linkedin.com/in/guilherme-pappi/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className={styles.socialIcons} icon={faLinkedin} width={15} height={15} />
                  <span>Linkedin</span>
                </Link>
              </li>
              <li className={styles.socialLinks}>
                <Link href="https://github.com/404Gui" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className={styles.socialIcons} icon={faGithub} width={15} height={15} />
                  <span>Github</span>
                </Link>
              </li>
              <li className={styles.socialLinks}>
                <Link href="https://www.instagram.com/404guii" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className={styles.socialIcons} icon={faInstagram} width={15} height={15} />
                  <span>Instagram</span>
                </Link>
              </li>
            </ul>
          </nav>

        </div>

        
      </header>
      <hr className={styles.divider} />
    </>
  );
}
