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
    <div className="container mx-auto p-4">
      <Breadcrumbs routes={routes} />

      <h1 className="text-2xl sm:text-3xl font-bold mt-4 flex items-center gap-3 whitespace-nowrap overflow-hidden">
        <span className="truncate">
          {car.car} {car.car_model}
        </span>

        <AvailabilitySpan availability={car.availability} />
      </h1>

      <Carouesel styles={styles} />
      <TabSection car={car} />
      <RecommenedCars car={car} />
    </div>
  );
}
