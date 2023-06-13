import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface GameCardContainerProps {
	children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
	return (
		<Box
			borderRadius={30}
			overflow="hidden"
			_hover={{
				position: "relative",
				transform: "scale(1.05)",
				transition: "transform .15s ease-in",
			}}
		>
			{children}
		</Box>
	);
};

export default GameCardContainer;
