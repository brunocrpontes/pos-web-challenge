import { useRouter } from 'next/router'
import TabBar from '../TabBar/TabBar'
import styles from './styles/HeaderBar.module.css'

export default function HeaderBar() {
  const {route} = useRouter()

  return (
    <div className={styles.container}>
      <span className={styles.app_name}>SimpleSearch</span>
      <TabBar>
        <TabBar.Tab
          href="/myip"
          selected={route === "/myip"}>
          Meu IP
        </TabBar.Tab>
        <TabBar.Tab
          href="/whois-search"
          selected={route === "/whois-search"}>
          Buscar whois
        </TabBar.Tab>
        <TabBar.Tab
          href="/virus-analyser"
          selected={route === "/virus-analyser"}>
          Verificar Vírus
        </TabBar.Tab>
      </TabBar>
    </div>
  )
}