import Link from "next/link";
import styles from './styles/Tab.module.css'

export default function Tab({ selected = false, children, href }) {

  return (
    <Link href={href}>
      <a className={styles.tab} data-selected={selected}>
        {children}
      </a>
    </Link>
  )
}