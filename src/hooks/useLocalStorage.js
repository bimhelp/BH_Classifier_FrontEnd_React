import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialState = "") => {
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? initialState
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);
  return [data, setData];
};

// Оператор нулевого слияния (??) — это логический оператор, возвращающий значение правого операнда, если значение левого операнда содержит null или undefined, в противном случае возвращается значение левого операнда.
