// HOOKS
import { useEffect } from "react";
import React from "react";
import { useCars } from "../hooks/useCars";
import usePagination from "../hooks/usePagination";
import useFilterContext from '../hooks/useFilterContext'
// UI
import image from "../assets/not-image.png";
import CarItem from "../components/UI/CarItem";
import PaginationNav from "../components/filters/PaginationNav";

// UTLS
import Loader from "../utils/Loader";

export default function CarList() {
  
  const { filter, selectedRadioSortMethod } = useFilterContext();

  const { cars, loading } = useCars({
    sortMethod: selectedRadioSortMethod,
    filter,
  });

  // ПАГИНАЦИЯ
  const { paginatedData, page, totalPages, nextPage, prevPage, goToPage } =
    usePagination(cars, 10);

  useEffect(() => {
    goToPage(1);
  }, [filter, selectedRadioSortMethod]);

  return (
    <div>
      {/* Список автомобилей */}
      <div className="flex flex-col gap-2 mt-2">
        {loading ? (
          <Loader />
        ) : paginatedData.length > 0 ? (
          paginatedData.map((car) => (
            <CarItem key={car.id} car={car} img={image} compact />
          ))
        ) : (
          <div className="h-dvh flex  justify-center">
            <p>Машин нет</p>
          </div>
        )}
      </div>

      <PaginationNav
        page={page}
        prevPage={prevPage}
        totalPages={totalPages}
        goToPage={goToPage}
        nextPage={nextPage}
      />
    </div>
  );
}
