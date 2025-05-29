import styles from "./styles.module.css"

export function Vazio() {
    return (
      <div className={styles.vazioContainer}>
        <img src="/empty.png" alt="Vazio" className={styles.imgVazio} />
        <h1>Vazio</h1>
      </div>
    );
  }

