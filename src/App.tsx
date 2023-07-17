import { FC, useEffect } from "react";
import { light } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import GlobalStyles from "./styles/global";

const App: FC = () => {
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
      MeetMax
    </ThemeProvider>
  );
};

export default App;
