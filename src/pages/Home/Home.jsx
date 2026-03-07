import { useEffect, useState } from "react";
// import background from "../../assets/hero.png";
import CarItem from "../../components/UI/CarItem";
import image from "../../assets/not-image.png";

import CarFilter from "../../components/CarFilter";
import { useCars } from "../../hooks/useCars";
import Loader from "../../utils/Loader";
import useFilterCar from "../../hooks/useFilterCar";

// TASK
// ДЕКОМПОЗИРОВАТЬ КОМПНЕНТ И СДЕЛАТЬ ФИЛЬТРАЦИЮ

export default function Home() {
  // создаем состояние для радио кнопок для того что бы их использовать при сортировке в функции sortCars
  const [selectedRadioSortMethod, setSelectedRadioSortMethod] = useState("");

  // Загрузка данных с сервера через кастомный хук useCars
  const { cars, loading, error } = useCars({
    sortMethod: selectedRadioSortMethod,
  });

  // Тут описаны данные о возможным видах сортировки , вынесенно в отдельную константу что бы отрендерить было легче
  const [filter, setFilter] = useState({
    availability: false,
    car: "",
    model: "",
    car_color: "",
    car_model_year: null,
    price: null,
  });

  const filteredAndSortedCars = useFilterCar(cars, filter);

  const sortOptions = [
    { name: "sort", value: "price-asc", label: "Цена ↑" },
    { name: "sort", value: "price-desc", label: "Цена ↓" },
    { name: "sort", value: "year-desc", label: "Новые" },
    { name: "sort", value: "year-asc", label: "Старые" },
  ];
  return (
    <div className="container mx-auto mt-4 p-4 flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Популярные автомобили</h1>

      {/* Фильтры и сортировка */}
      <CarFilter
        filter={filter}
        setFilter={setFilter}
        sortOptions={sortOptions}
        setSelectedRadioSortMethod={setSelectedRadioSortMethod}
        selectedRadioSortMethod={selectedRadioSortMethod}
      />

      {/* Список автомобилей */}
      <div className="flex flex-col gap-2 mt-2">
        {loading ? (
          <Loader />
        ) : filteredAndSortedCars.length > 0 ? (
          filteredAndSortedCars.map((car) => (
            <CarItem key={car.id} car={car} img={image} compact />
          )) // Показываем список
        ) : (
          <p>Машин нет</p>
        )}
      </div>
    </div>
  );
}
