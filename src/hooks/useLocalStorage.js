import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialState = "") => {
  // const [data, setData] = useState(
  //   () => JSON.parse(localStorage.getItem(key)) ?? initialState
  // );
  const [data, setData] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialState;
    } catch (error) {
      console.error(`Error parsing localStorage key "${key}":`, error);
      return initialState;
    }
  });

  // console.log("Get From LocalStorage", key, data);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
    // console.log("Set LocalStorage", key, data);
  }, [data, key]);
  return [data, setData];
};

// Оператор нулевого слияния (??) — это логический оператор, возвращающий значение правого операнда, если значение левого операнда содержит null или undefined, в противном случае возвращается значение левого операнда.
