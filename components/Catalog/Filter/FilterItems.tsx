import styles from "./Filter.module.scss";
import FilterPopup from "./FilterPopup";
import React from "react";

interface PropsType {
  title: string;
  params: Array<string | number>;
  toggleFilter: (string) => void;
  activeFilter: string;
}

export default function FilterItems({
  title,
  params,
  toggleFilter,
  activeFilter,
}: PropsType) {
  return (
    <div onClick={() => toggleFilter(title)} className={styles.item}>
      <span>{title}</span>
      {activeFilter === title ? <FilterPopup params={params} /> : ""}
    </div>
  );
}
