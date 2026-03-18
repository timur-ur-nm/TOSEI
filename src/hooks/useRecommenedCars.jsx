import { useMemo } from "react";
import { useCars } from "./useCars";
export default function useRecommenedCars({ currentCar }) {
  const { rawCars } = useCars();

  const recommendedCars = useMemo(() => {
    if (!currentCar) return [];

    return rawCars
      .filter((car) => car.id !== currentCar.id) // исключаем текущую
      .slice(0, 4); // ограничение 4
  }, [rawCars, currentCar]);

  return recommendedCars;
}
