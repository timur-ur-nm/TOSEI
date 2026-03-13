import React from "react";
import CarFilter from "../../components/CarFilter";
import CarList from "../../components/CarList";
import background from "../../assets/hero.png";

export default function HomeHeroSection({ rawCars }) {
  return (
    <div className="relative flex flex-col items-center gap-5">
      {/* hero */}
      <div className="relative w-full h-[420px]">
        <img
          src={background}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <h1 className="relative z-10 font-bold text-3xl sm:text-5xl mt-24 text-white text-center max-w-2xl mx-auto px-4">
          Доставим любую технику из Японии за 3 недели
        </h1>

        <div className="p-4 sm:p-6 w-full z-50 relative mt-10">
          <CarFilter cars={rawCars} />
          <CarList />
        </div>
      </div>
    </div>
  );
}
