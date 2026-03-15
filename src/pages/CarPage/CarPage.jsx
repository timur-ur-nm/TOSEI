import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { navigation } from "../../routes/navigation";
import { useCars } from "../../hooks/useCars";
import Loader from "../../utils/Loader";
import AvailabilitySpan from "../../components/UI/AvailabilitySpan";
import image from "../../assets/not-image.png";
import styles from "./CarPage.module.css";
import useEmblaCarousel from "embla-carousel-react";

export default function CarPage() {
  const { rawCars } = useCars();
  const { id } = useParams();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const [activeTab, setActiveTab] = useState('')

  const car = rawCars.find((item) => item.id === Number(id));
  const routes = [
    ...navigation,
    {
      id: 99,
      path: `/catalog/${id}`,
      name: car ? `${car.car} ${car.car_model}` : "Авто",
    },
  ];
  
  
  if (!car) {
    return <Loader />;
  }

  //   const scrollPrev = () => emblaApi?.scrollPrev();
  //   const scrollNext = () => emblaApi?.scrollNext();
  return (
    <div className="container mx-auto p-4">
      <Breadcrumbs routes={routes} />

      <h1 className="text-3xl font-bold mt-4 flex items-center  gap-4">
        {car.car} {car.car_model}{" "}
        <AvailabilitySpan availability={car.availability} />
      </h1>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            <img src={image} alt="car" />
            <img src={image} alt="car" />
            <img src={image} alt="car" />
            <img src={image} alt="car" />
          </div>
        </div>

        {/* <button className={styles.prev} onClick={scrollPrev}>
          ‹
        </button>

        <button className={styles.next} onClick={scrollNext}>
          ›
        </button> */}
      </div>

      <div>
        
      </div>
    </div>
  );
}
