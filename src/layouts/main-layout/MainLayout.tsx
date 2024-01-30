import Header from "../header/Header";
import Footer from "../footer/Footer";
const MainLayout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
