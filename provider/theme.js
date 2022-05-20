import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// https://chakra-ui.com/docs/theming/theme
export default extendTheme({
  config: {
    initialColorMode: "light",
  },
  styles: {
    global: (props) => ({
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        fontFamily: "'Poppins', 'sans-serif'",
        bg: mode("white", "#0e1628")(props),
        lineHeight: "base",
      },
    }),
  },
});
