import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HomePage />
      </>
    ),
    path: "/register",
    element: (
      <>
        <RegisterPage />
      </>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
