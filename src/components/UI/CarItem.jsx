import React from "react";
import { Link } from "react-router";
import AvailabilitySpan from "./AvailabilitySpan";
function CarItem({ car, img }) {
  return (
    <Link to={`/catalog/${car.id}`}>
      <div
        className="
        w-full border border-[#E2E2E2] rounded-xl
        p-4
        flex flex-col
        gap-3
        bg-white
        hover:shadow-md
        transition
        md:flex-row
        md:items-center
      "
      >
        <img
          src={img}
          alt={car.car_model}
          className="
          w-full
          h-48
          object-cover
          rounded-lg
          md:w-56
          md:h-32
        "
        />

        <div className="flex flex-col flex-1 gap-1 text-[15px]">
          <span className="font-semibold text-[18px] text-gray-900">
            {car.car} {car.car_model}
          </span>

          <span className="text-gray-500">Объем двигателя {car.engine}</span>

          <span className="text-gray-500">Год {car.car_model_year} г.</span>

          <span className="text-gray-500">Пробег {car.mileage}</span>

          <span className="text-gray-500">Привод {car.drive}</span>

          <span className="text-gray-500">КПП {car.gearbox}</span>

          <span className="text-gray-500">VIN {car.car_vin}</span>
        </div>

        <div className="border-t pt-3 mt-2 flex flex-col gap-2 md:border-0 md:pt-0 md:mt-0 md:ml-auto md:text-right md:items-end">
          <span className="text-sm text-gray-400">
            Стоимость во Владивостоке
          </span>

          <span className="text-2xl font-bold">{car.price} ₽</span>

          <AvailabilitySpan availability={car.availability} />
          
        </div>
      </div>
    </Link>
  );
}

export default React.memo(CarItem);
