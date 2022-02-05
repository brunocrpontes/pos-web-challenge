import styles from './styles/HeaderBar.module.css'

export default function HeaderBar() {
  return (
    <div className={styles.container}>
      <span className={styles.app_name}>SimpleSearch</span>
      <div className={styles.tabs_container}>
        <button data-selected="true" className={styles.tab}>Meu IP</button>
        <button className={styles.tab}>Buscar whois</button>
        <button className={styles.tab}>Verificar Vírus</button>
      </div>
    </div>
  )
}