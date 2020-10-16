import Swiper from "react-id-swiper";
import SwiperCore, { Navigation, Mousewheel } from "swiper";

import styles from "../../styles/components/slider.module.scss";

SwiperCore.use([Navigation, Mousewheel]);

function ProductSlide({ src, alt, singleProduct }) {
  return (
    <div className={styles.productImg}>
      <img
        className={singleProduct ? styles.singleProduct : ""}
        src={`http://localhost:1337${src}`}
        alt={alt}
      />
    </div>
  );
}

export default function ProductSlider({ productImg }) {
  const content = [
    {
      src: "../../static/img/supremexnorthface2.png",
      alt: "Image",
    },
    {
      src: "../../static/img/supremexnorthface.png",
      alt: "Image",
    },
  ];

  console.log(productImg.length);

  const params = {
    containerClass: styles.productContainer,
    // wrapperClass: "swiper-wrapper-product",
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    // mousewheel: true,
  };

  return (
    <>
      {productImg.length === 1 ? (
        productImg.map((item, id) => (
          <div key={id}>
            <ProductSlide singleProduct src={item.url} alt={item.name} />
          </div>
        ))
      ) : (
        <Swiper {...params}>
          {productImg.map((item, id) => (
            <div key={id}>
              <ProductSlide src={item.url} alt={item.name} />
            </div>
          ))}
        </Swiper>
      )}
    </>
  );
}
