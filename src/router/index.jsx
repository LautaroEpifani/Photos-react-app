import { createBrowserRouter } from "react-router-dom";
import  Home  from '../pages/Home'
import MyPhotos from "../pages/MyPhotos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "myphotos",
    element: <MyPhotos/>,
  },
]);