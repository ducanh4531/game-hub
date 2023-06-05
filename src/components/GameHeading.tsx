import { Heading } from "@chakra-ui/react";

import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface GameHeadingProps {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
	// fetching and caching data
	const { data: platforms } = usePlatforms();
	const { data: genres } = useGenres();

	// find platform and genre obj based on their id
	const platform = platforms.results.find(
		(platform) => platform.id === gameQuery.platformId
	);
	const genre = genres.results.find(
		(genre) => genre.id === gameQuery.genreId
	);

	// generate heading text based on their name
	const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

	return (
		<Heading as="h1" fontSize="5xl" marginY={5}>
			{heading}
		</Heading>
	);
};

export default GameHeading;
