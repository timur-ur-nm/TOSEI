import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";
import Reviews from "../pages/Reviews/Reviews";
import Auctions from "../pages/Auctions/Auctions";
import Information from "../pages/Information/Information";
import Catalog from "../pages/Catalog/Catalog";
import Services from "../pages/Services/Services";
import Layout from "../layout/Layout";
import NotFound404 from "../pages/NotFound404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "catalog",
        element: <Catalog />,
      },
      {
        path: "auctions",
        element: <Auctions />,
      },
      {
        path: "information",
        element: <Information />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);

// export const routes = [
//   { path: "/", element: Home, name: "Главная" },
//   { path: "/services", element: Services, name: "Услуги" },
//   { path: "/catalog", element: Catalog , name: "Каталог техники" },
//   { path: "/auctions", element: Auctions , name: "Аукционы" },
//   { path: "/information", element: Information , name: "Информация" },
//   { path: "/about", element: About, name: "О нас" },
//   { path: "/reviews", element: Reviews , name: "Отзывы" },
//   { path: "/contacts", element: Contacts , name: "Контакты" },
// ];
