import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";

import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./services/genreService";
import { Platform } from "./services/platformService";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
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
				<NavBar
					onSearch={(searchText) =>
						setGameQuery({ ...gameQuery, searchText })
					}
				/>
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
				<Box paddingLeft={3}>
					<GameHeading gameQuery={gameQuery} />
					<Flex marginBottom={3}>
						<Box marginRight={5}>
							<PlatformSelector
								onSelectPlatform={(platform) =>
									setGameQuery({ ...gameQuery, platform })
								}
								selectedPlatform={gameQuery.platform}
							/>
						</Box>
						<SortSelector
							onSelectSortOrder={(sortOrder) =>
								setGameQuery({ ...gameQuery, sortOrder })
							}
							sortOrder={gameQuery.sortOrder}
						/>
					</Flex>
				</Box>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
