import { Outlet } from "react-router-dom";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Announcement from "@/components/announcement";

const Layout = () => {
  return (
    <div>
      <Announcement />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
