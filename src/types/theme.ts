export interface Theme {
  colors: {
    text: Shades;
    background: Shades;
    primary: Shades;
    success: Shades;
    warning: Shades;
    error: Shades;
  };
  borderRadius: number;
}

interface Shades {
  100: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
}
