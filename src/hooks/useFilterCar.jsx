import React from "react";

export default function useFilterCar(sortedCars,filter) {
  const sortedAndFilteredCars = sortedCars.filter((car) => {
    if (filter.availability && !car.availability) return false
    if (filter.car && car.car !== filter.car) return false
    return true
  });

// const filteredCars = filter.availability ? cars.filter((car) => car.availability) : cars;

  return sortedAndFilteredCars;

}
