import Radio from "../UI/Radio";

// context
import useFilterContext from "../../hooks/useFilterContext";

// Тут описаны данные о возможным видах сортировки , вынесенно в отдельную константу что бы отрендерить было легче
const SORT_OPTIONS = [
  { name: "sort", value: "price-asc", label: "Цена ↑" },
  { name: "sort", value: "price-desc", label: "Цена ↓" },
  { name: "sort", value: "year-desc", label: "Новые" },
  { name: "sort", value: "year-asc", label: "Старые" },
];
export default function SortOptions() {
  const { selectedRadioSortMethod, setSelectedRadioSortMethod } =
    useFilterContext();

  const handleChange = (e) => {
    setSelectedRadioSortMethod(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2 mt-2  ">
      <h1 className="font-bold text-2xl">Популярные автомобили</h1>
      <div className="flex items-center gap-3">
        {SORT_OPTIONS.map((option) => (
          <Radio
            key={option.value}
            name={option.name}
            value={option.value}
            checked={selectedRadioSortMethod === option.value}
            onChange={handleChange}
          >
            {option.label}
          </Radio>
        ))}
      </div>
    </div>
  );
}
