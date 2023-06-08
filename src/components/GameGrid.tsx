import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
	const {
		data,
		error,
		isLoading,
		// isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];

	const fetchedGamesCount =
		data?.pages.reduce((total, page) => total + page.results.length, 0) ||
		0;

	if (error) return <Text>{error.message}</Text>;

	return (
		<Box padding="10px">
			<InfiniteScroll
				dataLength={fetchedGamesCount} //This is important field to render the next data
				next={fetchNextPage}
				hasMore={!!hasNextPage}
				loader={<Spinner />}
			>
				<SimpleGrid
					columns={{ sm: 1, md: 2, lg: 3, "2xl": 4 }}
					spacing={6}
				>
					{isLoading &&
						skeletons.map((skeleton) => (
							<GameCardContainer key={skeleton}>
								<GameCardSkeleton />
							</GameCardContainer>
						))}

					{data?.pages.map((page, index) => (
						<React.Fragment key={index}>
							{page.results.map((game) => (
								<GameCardContainer key={game.id}>
									<GameCard game={game} />
								</GameCardContainer>
							))}
						</React.Fragment>
					))}
				</SimpleGrid>
			</InfiniteScroll>

			{/* no need a button to fetch more games, since now fetching it by scroll down */}
			{/* {hasNextPage && (
				<Button onClick={() => fetchNextPage()} marginY={5}>
					{isFetchingNextPage ? "Loading..." : "Load More"}
				</Button>
			)} */}
		</Box>
	);
};

export default GameGrid;
