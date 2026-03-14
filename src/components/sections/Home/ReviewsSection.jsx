import React from "react";
import ScaleIn from "../../animations/ScaleIn";
import FadeIn from '../../animations/FadeIn'
const reviews = [
  {
    id: 1,
    rating: 5,
    name: "Генадий Сергеевич",
    car: "Toyota Allion",
  },
  {
    id: 2,
    rating: 5,
    name: "Ольга Архипова",
    car: "Toyota Allion",
  },
  {
    id: 3,
    rating: 4,
    name: "Николай Евгеньевич",
    car: "Toyota Allion",
  },
  {
    id: 4,
    rating: 5,
    name: "Роман Юрьевич",
    car: "Toyota Allion",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <h2 className="text-center text-3xl font-bold">Отзывы</h2>

        <ScaleIn className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => {
            return (
              <div
                key={review.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col gap-3"
              >
                {/* рейтинг */}
                <div className="text-yellow-400 text-lg">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>

                {/* имя */}
                <h3 className="font-semibold text-lg">{review.name}</h3>

                {/* машина */}
                <p className="text-gray-600 text-sm">
                  Купил автомобиль:{" "}
                  <span className="font-medium">{review.car}</span>
                </p>

                {/* текст отзыва (пример) */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  Отличная компания. Машину доставили быстро, все документы
                  оформили без проблем.
                </p>
              </div>
            );
          })}
        </ScaleIn>
        <FadeIn>
          <button className="bg-gray-50 w-full flex items-center justify-center p-5 hover:border-gray-300 border border-white cursor-pointer transition duration-300">
            Еще отзывы
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
