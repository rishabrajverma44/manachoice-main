import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <main>
        <Navbar />
        <div className="mt-0">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
