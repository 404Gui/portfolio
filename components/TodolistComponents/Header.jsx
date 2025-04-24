import styles from '../../app/todolist/styles.module.css';


export default function Header({ dark }) {
  return (
    <h3 className={`${styles.header} ${dark ? styles.darkTheme : ''}`}>TODO-LIST</h3>
  );
}