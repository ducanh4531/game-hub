import { HStack, Image } from "@chakra-ui/react";

import logo from "../assets/logo.webp"; //webp img are highly optimized img for web
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
	return (
		<HStack padding="10px">
			{" "}
			//horizontal stack: all items sorted in horizontal
			<Image src={logo} boxSize="60px" />
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
