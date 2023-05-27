import { SimpleGrid, Text } from "@chakra-ui/react";

import GameCardContainer from "./GameCardContainer";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";

interface GameGridProps {
	selectedGenre: Genre | null;
	selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: GameGridProps) => {
	const {
		data: games,
		error,
		isLoading,
	} = useGames(selectedGenre, selectedPlatform);
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, "2xl": 5 }}
				padding="10px"
				spacing={4}
			>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{games.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
