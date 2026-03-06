import { useSortedCar } from "./usesSortedCar";
import { useFetchCars } from "../hooks/useFetchCars";

export function useCars({ sortMethod = "" }) {
  const { cars, loading, error } = useFetchCars(
    "https://myfakeapi.com/api/cars/",
  );
  
  const sortedCars = useSortedCar(cars, sortMethod);
  
  return { cars: sortedCars, loading, error };
}
