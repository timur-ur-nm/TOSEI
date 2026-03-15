import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { navigation } from "../routes/navigation";
import icons from "../assets/icons.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:flex min-h-16 bg-[#F7F7F9] px-6 justify-between items-center">
        <p className="text-sm max-w-3xs leading-snug">
          Автомобили из Японии с доставкой по всей России
        </p>

        <div className="flex flex-col items-end">
          <p className="text-[#CD0000] text-xl font-bold">8 800 250-78-07</p>
          <span className="text-xs text-gray-600">
            Бесплатный звонок по всей России
          </span>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden min-h-14 bg-[#F7F7F9] px-4 justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-28 h-auto shrink-0" />
        </Link>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-2xl font-bold "
        >
          ☰
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
    fixed inset-0 bg-black/40 z-40 md:hidden
    transition-opacity duration-500
    ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
  `}
      />

      {/* Burger Menu */}
      <div
        className={`
          fixed top-0 right-0
          h-full w-[70%]
          bg-white
          shadow-2xl
          z-150
          transform transition-transform duration-500 ease-in-out
          will-change-transform
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        <div className="p-6 flex flex-col justify-between h-full ">
          <div className="flex flex-col gap-10">
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-2xl w-10 h-10 bg-black text-white"
            >
              ✕
            </button>

            <div className="flex flex-col gap-6">
              {navigation.map((nav) => {
                return (
                  <Link
                    key={nav.id}
                    to={nav.path}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium"
                  >
                    {nav.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="">
              <h1 className="text-2xl text-[#CD0000] font-bold">8 800 250-78-07</h1>
              <p className="text-14px">Бесплатный звонок по всей России</p>
            </div>
            <img src={icons} alt="messengers" className="w-fit"/>
          </div>
        </div>
      </div>
    </>
  );
}
