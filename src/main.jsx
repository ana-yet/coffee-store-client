import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./components/Home";
import AddCoffee from "./pages/AddCoffee";
import UpdateCoffee from "./pages/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "addCoffee",
        element: <AddCoffee />,
      },
      { path: "updateCoffee", element: <UpdateCoffee /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
