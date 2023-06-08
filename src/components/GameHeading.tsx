import { Heading } from "@chakra-ui/react";
import { shallow } from "zustand/shallow";

import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
	const { genreId, platformId } = useGameQueryStore(
		(s) => ({
			genreId: s.gameQuery.genreId,
			platformId: s.gameQuery.platformId,
		}),
		shallow
	);

	// fetching and caching data
	// find platform and genre obj based on their id
	const genre = useGenre(genreId);
	const platform = usePlatform(platformId);

	// generate heading text based on their name
	const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

	return (
		<Heading as="h1" fontSize="5xl" marginY={5}>
			{heading}
		</Heading>
	);
};

export default GameHeading;
