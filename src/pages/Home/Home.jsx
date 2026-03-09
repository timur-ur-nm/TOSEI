import { useEffect, useState } from "react";
// HOOKS
import { useCars } from "../../hooks/useCars";
import useFilterCar from "../../hooks/useFilterCar";
import usePagination from ".././../hooks/usePagination";

// UI
import background from "../../assets/hero.png";
import CarItem from "../../components/UI/CarItem";
import image from "../../assets/not-image.png";
import CarFilter from "../../components/CarFilter";
import PaginationNav from "../../components/filters/PaginationNav";

// LOADER
import Loader from "../../utils/Loader";

export default function Home() {
  // создаем состояние для радио кнопок для того что бы их использовать при сортировке в функции sortCars
  const [selectedRadioSortMethod, setSelectedRadioSortMethod] = useState("");

  // Загрузка данных с сервера через кастомный хук useCars
  const { cars, loading, error } = useCars({
    sortMethod: selectedRadioSortMethod,
  });

  const initialFilter = {
    availability: false,
    car: "",
    car_model: "",
    car_color: "",
    car_model_year: null,
    price: null,
    car_vin: "",
  };

  // СОЗДАНИЕ СОСТОЯНИЯ ДЛЯ ФИЛЬТРА И ИНИЗИАЛИЗАЦИИ ЕГО НАЧАЛЬНОГО СОСТОЯНИЯ, НАЧАЛЬНОЕ СОСТОЯНИЕ НУЖНО ДЛЯ СБРОСА ВСЕГО ФИЛЬТРА
  const [filter, setFilter] = useState(initialFilter);

  // МАССИВ ОТФИЛЬТРОВАННЫХ И ОТСОРТИРОВАННЫХ ЭЛЕМЕНТОВ КОТОРЫЕ РЕНДЕРЯТСЯ
  const filteredAndSortedCars = useFilterCar(cars, filter);

  // ПАГИНАЦИЯ
  const { paginatedData, page, totalPages, nextPage, prevPage, goToPage } =
    usePagination(filteredAndSortedCars, 10);

  return (
    <div className="container mx-auto mt-4 p-4 flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Популярные автомобили</h1>

      {/* Фильтры и сортировка */}
      <CarFilter
        cars={cars}
        filter={filter}
        setFilter={setFilter}
        setSelectedRadioSortMethod={setSelectedRadioSortMethod}
        selectedRadioSortMethod={selectedRadioSortMethod}
        initialFilter={initialFilter}
      />

      {/* Список автомобилей */}
      <div className="flex flex-col gap-2 mt-2">
        {loading ? (
          <Loader />
        ) : paginatedData.length > 0 ? (
          paginatedData.map((car) => (
            <CarItem key={car.id} car={car} img={image} compact />
          ))
        ) : (
          <p>Машин нет</p>
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
