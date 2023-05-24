import { HStack, Image, Text } from "@chakra-ui/react";

import logo from "../assets/logo.webp"; //webp img are highly optimized img for web

const NavBar = () => {
	return (
		<HStack>
			{" "}
			//horizontal stack: all items sorted in horizontal
			<Image src={logo} boxSize="60px" />
			<Text>Nav Bar</Text>
		</HStack>
	);
};

export default NavBar;
