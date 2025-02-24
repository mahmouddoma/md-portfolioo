import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
