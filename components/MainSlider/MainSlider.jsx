import Swiper from "react-id-swiper";
import SwiperCore, { Pagination, EffectFade } from "swiper";
SwiperCore.use([Pagination, EffectFade]);

import { SliderSlides } from "../index";

import styles from "../../styles/components/slider.module.scss";

export default function MainSlider({ data }) {
  // console.log(data);
  const params = {
    containerClass: styles.swiperContainer,
    slideActiveClass: styles.swiperSlideActive,
    slidePrevClass: styles.swiperSlidePrev,
    direction: "vertical",
    // fadeEffect: {
    //   crossFade: true,
    // },
    // effect: "fade",
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: (index, className) => {
        return (
          '<span class="' +
          className +
          " " +
          styles.swiperPaginationBullet +
          '"></span>'
        );
      },
    },
    speed: 800,
    spaceBetween: 50,
  };

  return (
    <Swiper {...params}>
      {data.map((item, id) => (
        <div key={id}>
          <SliderSlides
            title={item.title}
            desc={item.description}
            mainImg={item.mainImg}
            productImg={item.productImage}
          />
        </div>
      ))}
    </Swiper>
  );
}
