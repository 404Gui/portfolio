import styles from "./styles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import Card from "../Card/card";
import CardTwo from "../Aside/aside";

import About from '../About/about'
import Titulo from "../Titulo/titulo";

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
                    Desenvolvedor Front-end
                  </h2>
                  <p className={styles.codeTwo}>&lt;/h2&gt;</p> <br />
                </div>

                <div>
                  <p className={styles.code}>&lt;p&gt;</p> <br />
                  <p className={styles.texto}>
                    Gosto de usar a programação como ferramenta para criar experiências web incríveis <br />
                    e resolver problemas  para entregar resultados <br />
                    de maneira criativa,
                  </p> <br />
                  <p className={styles.code}>&lt;/p&gt;</p> <br />

                  <p className={styles.talk}>
                    Vamos conversar
                    <FontAwesomeIcon icon={faCommentDots} width={15} height={15} />
                  </p>
                </div>
                
              </main>

              <aside className={styles.aside}>
                {/* <CardTwo /> */}
              </aside>
            </div>

    </div>
    
  );
}
