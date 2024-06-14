import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
import ImageSlider from "./components/ImageSlider";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Head />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "",
        element: <ProtectedRoutes />,
        children: [
          {
            path: "watch",
            element: <WatchPage />,
          },
        ],
      },
      {
        path: "demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
      {
        path: "slider",
        element: <ImageSlider />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
