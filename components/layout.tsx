import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

type LayoutProps = {
  children: React.ReactNode
}
export default function Layout( {children}: LayoutProps ) {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}