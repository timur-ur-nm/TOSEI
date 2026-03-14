// HOOKS
import { useCars } from "../../hooks/useCars";

// UI
import HeroSection from "../../components/sections/Home/HeroSection";
import AdvantageSection from "../../components/sections/Home/AdvantageSection";
import ReviewsSection from "../../components/sections/Home/ReviewsSection";
import HowToBuy from "../../components/sections/Home/HowToBuy";

export default function Home() {
  // Загрузка данных с сервера через кастомный хук useCars
  const { rawCars } = useCars();

  return (
    <div className="container mx-auto flex flex-col gap-4">
      <HeroSection rawCars={rawCars} />
      <AdvantageSection />
      <ReviewsSection />
      <HowToBuy />
    </div>
  );
}
