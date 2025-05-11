import styles from "./styles.module.css";

import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/card";
import Titulo from "../Titulo/titulo";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Main() {
  const t = useTranslations("main");

  return (
    <div>
      <Titulo />
      <div className={styles.wrapper} id="home">
        <aside className={styles.aside}>
          <Card />
        </aside>
        <main className={styles.mainContent}>
          <div className={styles.introduction}>
            <p className={styles.code}>&lt;h2&gt;</p>
            <h2 className={styles.tittleTwo}>
              {t("info1")} <br />
              {t.rich("info2", {
                span: (chunks) => <span className={styles.nome}>{chunks}</span>,
              })}{" "}
              <br />
              {t("info3")}
              <p className={styles.codeTwo}>&lt;/h2&gt;</p>
            </h2>
          </div>
          <div>
            <p className={styles.code}>&lt;p&gt;</p> <br />
            <p className={styles.texto}>
              {t("info4")} {t("info5")}{" "}
              <a className={styles.talk} href="https://wa.me/+5511942109948">
                {t("talk")}
                <FaWhatsapp icon={faCommentDots} width={15} height={15} />
              </a>
            </p>
            <p className={styles.code}>&lt;/p&gt;</p> <br />
          </div>
        </main>
      </div>
    </div>
  );
}
