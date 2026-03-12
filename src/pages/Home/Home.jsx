// HOOKS
import { useCars } from "../../hooks/useCars";
import HomeHeroSection from '../../components/sections/HomeHeroSection'
// UI

import CarFilter from "../../components/CarFilter";

export default function Home() {
  // Загрузка данных с сервера через кастомный хук useCars
  const { rawCars } = useCars();

  return (
    <div className="container mx-auto flex flex-col gap-4">
      <HomeHeroSection 
        rawCars={rawCars}
      />
    </div>
  );
}
