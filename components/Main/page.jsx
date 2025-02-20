import styles from "./styles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import Card from "../Card/card";
import CardTwo from "../Aside/aside";

import About from '../About/about'
import Titulo from "../Titulo/titulo";
import { FaWhatsapp } from "react-icons/fa";

export default function Main() {
  return (

    <div>
        <Titulo />
        <div className={styles.wrapper} id="home">              
              <aside className={styles.aside}>
                <Card />
              </aside>
              <main className={styles.mainContent}>
                <div>
                  <p className={styles.code}>&lt;h2&gt;</p> <br />
                  <h2 className={styles.tittleTwo}>
                    Olá, <br />
                    Sou <span className={styles.nome}>Guilherme</span>, <br />
                    Desenvolvedor Full-stack
                  </h2>
                  <p className={styles.codeTwo}>&lt;/h2&gt;</p> <br />
                </div>
                <div>
                  <p className={styles.code}>&lt;p&gt;</p> <br />
                  <p className={styles.texto}>
                  Gosto de programar, resolver problemas e transformar ideias em código.<br />
                  Com uma boa xícara de café e uma boa documentação, eu transformo <br />
                     seu problema em solução. Se curtiu meu trabalho e quiser trocar uma ideia,
                  </p> <br />
                  <p className={styles.code}>&lt;/p&gt;</p> <br />
                  <a className={styles.talk} href="https://wa.me/+5511942109948">
                    Vamos conversar
                    <FaWhatsapp icon={faCommentDots} width={15} height={15} />
                  </a>
                </div>                
              </main>
              <aside className={styles.aside}>
                {/* <CardTwo /> */}
              </aside>
            </div>

    </div>
    
  );
}
