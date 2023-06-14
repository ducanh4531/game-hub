/* eslint-disable no-mixed-spaces-and-tabs */
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { Game } from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
	game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
	return (
		<Link to={`/games/${game.slug}`}>
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
									? game.parent_platforms.map(
											(p) => p.platform
									  )
									: [
											{
												id: 0,
												name: "UNKNOWN",
												slug: "unknown",
											},
									  ]
							}
						/>
						<CriticScore score={game.metacritic} />
					</HStack>
					<Heading fontSize="xl">{game.name}</Heading>
					<Emoji rating={game.rating_top} />
				</CardBody>
			</Card>
		</Link>
	);
};

export default GameCard;
