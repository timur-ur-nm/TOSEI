import { useContext } from "react";
import { FilterStateContext, FilterActionsContext } from "../context/FilterContext";

export default function useFilterContext() {
  const state = useContext(FilterStateContext);
  const actions = useContext(FilterActionsContext);

  if (!state || !actions) {
    throw new Error("useFilter must be used inside FilterProvider");
  }

  return {
    ...state,
    ...actions,
  };
}