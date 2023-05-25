// define dark mode for web app
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
	// color mode will be stored in local storage and remembered in future sessions
	initialColorMode: "dark",
};

const theme = extendTheme({ config });

export default theme;
