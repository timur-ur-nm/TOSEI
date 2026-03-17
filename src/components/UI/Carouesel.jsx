import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import image from "../../assets/not-image.png";

export default function Carouesel({ styles }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          <img
            src={image}
            alt="car"
            className="border border-gray-200 rounded-2xl"
          />
          <img
            src={image}
            alt="car"
            className="border border-gray-200 rounded-2xl"
          />
          <img
            src={image}
            alt="car"
            className="border border-gray-200 rounded-2xl"
          />
          <img
            src={image}
            alt="car"
            className="border border-gray-200 rounded-2xl"
          />
        </div>
      </div>

      {/* <button className={styles.prev} onClick={scrollPrev}>
          ‹
        </button>

        <button className={styles.next} onClick={scrollNext}>
          ›
        </button> */}
    </div>
  );
}
