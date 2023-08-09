import { useState } from "react";
import Option from "./Option";
import styles from "./OptionsContainer.module.css";

const OptionsContainer = () => {
  const [optionsData] = useState([
    {
      title: "Play Local",
      iconClasses: "fa-solid fa-users",
      backgroundColor: "#2b5391",
    },
    {
      title: "Play Online",
      iconClasses: "fa-solid fa-earth-americas",
      backgroundColor: "#308a6c",
    },
    {
      title: "Options",
      iconClasses: "fa-solid fa-gears",
      backgroundColor: "#d99343",
    },
    {
      title: "Unlocks",
      iconClasses: "fa-solid fa-trophy",
      backgroundColor: "#7d3ec3",
    },
    {
      title: "Exit",
      iconClasses: "fa-solid fa-circle-xmark",
      backgroundColor: "#b63d2f",
    },
  ]);

  const IconStructure = ({ backgroundColor, iconClasses }) => (
    <div className={styles.iconHolder}>
      <div className={styles.lines}></div>
      <i
        style={{ backgroundColor: backgroundColor }}
        className={iconClasses}
      ></i>
    </div>
  );

  return (
    <div className={styles.options}>
      {optionsData.map(({ title, backgroundColor, iconClasses }) => (
        <Option
          title={title}
          icon={
            <IconStructure
              backgroundColor={backgroundColor}
              iconClasses={iconClasses}
            />
          }
        />
      ))}
    </div>
  );
};

export default OptionsContainer;
