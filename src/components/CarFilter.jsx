import Checkbox from "../components/UI/CheckBox";
import Radio from "../components/UI/Radio";

// ЗАДАЧА
// сделать фильтрацию по остльным видом и декомпозировать этот элемент 

export default function CarFilter({
  filter,
  setFilter,
  cars,
  sortOptions,
  setSelectedRadioSortMethod,
  selectedRadioSortMethod,
}) {
  return (
    <>
      <div className="flex flex-col gap-2 p-2 border rounded bg-white w-full">
        {/* Первая строка: Checkbox */}
        <div className="flex items-center gap-2">
          <Checkbox
            checked={filter.availability}
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, availability: e.target.checked }))
            }
          >
            В наличии
          </Checkbox>
        </div>

        {/* Вторая строка: Селекты */}
        <div className="flex flex-wrap gap-2">
          <label className="flex flex-col text-sm">
            Марка:
            <select className="border rounded p-1 text-sm">
              <option value="all">Все</option>
              
              
            </select>
          </label>

          <label className="flex flex-col text-sm">
            Модель:
            <select className="border rounded p-1 text-sm">
              <option value="">Все</option>
            </select>
          </label>

          <label className="flex flex-col text-sm">
            Цвет:
            <select className="border rounded p-1 text-sm">
              <option value="">Все</option>
            </select>
          </label>
        </div>

        {/* Третья строка: год, цена, VIN */}
        <div className="flex flex-wrap gap-2">
          <label className="flex flex-col text-sm">
            Год выпуска от:
            <input
              type="number"
              placeholder="2000"
              className="border rounded p-1 text-sm"
            />
          </label>

          <label className="flex flex-col text-sm">
            Цена до ($):
            <input
              type="number"
              placeholder="5000"
              className="border rounded p-1 text-sm"
            />
          </label>

          <label className="flex flex-col text-sm">
            VIN:
            <input
              type="text"
              placeholder="Введите VIN"
              className="border rounded p-1 text-sm"
            />
          </label>
        </div>
      </div>

      {/* Радио-кнопки сортировки */}
      <div className="flex gap-2 items-center mt-2">
        {sortOptions.map((option) => (
          <Radio
            key={option.value}
            name={option.name}
            value={option.value}
            checked={selectedRadioSortMethod === option.value}
            onChange={e => setSelectedRadioSortMethod(e.target.value)}
          >
            {option.label}
          </Radio>
        ))}
      </div>
    </>
  );
}