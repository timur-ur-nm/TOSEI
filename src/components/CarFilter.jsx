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
    <div className="flex flex-col gap-6 sm:gap-9">
      <div className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 shadow-xl rounded-lg bg-white w-full">
        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <Checkbox
            checked={filter.availability}
            onChange={(checked) =>
              setFilter((prev) => ({
                ...prev,
                availability: checked,
              }))
            }
          >
            В наличии
          </Checkbox>
        </div>

        {/* Select filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <CarSelectFilters
            filter={filter}
            setFilter={setFilter}
            carName={carName}
            carModelsByName={carModelsByName}
            carColorByNameAndModel={carColorByNameAndModel}
          />
        </div>

        {/* Inputs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <CarInputFilters filter={filter} setFilter={setFilter} />
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between sm:items-center">
          <button
            className="w-full sm:w-fit py-2 px-4 rounded bg-[#CD0000] text-white hover:bg-red-700 transition"
            onClick={resetFilter}
          >
            Очистить
          </button>

          <span className="text-sm text-gray-600 text-center sm:text-right">
            Автомобилей в наличии: {cars.length}
          </span>
        </div>
      </div>

      <SortOptions />
    </div>
  );
}
