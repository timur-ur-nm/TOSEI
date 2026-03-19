import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { navigation } from "../../routes/navigation";
import image from "../../assets/infoimage.png";
export default function Information() {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumbs routes={navigation} />

      <div className="flex flex-col gap-6 mt-4">
        {/* Заголовок */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          Как читать аукционный лист
        </h1>

        {/* Текст */}
        <div className="flex flex-col gap-4 text-sm sm:text-base lg:text-lg text-gray-700  leading-relaxed">
          <p>
            Аукционный лист - это бумага с кучей японских иероглифов и
            непонятных символов. Мы научим вас это все расшифровывать
          </p>

          <p>
            Аукционный лист заполняют эксперты при осмотре автомобиля перед
            выставлением на. В нем детально описывается состояние машины, ее
            комплектация и все опции, а также указываются все дефекты и
            выставляется аукционная оценка.
          </p>

          <p>
            Всегда прописывается номер лота и подробнейшие данные об автомобиле
            — начиная от пробега, его истории и года первой регистрации, и
            заканчивая перечнем установленного дополнительного оборудования.
          </p>

          <p>
            На аукционных листах практически всегда присутствует схематичное
            изображение кузова, где указаны различные комбинации букв и цифр.
          </p>

          <p>
            Плохая оценка экспертами аукциона может иметь разные причины.
            Например, снижает оценку большой пробег.
          </p>

          <p>
            На фото мы привели примеры разных аукционных листов, а также
            расшифровку обозначений:
          </p>
        </div>

        {/* Картинка */}
        <div className="w-full">
          <img
            src={image}
            alt="Аукционный лист"
            className="w-full max-w-5xl mx-auto rounded-xl shadow-md object-contain"
          />
        </div>
      </div>
    </div>
  );
}
