import styles from "./Option.module.css";

const Option = ({ title, icon }) => {
  return (
    <div className={styles.option}>
      {icon}

      <div className={styles.titleHolder}>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  );
};

export default Option;
