import CarItem from "../../../components/UI/CarItem";
import StaggerContainer from "../../../components/animations/StaggerContainer";
import SlideUp from "../../../components/animations/SlideUp";
import useRecommendedCars from "../../../hooks/useRecommenedCars";
export default function RecommendedCars({ car }) {
  const recommendedCars = useRecommendedCars({ currentCar: car });

  return (
    <div className="flex flex-col mt-20">
      <h1 className="text-2xl font-bold">Обратите внимание</h1>

      <StaggerContainer className="flex flex-col gap-2 mt-2">
        {recommendedCars?.map((item) => (
          <SlideUp key={item.id}>
            <CarItem car={item} compact />
          </SlideUp>
        ))}
      </StaggerContainer>
    </div>
  );
}
