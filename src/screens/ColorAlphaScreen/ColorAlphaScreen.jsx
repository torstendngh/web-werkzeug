import styles from "./ColorAlphaScreen.module.css";
import TextInput from "../../components/TextInput/TextInput";
import { useState, useMemo } from "react";

const ColorAlphaScreen = () => {
  const [firstColor, setFirstColor] = useState("#000000");
  const [secondColor, setSecondColor] = useState("#ffffff");
  const [opacity, setOpacity] = useState(20);

  const calculateColorForOpacity = useMemo(() => {
    const hexToRgb = (hex) => ({
      r: parseInt(hex.slice(1, 3), 16),
      g: parseInt(hex.slice(3, 5), 16),
      b: parseInt(hex.slice(5, 7), 16),
    });

    const rgbToHex = (rgb) =>
      "#" +
      ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b)
        .toString(16)
        .slice(1)
        .toUpperCase();

    const blendColorWithOpacity = (color, background, opacity) => {
      const blendChannel = (colorChannel, backgroundChannel) =>
        Math.round(
          (colorChannel - (1 - opacity) * backgroundChannel) / opacity
        );

      return {
        r: blendChannel(color.r, background.r),
        g: blendChannel(color.g, background.g),
        b: blendChannel(color.b, background.b),
      };
    };

    const opacityDecimal = parseInt(opacity, 10) / 100;
    const colorRgb = hexToRgb(firstColor);
    const backgroundRgb = hexToRgb(secondColor);
    const resultColor = blendColorWithOpacity(
      colorRgb,
      backgroundRgb,
      opacityDecimal
    );
    const alphaHex = Math.round(opacityDecimal * 255)
      .toString(16)
      .padStart(2, "0")
      .toUpperCase();

    return rgbToHex(resultColor) + alphaHex;
  }, [firstColor, secondColor, opacity]);

  return (
    <div className={styles.colorAlphaScreen}>
      <div className={styles.colorContainer}>
        <div
          className={styles.color}
          style={{ backgroundColor: firstColor }}
        ></div>
        <TextInput
          placeholder={"#000000"}
          value={firstColor}
          onChange={(e) => setFirstColor(e.target.value)}
        />
      </div>
      <div className={styles.colorContainer}>
        <div
          className={styles.color}
          style={{ backgroundColor: secondColor }}
        ></div>
        <TextInput
          placeholder={"#ffffff"}
          value={secondColor}
          onChange={(e) => setSecondColor(e.target.value)}
        />
      </div>
      <div className={styles.colorContainer}>
        <TextInput
          placeholder={"20"}
          value={opacity}
          onChange={(e) => setOpacity(e.target.value)}
        />
      </div>
      <span>{calculateColorForOpacity}</span>
    </div>
  );
};

export default ColorAlphaScreen;
