import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface GameCardContainerProps {
	children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
	return (
		<Box borderRadius={30} overflow="hidden">
			{children}
		</Box>
	);
};

export default GameCardContainer;
