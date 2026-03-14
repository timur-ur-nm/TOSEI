import { useState, createContext, useMemo } from "react";

export const FilterStateContext = createContext(null);
export const FilterActionsContext = createContext(null);

const initialFilter = {
  availability: false,
  car: "",
  car_model: "",
  car_color: "",
  car_model_year: null,
  price: null,
  car_vin: "",
};

export default function FilterProvider({ children }) {
  const [selectedRadioSortMethod, setSelectedRadioSortMethod] = useState("");
  const [filter, setFilter] = useState(initialFilter);

  const state = useMemo(() => {
    return {
      filter,
      selectedRadioSortMethod,
      initialFilter,
    };
  }, [filter, selectedRadioSortMethod]);

  const actions = {
    setFilter,
    setSelectedRadioSortMethod,
  };

  return (
    <FilterStateContext.Provider value={state}>
      <FilterActionsContext.Provider value={actions}>
        {children}
      </FilterActionsContext.Provider>
    </FilterStateContext.Provider>
  );
}
