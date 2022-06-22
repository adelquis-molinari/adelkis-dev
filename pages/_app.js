import '../styles/globals.css'
import LayoutBase from '../layout/layout-base'

function MyApp ({ Component, pageProps }) {
  return (
    <LayoutBase>
      <Component {...pageProps} />
    </LayoutBase>
  )
}

export default MyApp
