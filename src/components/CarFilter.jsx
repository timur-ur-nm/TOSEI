// HOOKS
import useCarFilterOptions from "../hooks/useCarFilterOptions";

// UI
import Checkbox from "../components/UI/CheckBox";
import CarInputFIlters from '../components/filters/CarInputFIlters'
import CarSelectFilters from "../components/filters/CarSelectFilters";
import SortOptions from "../components/filters/SortOptions";

export default function CarFilter({
  filter,
  setFilter,
  cars,
  selectedRadioSortMethod,
  setSelectedRadioSortMethod,
  initialFilter,
}) {
  const { carName, carModelsByName, carColorByNameAndModel } =
    useCarFilterOptions(cars, filter);

  return (
    <>
      <div className="flex flex-col gap-2 p-2 border rounded bg-white w-full">
        {/* Первая строка: Checkbox */}
        <div className="flex items-center gap-2">
          <Checkbox
            checked={filter.availability}
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, availability: e }))
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
        <CarInputFIlters filter={filter} setFilter={setFilter}/>

        <button
          className="w-fit p-2 border-1 rounded"
          onClick={() => setFilter(initialFilter)}
        >
          Очистить
        </button>
      </div>

      <SortOptions
        selectedRadioSortMethod={selectedRadioSortMethod}
        setSelectedRadioSortMethod={setSelectedRadioSortMethod}
      />
    </>
  );
}
