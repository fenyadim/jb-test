import ProductSlider from "./ProductSlider";

import styles from "../styles/components/homeSlider.module.scss";

export default function HomeSlider() {
  return (
    <div className={styles.offer}>
      <div className={styles.imageOffer}>
        <img
          style={{ top: "-100%" }}
          src="../static/img/supreme-the-north-face-ss19-arc-logo-street-style-8.jpg"
          alt="Pic"
        />
      </div>
      <div className={styles.infoOffer}>
        <div className={styles.leftInfo}>
          <h1 className={styles.leftTitle}>
            Supreme x The North Face SS19 Collection
          </h1>
          <p className={styles.leftDescription}>
            Supreme и The North Face снова объединились для создания
            весенне-летней капсулы. Коллекция Na-Kel Smith состоит из целого
            ряда готовых для горных прогулок костюмов.
          </p>
          <a className={styles.button} href="#">
            Подробнее
          </a>
        </div>
        <div className={styles.rightInfo}>
          <div className={styles.sliderInfo}>
            <ProductSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
