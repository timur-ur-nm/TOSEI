import { useState, useEffect } from "react";
import Input from "../UI/Input";
import useDebounce from "../../hooks/useDebouce";

const inputs = [
  {
    label: "Год выпуска от",
    name: "car_model_year",
    type: "number",
    placeholder: "2000",
  },
  {
    label: "Цена до ($)",
    name: "price",
    type: "number",
    placeholder: "5000",
  },
  {
    label: "VIN",
    name: "car_vin",
    type: "text",
    placeholder: "Введите VIN",
  },
];

export default function CarInputFilters({ filter, setFilter }) {
  const [localFilter, setLocalFilter] = useState(filter);

  const debouncedFilter = useDebounce(localFilter, 400);

  useEffect(() => {
    setFilter(debouncedFilter);
  }, [debouncedFilter, setFilter]);

  const handleChange = (name, value) => {
    if (name === "car_model_year") {
      value = Math.max(1961, Math.min(2019, value));
    }

    setLocalFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  useEffect(() => {
    setLocalFilter(filter);
  }, [filter]);

  return (
    <div className="flex flex-wrap gap-3">
      {inputs.map((input) => (
        <Input
          key={input.name}
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          value={localFilter[input.name] ?? ""}
          onChange={(e) => handleChange(input.name, e.target.value)}
        />
      ))}
    </div>
  );
}
