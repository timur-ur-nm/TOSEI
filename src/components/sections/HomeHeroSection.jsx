import React from "react";
import CarFilter from "../../components/CarFilter";
import CarList from "../../components/CarList";
import background from "../../assets/hero.png";

export default function HomeHeroSection({ rawCars }) {
  return (
    <div className="flex flex-col gap-5 relative items-center">
      <img src={background} alt="hero" className="w-full absolute z-0" />
      <h1 className=" z-50 font-bold text-5xl mt-24 mb-24 text-white text-center max-w-2/3">
        Доставим любую технику из Японии за 3 недели
      </h1>

      <div className="p-6 z-50 w-full">
        {/* Фильтры и сортировка */}
        <CarFilter cars={rawCars} />

        {/* Список машин */}
        <CarList />
      </div>
    </div>
  );
}
