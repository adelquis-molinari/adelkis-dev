import Footer from "../src/components/footer/footer";
import Navbar from "../src/components/navbar/navbar";

function LayoutBase({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default LayoutBase;
