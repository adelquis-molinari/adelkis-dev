import Footer from '../src/components/footer/footer'
import Navbar from '../src/components/navbar/navbar'

// eslint-disable-next-line react/prop-types
function LayoutBase ({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default LayoutBase
