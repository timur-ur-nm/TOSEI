// HOOKS
import { useCars } from "../../hooks/useCars";
import { useParams } from "react-router-dom";

// UI
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import AvailabilitySpan from "../../components/UI/AvailabilitySpan";
import Carouesel from "../../components/UI/Carouesel";
import TabSection from "../../components/sections/CarPage/TabSection";

import RecommenedCars from "../../components/sections/CarPage/RecommendedCars";
// UI
import Loader from "../../utils/Loader";
import styles from "./CarPage.module.css";

// Navigation
import { navigation } from "../../routes/navigation";



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

export default function CarPage() {
  // const [isActiveButton , setActiveButton] = useState(true)
  const { rawCars } = useCars();
  const { id } = useParams();

  const car = rawCars.find((item) => item.id === Number(id));

  const routes = [
    ...navigation,
    {
      id: 99,
      path: `/catalog/${id}`,
      name: car ? `${car.car} ${car.car_model}` : "Авто",
    },
  ];

  return !car ? (
    <Loader />
  ) : (
    <div className="container mx-auto px-4 md:px-11">
      <Breadcrumbs routes={routes} />

      <h1 className="text-2xl sm:text-3xl font-bold mt-4 flex items-center gap-3 whitespace-nowrap overflow-hidden">
        <span className="truncate">
          {car.car} {car.car_model}
        </span>

        <AvailabilitySpan availability={car.availability} />
      </h1>

      <Carouesel styles={styles} />
      <TabSection car={car}  extra={extra} specs={specs} />
      <RecommenedCars car={car} />
    </div>
  );
}
