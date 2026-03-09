export default function CarInputFIlters({ filter, setFilter }) {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        <label className="flex flex-col text-sm">
          Год выпуска от:
          <input
            type="number"
            placeholder="2000"
            className="border rounded p-1 text-sm"
            value={filter.car_model_year || ""}
            onChange={(e) => {
              let value = e.target.value;

              value = Math.max(1961, Math.min(2019, value));

              setFilter({ ...filter, car_model_year: value });
            }}
          />
        </label>

        <label className="flex flex-col text-sm">
          Цена до ($):
          <input
            type="number"
            placeholder="5000"
            className="border rounded p-1 text-sm"
            value={filter.price || ""}
            onChange={(e) => setFilter({ ...filter, price: e.target.value })}
            min={1961}
          />
        </label>

        <label className="flex flex-col text-sm">
          VIN:
          <input
            type="text"
            placeholder="Введите VIN"
            className="border rounded p-1 text-sm"
            value={filter.car_vin}
            onChange={(e) => setFilter({ ...filter, car_vin: e.target.value })}
          />
        </label>
      </div>
    </>
  );
}
