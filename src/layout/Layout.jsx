import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="flex h-screen">
      <Aside />

      <main className="flex-1 flex flex-col overflow-auto">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
}