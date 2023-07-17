import { FC } from "react";
import { light } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

const App: FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      MeetMax
    </ThemeProvider>
  );
};

export default App;
