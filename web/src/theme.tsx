import { theme as chakraTheme } from "@chakra-ui/core";
import { createIcon } from "@chakra-ui/icon";

const fonts = {
  ...chakraTheme.fonts,
};

const breakpoints = ["40em", "52em", "64em", "80em"];

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
  },
  fonts,
  breakpoints: ["40em", "52em", "64em", "80em"],
};

export default theme;
