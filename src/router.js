import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import PageNotFound from "./PageNotFound";
import AddCourse from "./addCourse";
import UpdateCourse from "./UpdateCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/faq",
            element: <Faq />,
          },
          {
            path: "/courses",
            element: <Courses />,
          },
          {
            path: "/team",
            element: <Team />,
          },
          {
            path: "/settings",
            element: <Settings />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/addCourse",
            element: <AddCourse />,
          },
          {
            path: "/UpdateCourse/:id",
            element: <UpdateCourse />,
          },
        ],
      },      
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "./pageNotFound",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
