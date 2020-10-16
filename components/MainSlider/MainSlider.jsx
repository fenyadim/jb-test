import Swiper from "react-id-swiper";
import SwiperCore, { EffectFade } from "swiper";
SwiperCore.use([EffectFade]);

import { SliderSlides } from "../index";

import styles from "../../styles/components/slider.module.scss";

export default function MainSlider({ data }) {
  const contentSlider = [
    {
      title: "Supreme x The North Face SS19 Collection",
      desc:
        "Supreme и The North Face снова объединились для создания весенне-летней капсулы. Коллекция Na-Kel Smith состоит из целого ряда готовых для горных прогулок костюмов.",
    },
    {
      title: "Supreme x The North Face",
      desc:
        "Supreme и The North Face снова объединились для создания весенне-летней капсулы. Коллекция Na-Kel Smith состоит из целого ряда готовых для горных прогулок костюмов.",
    },
  ];

  const params = {
    containerClass: styles.swiperContainer,
    slideActiveClass: styles.swiperSlideActive,
    fadeEffect: {
      crossFade: false,
    },
    effect: "fade",
    mousewheel: true,
    speed: 1000,
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
