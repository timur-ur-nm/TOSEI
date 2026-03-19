import { useState } from "react";
import phoneIcon from "../../assets/phone-line.png";
import whatsappIcon from "../../assets/whatsapp.png";
import emailIcon from "../../assets/mail-line.png";

export default function ContactSection() {
  const [form, setForm] = useState({
    email: "",
    phone: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // чтобы страница не перезагружалась

    console.log(form); // данные формы
  };

  return (
    <div className="mt-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">Как с нами связаться?</h1>

        <h2 className="text-[18px] mb-6 text-gray-600">
          Владивосток, ул. Фадеева, д. 47 строение 1
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Телефоны */}
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <img src={phoneIcon} className="w-5 h-5" alt="" />
              <span className="text-red-500 font-semibold">
                +7 (984) 197-77-78
              </span>
              <span className="text-gray-600 text-sm">— для заказа авто</span>
            </li>

            <li className="flex items-center gap-2">
              <img src={phoneIcon} className="w-5 h-5" alt="" />
              <span className="text-red-500 font-semibold">
                +7 (984) 197-77-78
              </span>
              <span className="text-gray-600 text-sm">
                — авто и мототехника
              </span>
            </li>

            <li className="flex items-center gap-2">
              <img src={phoneIcon} className="w-5 h-5" alt="" />
              <span className="text-red-500 font-semibold">
                +7 (984) 197-77-78
              </span>
              <span className="text-gray-600 text-sm">— спецтехника</span>
            </li>
          </ul>

          {/* WhatsApp */}
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <img src={whatsappIcon} className="w-5 h-5" alt="" />
              <span className="font-semibold">+7 (984) 198-11-18</span>
            </li>

            <li className="flex items-center gap-2">
              <img src={whatsappIcon} className="w-5 h-5" alt="" />
              <span className="font-semibold">+7 (984) 197-77-78</span>
            </li>
          </ul>

          {/* Email */}
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <img src={emailIcon} className="w-5 h-5" alt="" />
              <span className="text-red-500 font-semibold">spec@tosei.ru</span>
            </li>
          </ul>
        </div>
      </div>
      <section className="relative w-full h-full mt-16 flex flex-col gap-10">
        {/* Карта */}
        <iframe
          className="w-full md:h-134 h-124"
          src="https://yandex.ru/map-widget/v1/?ll=131.8824%2C43.1155&z=16"
          loading="lazy"
        />

        {/* Форма */}
        <div
          className="
            md:absolute md:top-10 md:left-10
            bg-white rounded-xl shadow-xl
            p-8 
            md:w-[350px]
            
            w-full
          "
        >
          <h2 className="text-2xl font-bold mb-6">Обратная связь</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-sm text-gray-600">Ваше имя</label>
              <input
                type="text"
                placeholder="Ввести"
                className="w-full mt-1 p-3 bg-gray-100 rounded-md outline-none"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Контактный телефон
              </label>
              <input
                type="text"
                placeholder="+7"
                className="w-full mt-1 p-3 bg-gray-100 rounded-md outline-none"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition"
            >
              Проконсультировать бесплатно
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
