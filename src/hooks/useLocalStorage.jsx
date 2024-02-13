import { useEffect, useState } from "react";

const useLocalStorage = (defaultValue, key) => {
  const [value, setValue] = useState(() => {
    const storageValue = window.localStorage.getItem(key);
    return storageValue !== null ? JSON.parse(storageValue) : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export default useLocalStorage