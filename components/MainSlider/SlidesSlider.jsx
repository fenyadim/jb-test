import ProductSlider from "./ProductSlider";

import styles from "../../styles/components/slider.module.scss";

export default function SlidesSlider({ title, desc, mainImg, productImg }) {
  return (
    <div className={styles.offer}>
      <div className={styles.imageOffer}>
        <img
          style={{ top: `${mainImg.moving}%` }}
          src={`http://localhost:1337${mainImg.image.url}`}
          alt={mainImg.alt}
        />
      </div>
      <div className={styles.infoOffer}>
        <div className={styles.leftInfo}>
          <h1 className={styles.leftTitle}>{title}</h1>
          <p className={styles.leftDescription}>{desc}</p>
          {/*className={styles.button}*/}
          <button className={styles.button}>Подробнее</button>
        </div>
        <div className={styles.rightInfo}>
          <div className={styles.sliderInfo}>
            <ProductSlider productImg={productImg} />
          </div>
        </div>
      </div>
    </div>
  );
}
