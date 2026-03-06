import { Outlet, NavLink } from "react-router-dom";
import Aside from "./Aside";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <Aside />
      <main className="w-full flex flex-col">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
