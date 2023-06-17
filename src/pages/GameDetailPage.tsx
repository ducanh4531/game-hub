/* eslint-disable no-mixed-spaces-and-tabs */
import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
	const { slug } = useParams();
	// add '!' => tell typescript compiler that this constant slug will never be null
	const { data: game, isLoading, error } = useGame(slug!);

	if (isLoading) return <Spinner />;

	if (error) throw error;

	return (
		<>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
				{/* Both Box or GridItem components render a div element */}
				<Box>
					<Heading>{game.name}</Heading>
					<ExpandableText
						maxChars={300}
						children={game.description_raw}
					/>
					<GameAttributes game={game} />
				</Box>
				<Box>
					<GameTrailer gameId={game.id} />
					<GameScreenshots gameId={game.id} />
				</Box>
			</SimpleGrid>
		</>
	);
};

export default GameDetailPage;
