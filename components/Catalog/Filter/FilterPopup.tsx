import styles from "./Filter.module.scss";

export default function FilterPopup({ params }) {
  return (
    <div className={styles.menu}>
      {params.map((obj, index) => (
        <label key={index}>
          <input type="checkbox" />
          <span className={styles.menuTitle}>{obj}</span>
        </label>
      ))}
    </div>
  );
}
