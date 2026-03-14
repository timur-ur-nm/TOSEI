import React from "react";

import worker from "../../../assets/worker.png";

import ico1 from "../../../assets/HowToBuyIcons/1.png";
import ico2 from "../../../assets/HowToBuyIcons/2.png";
import ico3 from "../../../assets/HowToBuyIcons/3.png";
import ico4 from "../../../assets/HowToBuyIcons/4.png";
import ico5 from "../../../assets/HowToBuyIcons/5.png";

import StaggerContainer from "../../../components/animations/StaggerContainer";
import ScaleIn from "../../../components/animations/ScaleIn";

const howToList = [
  {
    id: 1,
    img: ico1,
    title: "Оставляете заявку",
    description:
      "Вы оставляете заявку на сайте, либо связываетесь с нами удобным способом.",
  },
  {
    id: 2,
    img: ico2,
    title: "Заключаем договор",
    description: "Мы обсуждаем условия и подписываем официальный договор.",
  },
  {
    id: 3,
    img: ico3,
    title: "Подбор и покупка авто",
    description: "Подбираем автомобиль на аукционах Японии и выкупаем его.",
  },
  {
    id: 4,
    img: ico4,
    title: "Доставка в РФ и оформление",
    description: "Автомобиль доставляется во Владивосток и проходит таможню.",
  },
  {
    id: 5,
    img: ico5,
    title: "Доставка до вашего города",
    description: "Организуем доставку автомобиля в любой город России.",
  },
];

export default function HowToBuy() {
  return (
    <section className="p-4 flex flex-col gap-10">
      <h2 className="text-2xl font-bold text-center">Как купить автомобиль</h2>

      <div className="flex gap-10 items-center justify-center">
        {/* worker image */}
        <div className="hidden lg:block">
          <img src={worker} alt="worker" className="max-w-[350px]" />
        </div>

        {/* steps */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-14 ">
          {howToList.map((item) => (
            <ScaleIn key={item.id}>
              <div className="w-[160px] h-[220px] bg-white  rounded-xl p-4 flex flex-col gap-3 ">
                <img src={item.img} alt={item.title} className="w-10 h-10" />

                <h3 className="font-semibold text-sm">{item.title}</h3>

                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            </ScaleIn>
          ))}

          {/* button block */}
          <ScaleIn>
            <button
              className="
                      w-[160px] h-[220px]
                      bg-white
                      border-2 border-dashed border-[#CD0000]
                      rounded-xl
                      flex flex-col justify-center items-center gap-4 p-4
                      text-[#CD0000] font-semibold
                      cursor-pointer
                      transition-all duration-300
                      hover:bg-[#CD0000] hover:text-white
                      hover:shadow-lg hover:-translate-y-1
                    "
            >
              Оставить заявку
            </button>
          </ScaleIn>
        </StaggerContainer>
      </div>
    </section>
  );
}
