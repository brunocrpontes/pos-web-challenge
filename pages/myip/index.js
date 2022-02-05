import { useEffect } from 'react';
import styles from './styles/MyIp.module.css'

export default function MyIp({ ip }) {

  return (
    <div className={styles.container}>
      <div className={styles.ip_container}>
        <span className={styles.ip}>
          {ip}
        </span>  
      </div>
    </div>
  )
}

export async function getServerSideProps({req}) {
  const ip = req.headers.get('x-forwarded-for')
    ? req.headers.get('x-forwarded-for').split(',')[0]
    : '127.0.0.1';

  return { props: { ip } };
}