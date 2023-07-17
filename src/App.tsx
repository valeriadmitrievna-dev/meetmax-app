import { FC, useEffect } from "react";
import { light } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import GlobalStyles from "./styles/global";
import useRouter from "./routes";
import { RouterProvider } from "react-router";

const isAuth = false;

const App: FC = () => {
  const router = useRouter(isAuth);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Rubik"],
      },
    });
  }, []);

  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
