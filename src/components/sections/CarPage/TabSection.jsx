import { useState } from "react";
import Tab from "../../UI/Tab";

export default function TabSection({ car,  extra, specs }) {
  const [activeTab, setActiveTab] = useState("specs");
  const tabs = [
    {
      key: "specs",
      label: "Характеристики",
      content: (
        <div className="grid gap-3">
          {specs.map((spec, index) => (
            <div
              key={index}
              className={`grid grid-cols-[1fr_1fr] p-4 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <p>{spec.label}</p>
              <p className="text-right">{spec.value}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      key: "extra",
      label: "Дополнительно",
      content: (
        <div className="flex flex-col gap-3">
          {extra.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      ),
    },
  ];
  return (
    <div className="flex ">
      <Tab
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />

      {/* Правая часть */}
      <div className="flex flex-col gap-4 p-6 w-full lg:w-[300px] lg:shrink-0 lg:sticky lg:top-6 h-fit">
        <h2 className="text-lg sm:text-xl font-bold">Стоимость</h2>

        <h2 className="text-2xl sm:text-3xl font-bold break-words">
          {car.price}
        </h2>

        <p className="text-xs text-[#8B8B8B]">Цена указана с учетом НДС</p>

        <button className="p-4 bg-[#CD0000] text-white w-full lg:w-fit rounded-md hover:bg-red-700 transition">
          Консультация бесплатно
        </button>

        <button className="p-4 border border-[#CD0000] w-full lg:w-fit rounded-md hover:bg-red-50 transition">
          Оставить заявку
        </button>
      </div>
    </div>
  );
}
