import { useEffect, useState } from "react";
import styles from "./FlexToolScreen.module.css";
import Tabs from "./Tabs";
import Button from "../../components/Button/Button";
import Code from "../../components/Code/Code";

const flexboxAttributes = [
  {
    css: "flex-direction",
    values: [
      {
        icon: "bigArrowRight",
        css: "row",
        isDefault: true,
      },
      {
        icon: "bigArrowDown",
        css: "column",
      },
      {
        icon: "bigArrowLeft",
        css: "row-reverse",
      },
      {
        icon: "bigArrowUp",
        css: "column-reverse",
      },
    ],
  },
  {
    css: "align-items",
    values: [
      {
        icon: "alignStart",
        css: "flex-start",
      },
      {
        icon: "alignCenter",
        css: "center",
      },
      {
        icon: "alignEnd",
        css: "flex-end",
      },
      {
        icon: "alignStretch",
        css: "stretch",
        isDefault: true,
      },
      {
        icon: "alignBaseline",
        css: "baseline",
      },
    ],
  },
  {
    css: "justify-content",
    values: [
      {
        icon: "justifyStart",
        css: "flex-start",
        isDefault: true,
      },
      {
        icon: "justifyCenter",
        css: "center",
      },
      {
        icon: "justifyEnd",
        css: "flex-end",
      },
      {
        icon: "justifyBetween",
        css: "space-between",
      },
      {
        icon: "justifyAround",
        css: "space-around",
      },
      {
        icon: "justifyEvenly",
        css: "space-evenly",
      },
    ],
  },
  {
    css: "align-content",
    values: [
      {
        icon: "close",
        css: "normal",
        isDefault: true,
      },
      {
        icon: "alignContentStart",
        css: "flex-start",
      },
      {
        icon: "alignContentCenter",
        css: "center",
      },
      {
        icon: "alignContentEnd",
        css: "flex-end",
      },
      {
        icon: "alignContentStretch",
        css: "stretch",
      },
      {
        icon: "alignContentBetween",
        css: "space-between",
      },
      {
        icon: "alignContentAround",
        css: "space-around",
      },
    ],
  },
  {
    css: "flex-wrap",
    values: [
      {
        icon: "close",
        css: "nowrap",
        isDefault: true,
      },
      {
        icon: "wrap",
        css: "wrap",
      },
      {
        icon: "wrapReverse",
        css: "wrap-reverse",
      },
    ],
  },
];

const FlexToolScreen = () => {
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [selectedAttributesCSS, setSelectedAttributesCSS] = useState([]);
  const [showLabels, setShowLabels] = useState(true)

  const handleSelect = (attributeCSS, selectedValue) => {
    setSelectedAttributes((prevSelectedAttributes) => {
      const index = prevSelectedAttributes.findIndex(
        (attr) => attr.attribute === attributeCSS
      );
      const isDefaultSelected = flexboxAttributes
        .find((attr) => attr.css === attributeCSS)
        .values.some((val) => val.css === selectedValue.css && val.isDefault);

      if (isDefaultSelected) {
        return prevSelectedAttributes.filter(
          (attr) => attr.attribute !== attributeCSS
        );
      } else {
        const newAttribute = {
          attribute: attributeCSS,
          value: selectedValue.css,
        };
        if (index === -1) {
          return [...prevSelectedAttributes, newAttribute];
        } else {
          return prevSelectedAttributes.map((attr) =>
            attr.attribute === attributeCSS ? newAttribute : attr
          );
        }
      }
    });
  };

  const generateCSS = () => {
    const flexRule = "display: flex;";
    return (
      flexRule +
      "\n" +
      selectedAttributes
        .map(({ attribute, value }) => `${attribute}: ${value};`)
        .join("\n")
    );
  };

  useEffect(() => {
    setSelectedAttributesCSS(generateCSS);
  }, [selectedAttributes]);

  const copyToClipboard = (string) => {
    navigator.clipboard.writeText(string);
  };

  return (
    <div className={styles.flexToolScreen}>

      <div className={styles.center}>
        <div className={styles.display}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <style>{`.${styles.display} { ${selectedAttributesCSS} }`}</style>
        </div>
        
        <Button onClick={() => copyToClipboard(selectedAttributesCSS)}>Copy to Cliboard</Button>
      </div>

      <div className={styles.controls}>
        {flexboxAttributes.map((attribute, index) => (
          <Tabs
            key={index}
            label={showLabels ? attribute.css : undefined}
            tabs={attribute.values}
            onChange={(selectedValue) =>
              handleSelect(attribute.css, selectedValue)
            }
          />
        ))}
        {/* <Tabs
          label={showLabels ?"Style": undefined}
          tabs={[
            {
              name: "Only necessary",
              icon: "codeNecessary",
            },
            {
              name: "All",
              icon: "codeAll",
            },
            {
              name: "Modern",
              icon: "codeModern",
            },
          ]}
        /> */}
        <Code language={"css"}>
          {selectedAttributesCSS}
        </Code>
        <button className={styles.smallButton} onClick={() => setShowLabels(x => !x)}>{showLabels ? "Hide Labels" : "Show Labels"}</button>
      </div>
    </div>
  );
};

export default FlexToolScreen;
