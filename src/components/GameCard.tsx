import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";

interface GameCardProps {
	game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
	return (
		<Card borderRadius={30} overflow="hidden">
			<CardBody>
				<Image src={game.background_image} borderRadius="lg" />
				<Heading fontSize="xl">{game.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
