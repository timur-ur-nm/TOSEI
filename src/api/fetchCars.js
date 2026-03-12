import axios from "axios";

export async function fetchCars(url, signal) {
  const { data } = await axios.get(url, { signal });
  return data.cars;
}