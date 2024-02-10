import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.scss";
import { PageHome, PageAbout, PageInfo, Page404 } from "./pages/";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Page404 />,
    element: <App />,
    children: [
      {
        path: "/home",
        element: <PageHome />,
      },
      {
        path: "info",
        element: <PageInfo />,
      },
      {
        path: "about",
        element: <PageAbout />,
      },
      {
        path: "/",
        element: <Navigate to="/home" replace />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
