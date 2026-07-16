import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Error from "../pages/Error";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Service from "../pages/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path:"service",
        element:<Service />
      }
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}