import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { navigation } from "../../routes/navigation";
import CarFilter from "../../components/CarFilter";
import CarList from "../../components/CarList";

// HOOKS
import { useCars } from "../../hooks/useCars";

export default function Catalog() {
  const { rawCars } = useCars();

  return (
    <>
      <div className="flex flex-col gap-6 md:gap-10 bg-[#F7F7F9] pb-6 md:pb-10 mb-6 md:mb-10">
        <div className="container mx-auto px-4 md:px-11 py-4 flex flex-col gap-3">
          <Breadcrumbs routes={navigation} />

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Каталог техники
          </h1>

          <CarFilter cars={rawCars} />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <CarList />
      </div>
    </>
  );
}