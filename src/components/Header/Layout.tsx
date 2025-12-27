import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        <div className="content-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
