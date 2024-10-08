import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});
