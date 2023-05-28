import { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<Grid
			// templateAreas to define the layout of grid
			templateAreas={{
				base: `'nav' 'main'`,
				lg: `'nav nav' 'aside main'`, // screens are wider than 1024px
			}}
			templateColumns={{
				base: "1fr", // 1 fraction => column stretches & takes up all the available space
				lg: "200px 1fr",
			}}
		>
			<GridItem area="nav">
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<GenreList
						onSelectGenre={(genre) =>
							setGameQuery({ ...gameQuery, genre })
						}
						selectedGenre={gameQuery.genre}
					/>
				</GridItem>
			</Show>
			<GridItem area="main">
				<HStack spacing={5} paddingLeft={3} marginBottom={3}>
					<PlatformSelector
						onSelectPlatform={(platform) =>
							setGameQuery({ ...gameQuery, platform })
						}
						selectedPlatform={gameQuery.platform}
					/>
					<SortSelector
						onSelectSortOrder={(sortOrder) =>
							setGameQuery({ ...gameQuery, sortOrder })
						}
						sortOrder={gameQuery.sortOrder}
					/>
				</HStack>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
