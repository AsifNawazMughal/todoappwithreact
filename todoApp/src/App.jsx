import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { AppLayout } from "./Components/Layout/AppLayout";
import { ErrorPage } from "./Pages/ErrorPage";
import { Home } from "./Pages/Home";
import { TodosPage } from "./Pages/TodosPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/todos",
        element: <TodosPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="font-sans leading-snug text-white min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
