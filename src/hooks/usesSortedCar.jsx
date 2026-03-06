import { useMemo } from "react";
import { getPrice } from '../utils/getPrice'

export function useSortedCar(cars, sortMethod = "") {

  const sortedCars = useMemo(() => {
    return [...cars].sort((a, b) => {
      switch (sortMethod) {
        case "price-asc":
          return getPrice(a.price) - getPrice(b.price);

        case "price-desc":
          return getPrice(b.price) - getPrice(a.price);

        case "year-desc":
          return b.car_model_year - a.car_model_year;

        case "year-asc":
          return a.car_model_year - b.car_model_year;

        default:
          return 0;
      }
    });
  }, [cars, sortMethod]);

  return sortedCars;
}
