import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUS from "./components/AboutUS";
import ContactUS from "./components/ContactUS";
import ErrorPage from "./components/ErrorPage";

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/about",
    element: <AboutUS></AboutUS>,
  },
  {
    path: "/contact",
    element: <ContactUS></ContactUS>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
