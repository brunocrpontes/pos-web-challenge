import HeaderBar from '../components/HeaderBar/HeaderBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
