export interface ThemeProps {
  background: Color;
  text: Color;
  primary: Color;
}

interface Color {
  default: string;
  light?: string;
  dark?: string;
}

export const theme: ThemeProps = {
  background: {
    default: "#FFFFFF",
    dark: "#F9FAFB",
  },
  text: {
    default: "#4E5D78",
    light: "#B8BEC9",
  },
  primary: {
    default: "#377DFF",
  },
};
