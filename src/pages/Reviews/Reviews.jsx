import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { navigation } from "../../routes/navigation";
import Tab from "../../components/UI/Tab";
import StaggerContainer from "../../components/animations/StaggerContainer";
import SlideUp from "../../components/animations/SlideUp";
import image from "../../assets/review1.png";
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
  {
    id: 5,
    rating: 5,
    name: "Генадий Сергеевич",
    car: "Toyota Allion",
  },
  {
    id: 6,
    rating: 5,
    name: "Ольга Архипова",
    car: "Toyota Allion",
  },
  {
    id: 7,
    rating: 4,
    name: "Николай Евгеньевич",
    car: "Toyota Allion",
  },
  {
    id: 8,
    rating: 5,
    name: "Роман Юрьевич",
    car: "Toyota Allion",
  },
];

export default function Rewiews() {
  const [activeTab, setActiveTab] = useState("video");

  const tabs = [
    {
      key: "video",
      label: "Видео обзоры",
      content: (
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {reviews.map((review, index) => (
            <SlideUp key={review.id} delay={index * 0.1}>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition p-6 flex flex-col gap-3">
                <img
                  src={image}
                  alt=""
                  className="w-full h-40 object-cover rounded-md"
                />

                <div className="text-yellow-400 text-lg">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>

                <h3 className="font-semibold text-lg">{review.name}</h3>

                <p className="text-gray-600 text-sm">
                  Купил автомобиль:{" "}
                  <span className="font-medium">{review.car}</span>
                </p>

                <p className="text-gray-500 text-sm leading-relaxed">
                  Отличная компания. Машину доставили быстро...
                </p>
              </div>
            </SlideUp>
          ))}
        </StaggerContainer> 
      ),
    },
    {
      key: "social",
      label: "Отзывы в соцсетях",
      content: "",
    },
    {
      key: "about",
      label: "О нас говорят",
      content: "",
    },
  ];
  return (
    <div className="px-4 md:px-11">
      <Breadcrumbs routes={navigation} />

      <div>
        <Tab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
