import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
	children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
	return (
		<Box borderRadius={30} overflow="hidden" width="250px">
			{children}
		</Box>
	);
};

export default GameCardContainer;
