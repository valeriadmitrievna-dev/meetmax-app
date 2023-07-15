import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import useRouter from "router";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global";
import { theme } from "theme";

const App: FC = () => {
  const router = useRouter(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
