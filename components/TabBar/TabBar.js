
import styles from './styles/TabBar.module.css'
import Tab from './Tab'

export default function TabBar({children}) {
  return (
    <div className={styles.tab_bar_container}>
      {children}
    </div>
  )
}

TabBar.Tab = Tab;