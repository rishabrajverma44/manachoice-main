import NotFound from "../prebuiltComponent/NotFound";
import Layout from "../navBar/Layout";
import Home from "../Home";
import FoodBooking from "../Pages/Products/FoodBooking";
import WebService from "../Pages/Services/WebService";
import MobileService from "../Pages/Services/MobileService";
import MobileTrainig from "../Pages/Trainig/MobileTrainig";
import WebTrainig from "../Pages/Trainig/WebTrainig";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/food",
        element: <FoodBooking />,
      },
      {
        path: "/web-service",
        element: <WebService />,
      },
      {
        path: "/mobile-service",
        element: <MobileService />,
      },
      {
        path: "/web-taining",
        element: <WebTrainig />,
      },
      {
        path: "/mobile-taining",
        element: <MobileTrainig />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
