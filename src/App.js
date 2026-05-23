import React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import store from "./utils/store";
import Head from "./components/Head"
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,   // layout (Head + Sidebar + Outlet)
    children: [
      {
        path: "/",                 // home page
        element: <MainContainer />,
      },
      {
        path: "/watch",            // watch page
        element: <WatchPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <Head/>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;