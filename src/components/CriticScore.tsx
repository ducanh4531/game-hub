import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
	score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
	const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

	return (
		<Badge
			colorScheme={color} //set foreground, background color, etc, while color attribute just sets foreground color
			fontSize="14px"
			paddingX={2}
			borderRadius="4px"
		>
			{score}
		</Badge>
	);
};

export default CriticScore;
