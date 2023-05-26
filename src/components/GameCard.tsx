import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
	game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
	return (
		<Card borderRadius={30} overflow="hidden">
			<CardBody>
				<Image src={game.background_image} borderRadius="lg" />
				<Heading fontSize="xl">{game.name}</Heading>
				<PlatformIconList
					platforms={game.parent_platforms.map((p) => p.platform)}
				/>
			</CardBody>
		</Card>
	);
};

export default GameCard;
