import { Link, NavLink } from "react-router-dom";
import { navigation } from "../routes/navigation";
import logo from "../assets/logo.png";
import icons from "../assets/icons.png";

export default function Aside() {
  return (
    <aside className="hidden md:flex w-56 bg-[#F7F7F9] flex-col sticky top-0 h-screen justify-between">
      <div>
        <Link to="/" className="flex justify-center mb-6 p-4">
          <img src={logo} alt="Logo" className="w-32 h-auto" />
        </Link>

        <nav className="flex flex-col gap-1">
          {navigation.map(({ id, path, name }) => (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) =>
                `pl-3 py-2 border-l-4 font-medium transition ${
                  isActive
                    ? "border-red-600 text-red-600"
                    : "border-transparent hover:border-gray-300"
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex justify-center mb-4">
        <img src={icons} alt="" />
      </div>
    </aside>
  );
}
