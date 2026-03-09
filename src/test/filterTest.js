import { filterCars } from "./filterCars";

const cars = [
  { id: 1, car: "Toyota", availability: true, car_vin: "ABC123" },
  { id: 2, car: "Honda", availability: false, car_vin: "XYZ456" },
  { id: 3, car: "Toyota", availability: true, car_vin: "AAA111" }
];

test("фильтр по марке", () => {
  const result = filterCars(cars, { car: "Toyota" });

  expect(result.length).toBe(2);
});