import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUS from "./components/AboutUS";
import ContactUS from "./components/ContactUS";
import ErrorPage from "./components/ErrorPage";

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

//this is client side routing, as react is a single page apppliaction, it just loads the resptive compinnenet when we click of link, it is not cfecthing data as server side scripting

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: <AboutUS></AboutUS>,
      },
      {
        path: "/contact",
        element: <ContactUS></ContactUS>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
