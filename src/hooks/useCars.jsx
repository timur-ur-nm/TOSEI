import { useSortedCar } from "./usesSortedCar";
import { useFetchCars } from "../hooks/useFetchCars";
import useFilterCar from "./useFilterCar";

export function useCars({ sortMethod = "", filter = {} } = {}) {
  const { cars, loading, error } = useFetchCars(
    "https://myfakeapi.com/api/cars/",
  );
  const rawCars = cars;

  const filteredCars = useFilterCar(cars, filter);

  const sortedCars = useSortedCar(filteredCars, sortMethod);

  return { cars: sortedCars, loading, error, rawCars };
}
