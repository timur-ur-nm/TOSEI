import { Link,NavLink } from "react-router-dom";
import { navigation } from "../routes/navigation";
import logo from "../assets/logo.png";


export default function Aside() {
  return (
    <aside className="hidden md:flex md:w-56 bg-gray-200 flex-col gap-6 sticky top-0 h-screen ">
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
    </aside>
  );
}