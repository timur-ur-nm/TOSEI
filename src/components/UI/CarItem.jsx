import React from "react";

function CarItem({ car, img, compact }) {
  return (
    <div
      className={`flex items-center gap-4 p-2 border rounded w-full ${
        compact ? "flex-row" : "flex-col"
      }`}
    >
      <img
        src={img}
        alt={car.car_model}
        className={`${
          compact ? "w-20 h-12" : "w-40 h-24"
        } object-cover rounded`}
      />
      <div className="flex flex-col text-sm">
        <span>
          <strong>{car.car}</strong> {car.car_model} ({car.car_model_year})
        </span>
        <span>Цвет: {car.car_color}</span>
        <span>Цена: {car.price}</span>
        <span>VIN: {car.car_vin}</span>
      </div>
    </div>
  );
}
export default React.memo(CarItem);
