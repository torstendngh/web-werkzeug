import { useState } from "react";
import styles from "./Toggle.module.css";

const Toggle = ({ onChange, value}) => {
  const [isActive, setIsActive] = useState(value || true);

  useState(() => {
    setIsActive(value);
  }, [value]);

  const handleClick = () => {
    setIsActive((x) => !x);
    onChange();
  };
  return (
    <div
      className={`${isActive ? styles.isActive : ""} ${styles.toggle}`}
      onClick={handleClick}
    >
      <div></div>
    </div>
  );
};

export default Toggle;
