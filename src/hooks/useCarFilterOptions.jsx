import { useMemo } from "react";

export default function useCarFilterOptions(cars, filter) {
  const carName = useMemo(() => {
    return [...new Set(cars.map((car) => car.car))]
      .slice(0, 10)
      .map((car) => ({
        name: car,
        value: car,
      }));
  }, [cars]);

  

  const carModelsByName = useMemo(() => {
    return [
      ...new Set(
        cars
          .filter((car) => !filter.car || car.car === filter.car)
          .map((car) => car.car_model),
      ),
    ]
      .slice(0, 10)
      .map((model) => ({
        name: model,
        value: model,
      }));
  }, [cars, filter.car]);

  const carColorByNameAndModel = useMemo(() => {
    return [
      ...new Set(
        cars
          .filter(
            (car) =>
              (!filter.car || car.car === filter.car) &&
              (!filter.car_model || car.car_model === filter.car_model),
          )
          .map((car) => car.car_color),
      ),
    ]
      .slice(0, 10) 
      .map((color) => ({
        name: color,
        value: color,
      }));
  }, [cars, filter.car , filter.car_model]);


  
  return { carName, carModelsByName, carColorByNameAndModel };
}
