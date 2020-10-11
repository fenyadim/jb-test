import SwiperCore, { Navigation, A11y, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "../styles/components/homeSlider.module.scss";

SwiperCore.use([Navigation, A11y, Mousewheel]);

export default function ProductSlider() {
  return (
    <Swiper
      style={{ height: "550px", width: "650px" }}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop
      mousewheel
    >
      <SwiperSlide>
        <img
          className={styles.productImg}
          src="../static/img/supremexnorthface2.png"
          alt="Image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={styles.productImg}
          src="../static/img/supremexnorthface.png"
          alt="Image"
        />
      </SwiperSlide>
    </Swiper>
  );
}
