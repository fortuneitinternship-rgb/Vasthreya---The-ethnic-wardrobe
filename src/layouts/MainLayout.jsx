
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="app-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
