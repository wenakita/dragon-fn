import { Outlet } from "react-router";
import Navigator from "./Navigator";
function Layout() {
  return (
    <>
      <Navigator />
      <Outlet />
    </>
  );
}

export default Layout;
