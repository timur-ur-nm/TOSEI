import advantageIcon from "../../../assets/advantage.png";
// animations
import ScaleIn from "../../../components/animations/ScaleIn";

const advantages = [
  {
    id: 1,
    title: "20 лет на рынке",
    description:
      "Мы транспортируем авто в порт Японии, грузим на судно и доставляем во Владивосток, где проходит таможенное оформление",
  },
  {
    id: 2,
    title: "Доставка по РФ",
    description:
      "Мы транспортируем авто в порт Японии, грузим на судно и доставляем во Владивосток, где проходит таможенное оформление",
  },
  {
    id: 3,
    title: "Персональный менеджер",
    description:
      "Мы транспортируем авто в порт Японии, грузим на судно и доставляем во Владивосток, где проходит таможенное оформление",
  },
  {
    id: 4,
    title: "Собственное представительство в Японии",
    description:
      "Мы транспортируем авто в порт Японии, грузим на судно и доставляем во Владивосток, где проходит таможенное оформление",
  },
];

export default function AdvantageSection() {
  return (
    <section className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <h2 className="text-center text-3xl font-bold">Наши преимущества</h2>

        <ScaleIn className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage) => (
            <div key={advantage.id} className=" flex flex-col gap-4">
              <img src={advantageIcon} alt="advantage" className="w-12 h-12" />

              <h3 className="text-lg font-semibold">{advantage.title}</h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </ScaleIn>
      </div>
    </section>
  );
}
