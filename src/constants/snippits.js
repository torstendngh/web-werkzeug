export default [
  {
    label: "CSS",
    icon: "css",
    color: "#2965f1",
    path: "css",
    snippits: [
      {
        title: "CSS Reset",
        description:
          "This CSS snippet is a modern reset style sheet aimed at removing default browser styling to ensure consistency across different browsers and devices. It starts by removing all default styles except for the display property for most elements, ensuring a clean slate. It sets box-sizing to border-box for all elements, making layout design more intuitive. The snippet also removes list styles, prevents images from exceeding their containers, ensures tables have no spacing between cells, and fixes a specific issue with textarea white-space handling in Safari.",
        code: `/*** The new CSS Reset - version 1.2.0 (last updated 23.7.2021) ***/

/* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property */
*:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
}

/* Preferred box-sizing value */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/*
    Remove list styles (bullets/numbers)
    in case you use it with normalize.css
*/
ol, ul {
    list-style: none;
}

/* For images to not be able to exceed their container */
img {
    max-width: 100%;
}

/* Removes spacing between cells in tables */
table {
    border-collapse: collapse;
}

/* Revert the 'white-space' property for textarea elements on Safari */
textarea {
    white-space: revert;
}`,
      },
      {
        title: "Font Face",
        description:
          'This CSS @font-face rule is used to declare a custom font within a webpage. The font-family "Name" serves as a placeholder and should be replaced with the actual name you want to assign to the custom font. The src attribute points to the location of the font file, which is currently set as "/", indicating that the actual URL path to the font file needs to be specified for proper use. This setup allows web designers to incorporate unique typography into their designs by referencing this custom font in other CSS selectors through the font-family property.',
        code: `@font-face {
    font-family: "Name";
    src: url("/");
}`,
      },
      {
        title: "Center Container",
        description:
          'These CSS properties are used to style an element with a maximum width and center it horizontally within its parent. The max-width is set to "600px", which is a placeholder and can be adjusted to any desired width. The width is set to "100%", ensuring the element stretches to fill its parent up to the maximum specified width. The margin: 0 auto; declaration applies a top and bottom margin of 0 and automatically calculates left and right margins to center the element within its container.',
        code: `margin: 0 auto;
max-width: 600px;
width: 100%;`,
      },
      {
        title: "Modern Custom Scrollbar",
        description:
          "This CSS code styles the scrollbar for webkit-based browsers. It sets the scrollbar width to 20px, makes the track transparent, and colors the thumb dark with rounded corners and internal padding. On hover, the thumb color lightens, creating a modern scrollbar appearance.",
        code: `::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #1E1E1F;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #A0A0A3;
}`,
      },
    ],
  },
  {
    label: "JavaScript",
    icon: "javascript",
    color: "#F7DF1E",
    path: "javascript",
    snippits: [
      {
        title: "UUID generator",
        description:
          "The uuidv4 function generates a version 4 UUID, a universally unique identifier, using a specific format and random values. It starts with a template string and replaces certain characters with random hexadecimal values, ensuring the result follows the UUID v4 standard. This is achieved by using the crypto.getRandomValues method to generate random numbers and manipulating those to fit the UUID format constraints.",
        code: `const uuidv4 = () => {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};`,
      },
      {
        title: "Time Since",
        description:
          'The timeSince function calculates the time elapsed since a given date and returns it as a string. If the elapsed time is more than three days, it formats the date and returns it. For periods less than that, it returns the elapsed time in days, hours, or minutes as appropriate. If the elapsed time is less than a minute, it returns "Just now."',
        code: `const timeSince = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  let interval = seconds / 86400; // days
  if (interval > 3) {
    return date.toLocaleDateString(undefined, {
      day: "2-digit",
      month: "short",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }

  interval = seconds / 3600; // hours
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }

  interval = seconds / 60; // minutes
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }

  return "Just now";
};`,
      },
      {
        title: "Random Range",
        description:
          "This JavaScript function getRandomNumberInRange generates a random integer within a given range, including both the minimum and maximum values. It uses Math.random for the random number, scales it to the range, and rounds down to ensure it's an integer within the range.",
        code: `const getRandomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};`,
      },
      {
        title: "Debounce",
        description:
          "This JavaScript function debounce creates a debounced version of a given callback function, ensuring it's only executed after a specified delay in milliseconds since the last call. It clears any previous timeout to prevent earlier invocations and sets a new timeout with the delay, calling the callback with all arguments passed to the debounced function.",
        code: `const debounce = (callback, time) => {
  let id = null;
  return (...args) => {
    window.clearTimeout(id);
    id = window.setTimeout(() => {
      callback.apply(null, args);
    }, time);
  };
}`,
      },
    ],
  },
  {
    label: "React",
    icon: "react",
    color: "#61dafb",
    path: "react",
    snippits: [
      {
        title: "SVG Icon Component",
        description:
          'Stores SVG icons so the can be written "<Icon icon={"iconName"}\\>"',
        code: `const Icon = ({ icon }) => {
  const icons = {
    iconName: (
      <svg></svg>
    ),
  };

  return icons[icon];
};

export default Icon;`,
      },
      {
        title: "useCursorPosition",
        description:
          "This React hook, useCursorPosition, tracks the user's cursor position on the screen. It initializes state with cursorPosition set to null values for x and y. Using useEffect, it adds an event listener for mousemove to update cursorPosition with the cursor's current screen coordinates. The cleanup function removes the event listener to prevent memory leaks. The hook returns the current cursor position, allowing components to access and use these coordinates.",
        code: `import { useState, useEffect } from 'react';

const useCursorPosition = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: null, y: null });

  useEffect(() => {
    const updateCursorPosition = (ev) => {
      setCursorPosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return cursorPosition;
};`,
      },
    ],
  }
];
