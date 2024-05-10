import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/register";
import ChoiceLeaderPage from "./pages/choiceleader";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HomePage />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <LoginPage />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <RegisterPage />
      </>
    ),
  },
  {
    path: "/choiceleader",
    element: (
      <>
        <ChoiceLeaderPage />
      </>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
