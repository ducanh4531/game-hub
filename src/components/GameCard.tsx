import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

import { Game } from "../services/gameService";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

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
						platforms={
							game.parent_platforms
								? game.parent_platforms.map((p) => p.platform)
								: [
										{
											id: 0,
											name: "UNKNOWN",
											slug: "unknown",
										},
										// eslint-disable-next-line no-mixed-spaces-and-tabs
								  ]
						}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize="xl">{game.name}</Heading>
				<Emoji rating={game.rating_top} />
			</CardBody>
		</Card>
	);
};

export default GameCard;
