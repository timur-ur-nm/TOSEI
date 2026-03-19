// HOOKS
import { useEffect } from "react";
import React from "react";
import { useCars } from "../hooks/useCars";
import usePagination from "../hooks/usePagination";
import useFilterContext from "../hooks/useFilterContext";

// UI

import CarItem from "../components/UI/CarItem";
import PaginationNav from "../components/filters/PaginationNav";
import SortOptions from "./filters/SortOptions";
// UTLS
import Loader from "../utils/Loader";
import StaggerContainer from "../components/animations/StaggerContainer";
import SlideUp from "../components/animations/SlideUp";

export default function CarList() {
  const { filter, selectedRadioSortMethod } = useFilterContext();

  const { cars, loading } = useCars({
    sortMethod: selectedRadioSortMethod,
    filter,
  });

  const { paginatedData, page, totalPages, nextPage, prevPage, goToPage } =
    usePagination(cars, 10);

  useEffect(() => {
    goToPage(1);
  }, [filter, selectedRadioSortMethod]);

  // ✅ 1. Loader
  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader />
      </div>
    );
  }

  // ✅ 2. Нет машин
  if (!paginatedData.length) {
    return (
      <div>
        <SortOptions />
        <div className="h-[50vh] flex justify-center items-center">
          <p>Машин нет</p>
        </div>
      </div>
    );
  }

  // ✅ 3. Есть машины
  return (
    <div>
      <SortOptions />

      <StaggerContainer className="flex flex-col gap-2 mt-2">
        {paginatedData.map((car) => (
          <SlideUp key={car.id}>
            <CarItem car={car} compact />
          </SlideUp>
        ))}
      </StaggerContainer>

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
