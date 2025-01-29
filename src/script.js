import React, {
  lazy,
  Suspense,
  useActionState,
  useEffect,
  useState,
} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUS from "./components/AboutUS";
import ContactUS from "./components/ContactUS";
import ErrorPage from "./components/ErrorPage";
import ResturantMenu from "./components/ResturantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore/AppStore";
import CartPage from "./components/CartPage";
//import Store from "./instaStoreComponents/Store";

const Store = lazy(() => import("./instaStoreComponents/Store"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const name = "Tanmayi";
    setUserName(name);
  }, []);

  return (
    <Provider store={AppStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/resturants/:resID",
        element: <ResturantMenu></ResturantMenu>,
      },
      {
        path: "/store",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Store />
          </Suspense>
        ),
      },

      {
        path: "/cart",
        element: <CartPage></CartPage>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
