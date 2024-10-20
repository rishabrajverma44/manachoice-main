import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <main>
        <Navbar />
        <div className="mt-0">
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
