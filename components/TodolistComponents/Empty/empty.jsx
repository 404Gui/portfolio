import styles from "./styles.module.css";

export function Vazio() {
  return (
    <div className={styles.vazioContainer}>
      <img src="/empty.png" alt="Sem conteúdo" className={styles.imgVazio} />
      <h1 className={styles.titulo}>Nada por aqui ainda</h1>
      <p className={styles.descricao}>Adicione novos itens para começar.</p>
    </div>
  );
}
