export const getShade = (hex: string, magnitude: number): string => {
  return (
    "#" +
    hex
      .replace(/^#/, "")
      .replace(/../g, (hex) =>
        (
          "0" +
          Math.min(255, Math.max(0, parseInt(hex, 16) + magnitude)).toString(16)
        ).substr(-2)
      )
  );
};
