import { createBrowserRouter, Navigate } from "react-router-dom";
import PrivateRoute from "./private";

const useRouter = (isAuth: boolean) =>
  createBrowserRouter([
    {
      index: true,
      element: (
        <PrivateRoute isAllowed={!isAuth} redirectPath='/app'>
          <>Here signin/signup</>
        </PrivateRoute>
      ),
    },
    {
      path: "/app",
      element: (
        <PrivateRoute isAllowed={isAuth}>
          <>app</>
        </PrivateRoute>
      ),
    },
    {
      path: "*",
      element: <Navigate to='/' />,
    },
  ]);

export default useRouter;
