import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Kodex from "./pages/Kodex";
import Kodr from "./pages/Kodr";
import AllCourses from "./pages/AllCoures";

const App = () => {
  const allRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
          path: "courses",
          element: <Courses />,
          children: [
            {
              path: "kodex",
              element: <Kodex />,
            },
            {
              path: "kodr",
              element: <Kodr />,
            },
            {
              index: true,
              element: <AllCourses />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={allRoutes} />;
};

export default App;
