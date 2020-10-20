import { theme as ChakraTheme, extendTheme } from "@chakra-ui/core";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { createIcon } from "@chakra-ui/icon";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  ...ChakraTheme,
  breakpoints,
  fonts: {
    body: "Erato,serif",
    heading: "Erato,serif",
    mono: "Erato,serif",
  },
  initialColorMode: "dark",
});

export default theme;
