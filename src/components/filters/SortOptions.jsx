import Radio from "../UI/Radio";
import useFilterContext from "../../hooks/useFilterContext";

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
    <div className="flex flex-col gap-3 mt-4">
      <h2 className="font-bold text-xl sm:text-2xl">
        Популярные автомобили
      </h2>

      <div className="flex flex-wrap gap-3">
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