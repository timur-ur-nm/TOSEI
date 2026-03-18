import { useEffect, useState } from "react";
const tabs = [
  { key: "specs", label: "Характеристики" },
  { key: "extra", label: "Дополнительная информация" },
];

const specs = [
  { label: "Производитель", value: "Mazda" },
  { label: "Мощность", value: "л.с." },
  { label: "Год", value: "2017" },
  { label: "КПП", value: "Автомат" },
  { label: "Тип кузова", value: "Внедорожник" },
  { label: "Аукцион", value: "KCAA Fukuoka" },
  { label: "Цвет", value: "Белый" },
  { label: "Оценка", value: "4 балла" },
  { label: "Руль", value: "Левый" },
  { label: "Дата аукциона", value: "08.07.2021" },
  { label: "Пробег", value: "40 000 км" },
  { label: "Местонахождение", value: "Япония" },
  { label: "Тип привода", value: "4WD" },
  { label: "Статус", value: "Под заказ" },
  { label: "Двигатель", value: "Бензиновый (1.5 м³)" },
];

const extra = [
  `
    Внешний вид нового Mazda CX-3 2017 действительно не дотягивает до полноразмерного кроссовера. Небольшой кузов, невысокая посадка и компактные формы. По внешнему виду дизайнеры попытались создать новый автомобиль, но при этом сохранив современные и узнаваемые черты компании Mazda.
    `,
  `   
    Переднюю часть кроссовера Mazda CX-3 2017 занимает хорошо узнаваемая решетка радиатора, с зауженной часть внизу. В зависимости от комплектации решетка с горизонтальными планками может быть черной или хромированной, но в любом варианте с хромированной окантовкой. Центр решетки радиатора занимает необычная эмблема компании, в нее инженеры вмонтировали переднюю камеру и несколько датчиков.
    `,
  `
    Передняя оптика в зависимости от комплектации Mazda CX-3 2017 может быть на основе галогенок. В максимальной комплектации кроссовера установлена светодиодная адаптивная оптика. В любой с комплектаций оптика сделана таким образом, что внутри повторяет часть хромированной окантовки решетки радиатора, тем самым создавая впечатление, что в оптику вмонтировали часть решетки. Нижнюю часть бампера украшает дополнительная решетка радиатора. Боковую часть бампера в зависимости от комплектации будут установлены противотуманки или комплект светодиодных противотуманок со светодиодными дневными ходовыми огнями.
    `,
];

export default function TabSection({ car }) {
  const [activeTab, setActiveTab] = useState("specs");

  return (
    <div>
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`p-4 border-b-2 whitespace-nowrap transition ${
              activeTab === tab.key
                ? "border-[#CD0000] text-black"
                : "border-transparent text-gray-500 hover:text-black hover:border-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full">
          {activeTab === "specs" && (
            <div className="grid gap-3">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-[1fr_1fr] p-4 rounded-md ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <p className="text-gray-400 text-sm sm:text-base">
                    {spec.label}
                  </p>
                  <p className="font-medium text-right text-sm sm:text-base break-words">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "extra" && (
            <div className="flex flex-col gap-3 mt-6 sm:mt-10">
              {extra.map((info, index) => (
                <p key={index} className="text-sm sm:text-base">
                  {info}
                </p>
              ))}
            </div>
          )}
        </div>
        {/* Левая часть */}

        {/* Правая часть */}
        <div className="flex flex-col gap-4 w-full lg:w-[300px] lg:shrink-0 lg:sticky lg:top-6 h-fit">
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
    </div>
  );
}
