import { useMemo } from "react";

export default function useFilterCar(cars, filter) {
  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      if (filter.availability && !car.availability) return false;
      if (filter.car && car.car !== filter.car) return false;
      if (filter.car_model && car.car_model !== filter.car_model) return false;
      if (filter.car_color && car.car_color !== filter.car_color) return false;
      if (
        filter.car_vin &&
        !car.car_vin?.toLowerCase().includes(filter.car_vin.toLowerCase())
      )
        return false;
      if (filter.price && !car.price?.includes(filter.price)) return false;
      if (
        filter.car_model_year &&
        !String(car.car_model_year).includes(filter.car_model_year)
      )
        return false;

      return true;
    });
  }, [cars, filter]);

  return filteredCars;
}
