import { Navigate, createBrowserRouter } from "react-router-dom";
import CommonLayout from "layouts/common";
import AppLayout from "layouts/app";
import PrivateRoute from "./private";
import SignUpPage from "pages/signup";

const useRouter = (isAuth: boolean) =>
  createBrowserRouter([
    {
      path: "/",
      element: <CommonLayout />,
      children: [
        {
          index: true,
          element: (
            <PrivateRoute isAllowed={!isAuth} redirectPath='/app'>
              <>sign in</>
            </PrivateRoute>
          ),
        },
        {
          path: "signup",
          element: (
            <PrivateRoute isAllowed={!isAuth} redirectPath='/app'>
              <SignUpPage />
            </PrivateRoute>
          ),
        },
        {
          path: "app",
          element: <AppLayout />,
          children: [
            {
              index: true,
              element: <Navigate to='feed' />,
            },
            {
              path: "feed",
              element: (
                <PrivateRoute isAllowed={isAuth}>
                  <>feed</>
                </PrivateRoute>
              ),
            },
            {
              path: "community",
              element: (
                <PrivateRoute isAllowed={isAuth}>
                  <>community</>
                </PrivateRoute>
              ),
            },
            {
              path: "messages",
              element: (
                <PrivateRoute isAllowed={isAuth}>
                  <>messages</>
                </PrivateRoute>
              ),
            },
            {
              path: "notifications",
              element: (
                <PrivateRoute isAllowed={isAuth}>
                  <>notifications</>
                </PrivateRoute>
              ),
            },
            {
              path: "profile",
              element: (
                <PrivateRoute isAllowed={isAuth}>
                  <>profile</>
                </PrivateRoute>
              ),
            },
            {
              path: "settings",
              element: (
                <PrivateRoute isAllowed={isAuth}>
                  <>settings</>
                </PrivateRoute>
              ),
            },
          ],
        },
      ],
    },
  ]);

export default useRouter;
