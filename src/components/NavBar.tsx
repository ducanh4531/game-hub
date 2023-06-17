import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp"; //webp img are highly optimized img for web
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
	return (
		//horizontal stack: all items sorted in horizontal
		<HStack padding="10px">
			{" "}
			<Link to={"/"}>
				<Image src={logo} boxSize="60px" objectFit="cover" />
			</Link>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
