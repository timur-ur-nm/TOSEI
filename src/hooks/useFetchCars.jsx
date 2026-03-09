import axios from "axios";
import { useState, useEffect } from "react";

// ЭТОТ ХУК СОЗДАН ДЛЯ ПОЛУЧЕНИЯ ДАННЫХ С СЕРВЕРА
// ОН ВОЗВРАЩАЕТ ОБЪЕКТ:
// 1. СПИСКОМ ДАННЫХ
// 2. СОСТОЯНИЕМ ЗАГРУЗКИ
// 3. ОШИБКИ

export function useFetchCars(url) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // СОЗДАЕМ ЭФФЕКТ ЗАГРУЗКИ ДАННЫХ
  useEffect(() => {
    const controller = new AbortController();

    const loadCars = async () => {
      // await new Promise((resolve) => setTimeout(resolve, 10000)); // задержка 1 секунда
      try {
        // AXIOS GET ЗАПРОС НА СЕРВЕР ЧЕРЕЗ URL
        const response = await axios.get(url, { signal: controller.signal });
        
        // УСТАНАВЛИВАЕМ СОСТОЯНИЕ ДЛЯ СПИСКА КОТОРЫЙ ВОЗВРАЩАЕТ НАМ СЕРВЕР
        setCars(response.data.cars);
        // setCars(response.data.cars);
      } catch (error) {
        // ОТЛАВЛИВАЕМ ОШИБКИ
        if (error.name !== "CanceledError") {
          setError(error);
        }
      } finally {
        // УСТАНАВЛИВАЕМ СОСТОЯНИЕ ЗАГРУЗКИ
        setLoading(false);
      }
    };

    loadCars();

    return () => controller.abort();
  }, [url]);

  // ВОЗВРАЩЕМ ОБЪЕКТ С ДАННЫМИ
  return { cars, loading, error };
}
