import MySelect from "../../components/UI/Select";
export default function CarSelectFilters({
  filter,
  setFilter,
  carName,
  carModelsByName,
  carColorByNameAndModel,
}) {
  const selects = [
    {
      key: "car",
      label: "Марка",
      options: carName,
    },
    {
      key: "car_model",
      label: "Модель",
      options: carModelsByName,
    },
    {
      key: "car_color",
      label: "Цвет",
      options: carColorByNameAndModel,
    },
  ];
  return (
    <>
      <div className="flex flex-wrap gap-2 ">
        {selects.map((select) => {
          return (
            <MySelect
              key={select.key}
              value={filter[select.key]}
              onChange={(value) =>
                setFilter((prev) => ({
                  ...prev,
                  [select.key]: value,
                }))
              }
              defaultValue="Все"
              options={select.options}
            >
              {select.label}
            </MySelect>
          );
        })}
      </div>
    </>
  );
}
