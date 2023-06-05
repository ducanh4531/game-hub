import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";

import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
	genreId: number | undefined; // undefined: the absence of a value | optional para
	platformId: number | undefined; // null: the intentional absence of a value | optional para
	sortOrder: string;
	searchText: string;
	page_size: number;
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
						onSelectGenre={(genreId) =>
							setGameQuery({ ...gameQuery, genreId })
						}
						selectedGenreId={gameQuery.genreId}
					/>
				</GridItem>
			</Show>
			<GridItem area="main">
				<Box paddingLeft={3}>
					<GameHeading gameQuery={gameQuery} />
					<Flex marginBottom={3}>
						<Box marginRight={5}>
							<PlatformSelector
								onSelectPlatform={(platformId) =>
									setGameQuery({ ...gameQuery, platformId })
								}
								selectedPlatformId={gameQuery.platformId}
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
