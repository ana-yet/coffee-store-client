import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./components/Home";
import AddCoffee from "./pages/AddCoffee";
import UpdateCoffee from "./pages/UpdateCoffee";
import CoffeeDetails from "./pages/CoffeeDetailsPage";
import AuthProvider from "./contexts/AuthProvider";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        loader: () => {
          return fetch("http://localhost:3000/coffees")
            .then((response) => {
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.json();
            })
            .catch((error) => {
              console.error("Fetch error:", error);
              throw error;
            });
        },
        element: <Home />,
      },
      {
        path: "coffeeDetails/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:3000/coffees/${params.id}`)
            .then((res) => {
              if (!res.ok) {
                throw new Error(`Eroor status: ${res.status}`);
              }
              return res.json();
            })
            .catch((error) => {
              throw error;
            });
        },
        element: <CoffeeDetails />,
      },
      {
        path: "addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        element: <UpdateCoffee />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
