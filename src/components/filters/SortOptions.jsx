import Radio from "../UI/Radio";

// Тут описаны данные о возможным видах сортировки , вынесенно в отдельную константу что бы отрендерить было легче
const SORT_OPTIONS = [
  { name: "sort", value: "price-asc", label: "Цена ↑" },
  { name: "sort", value: "price-desc", label: "Цена ↓" },
  { name: "sort", value: "year-desc", label: "Новые" },
  { name: "sort", value: "year-asc", label: "Старые" },
];
export default function SortOptions({
  selectedRadioSortMethod,
  setSelectedRadioSortMethod,
}) {
  const handleChange = (e) => {
    setSelectedRadioSortMethod(e.target.value);
  };

  return (
    <div className="flex gap-2 items-center mt-2">
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
  );
}
