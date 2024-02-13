export const generateRandomPastelColor = () => {
  // Generate a random hue value between 0 and 360
  const hue = Math.floor(Math.random() * 360);
  // Set saturation to a range between 60% and 90% for pastel colors
  const saturation = 60 + Math.random() * 30;
  // Set lightness to a range between 70% and 90% to ensure the color is light
  const lightness = 70 + Math.random() * 20;

  // Convert HSL to RGB, then RGB to HEX
  const rgb = hslToRgb(hue, saturation, lightness);
  return rgbToHex(...rgb);
};

export const hslToRgb = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  // Convert the RGB values to the range [0, 255]
  return [
    Math.floor(f(0) * 255),
    Math.floor(f(8) * 255),
    Math.floor(f(4) * 255),
  ];
}

export const rgbToHex = (r, g, b) => {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

export const calculateOverlayColor = (mainHex, backgroundHex, opacity) => {
  if (opacity < 0 || opacity > 100) {
    throw new Error("Opacity must be between 0 and 100");
  }

  // Convert hex color to RGB
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  };

  // Convert RGB to hex color
  const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');

  // Calculate the opacity in hex
  const alphaToHex = (alpha) => {
    const alphaValue = Math.round(alpha * 255);
    return alphaValue.toString(16).padStart(2, '0');
  };

  const mainRgb = hexToRgb(mainHex);
  const backgroundRgb = hexToRgb(backgroundHex);
  const alpha = opacity / 100;

  // Calculate the resulting color
  const resultingRgb = mainRgb.map((val, index) => {
    return Math.round(val * alpha + backgroundRgb[index] * (1 - alpha));
  });

  const resultingHex = rgbToHex(...resultingRgb);
  const alphaHex = alphaToHex(alpha);

  return resultingHex + alphaHex;
}