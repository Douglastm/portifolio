import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout.tsx";

import Home from "../pages/Home/Home.tsx";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
