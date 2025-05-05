import { Outlet } from "react-router";
import Navigator from "./Navigator";
import FooterContent from "./footer/FooterContent";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigator />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterContent />
    </div>
  );
}

export default Layout;
