import { HStack, Image } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp"; //webp img are highly optimized img for web
import SearchInput from "./SearchInput";

interface NavBarProps {
	onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: NavBarProps) => {
	return (
		<HStack padding="10px">
			{" "}
			//horizontal stack: all items sorted in horizontal
			<Image src={logo} boxSize="60px" />
			<SearchInput onSearch={onSearch} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
