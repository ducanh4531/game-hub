import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";

interface GameCardProps {
	game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
	return (
		<Card>
			<CardBody>
				<Image
					src={getCroppedImageUrl(game.background_image)}
					borderRadius="lg"
				/>
				<HStack justifyContent="space-between" mt={2} mb={2}>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize="xl">{game.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
