export default {
  css: [
    {
      title: "CSS Reset",
      description:
        "Resets all CSS styles so every HTML component is conistand across all browser",
      code: 
`/*** The new CSS Reset - version 1.2.0 (last updated 23.7.2021) ***/

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
      description: "Custom fonts in CSS",
      code:
`@font-face {
    font-family: "Name";
    src: url("/");
}`,
    },
    {
      title: "Center Container",
      description:
        "An element that stays in the center with a max width and when the parent gets too small it shrinks",
      code:
`margin: 0 auto;
max-width: 600px;
width: 100%;`
    },
    {
      title: "Modern Custom Scrollbar",
      description: "A modern rounded scrollbar",
      code:
`::-webkit-scrollbar {
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
}`
    }
  ],
  javascript: [
    {
      title: "UUID generator",
      description: "A UUID generator. Note: it is not advised to make random generators with Math.random()",
      code: 
`const uuidv4 = () => {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};`
    },
    {
      title: "Time Since",
      description: "A function that receives a timestamp and returns something like \"5 minutes ago\"",
      code:
`const timeSince = (dateString) => {
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
};`
    }
  ],
  react: [
    {
      title: "SVG Icon Component",
      description: "Stores SVG icons so the can be written \"<Icon icon={\"iconName\"}\\>\"",
      code:
`const Icon = ({ icon }) => {
  const icons = {
    iconName: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-bring-to-front"
      >
        <rect x="8" y="8" width="8" height="8" rx="2" />
        <path d="M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" />
        <path d="M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" />
      </svg>
    ),
  };

  return icons[icon];
};

export default Icon;`
    }
  ]
};
