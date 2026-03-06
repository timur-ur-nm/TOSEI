import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:flex min-h-16 bg-[#F7F7F9] px-6 justify-between items-center">
        <p className="text-sm max-w-3xs leading-snug">
          Автомобили из Японии с доставкой по всей России
        </p>

        <div className="flex flex-col items-end ">
          <p className="text-[#CD0000] text-xl font-bold">
            8 800 250-78-07
          </p>
          <span className="text-xs text-gray-600">
            Бесплатный звонок по всей России
          </span>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden min-h-14 bg-[#F7F7F9] px-4 justify-between items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-28 h-auto shrink-0"
          />
        </Link>

        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="text-2xl font-bold"
        >
          ☰
        </button>
      </div>
    </>
  );
}