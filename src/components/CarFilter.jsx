// HOOKS
import useCarFilterOptions from "../hooks/useCarFilterOptions";

// Context
import useFilterContext from "../hooks/useFilterContext";

// UI
import Checkbox from "../components/UI/CheckBox";
import CarInputFilters from "./filters/CarInputFilters";
import CarSelectFilters from "../components/filters/CarSelectFilters";
import SortOptions from "../components/filters/SortOptions";

export default function CarFilter({ cars }) {
  const { filter, setFilter, initialFilter } = useFilterContext();

  const { carName, carModelsByName, carColorByNameAndModel } =
    useCarFilterOptions(cars, filter);

  const resetFilter = () => {
    setFilter({ ...initialFilter });
  };

  return (
    <div className="flex flex-col gap-9">
      <div className="flex flex-col gap-2 p-6 border rounded bg-white w-full">
        {/* Первая строка: Checkbox */}
        <div className="flex items-center gap-2">
          <Checkbox
            checked={filter.availability}
            onChange={(cheked) =>
              setFilter((prev) => ({
                ...prev,
                availability: cheked,
              }))
            }
          >
            В наличии
          </Checkbox>
        </div>

        {/* Вторая строка: Селекты */}
        <CarSelectFilters
          filter={filter}
          setFilter={setFilter}
          carName={carName}
          carModelsByName={carModelsByName}
          carColorByNameAndModel={carColorByNameAndModel}
        />

        {/* Третья строка: год, цена, VIN */}
        <CarInputFilters filter={filter} setFilter={setFilter} />

        <div className="w-full flex justify-between items-center">
          <button
            className="w-fit py-2 px-4 border-1 rounded bg-[#CD0000] text-white"
            onClick={resetFilter}
          >
            Очистить
          </button>

          <span>Автомобилей в наличии: {cars.length}</span>
        </div>
      </div>

      <SortOptions />
    </div>
  );
}
