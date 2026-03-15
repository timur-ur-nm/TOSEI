import whatsappIcon from "../assets/whatsapp.png";
import emailIcon from "../assets/mail-line.png";
import destination from "../assets/Group.png";

export default function Footer() {
  return (
    <footer className="mt-16 text-[14px]">
      <div className="container mx-auto px-4 py-10">
        <div className="mt-8 pt-6">© Тосэй 2021. Все права защищены</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {/* Описание */}
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed text-[12px]">
              Продажа грузовой и спецтехники, легковых автомобилей, водной
              техники. Любая техника из Японии, США, Кореи, Китая и Сингапура.
              Авто с аукционов.
            </p>

            <div className="flex items-center gap-3 ">
              <img src={destination} className="w-5 h-5 mt-1" alt="" />
              <p className="text-gray-600">
                Владивосток, ул. Фадеева, д. 47, строение 1
              </p>
            </div>
          </div>

          {/* Телефоны */}
          <div className="space-y-4">
            <h3 className="font-semibold">Связаться</h3>

            <div className="flex items-center gap-3">
              <img src={whatsappIcon} className="w-5 h-5" alt="" />
              <a
                href="tel:+79841981118"
                className="font-medium hover:text-red-500 transition"
              >
                +7 (984) 198-11-18
              </a>
            </div>

            <div className="flex items-center gap-3">
              <img src={whatsappIcon} className="w-5 h-5" alt="" />
              <a
                href="tel:+79841977778"
                className="font-medium hover:text-red-500 transition"
              >
                +7 (984) 197-77-78
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="space-y-4">
            <h3 className="font-semibold">Email</h3>

            <div className="flex items-center gap-3">
              <img src={emailIcon} className="w-5 h-5" alt="" />
              <a
                href="mailto:spec@tosei.ru"
                className="text-red-500 font-semibold hover:underline"
              >
                spec@tosei.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
