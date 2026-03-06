import { RouterProvider } from "react-router-dom";
import { router } from "../routes/RoutesConfig";

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
}
