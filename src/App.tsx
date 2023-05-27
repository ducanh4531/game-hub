import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
		null
	);

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
						onSelectGenre={(genre) => setSelectedGenre(genre)}
						selectedGenre={selectedGenre}
					/>
				</GridItem>
			</Show>
			<GridItem area="main">
				<PlatformSelector
					onSelectPlatform={(platform) =>
						setSelectedPlatform(platform)
					}
					selectedPlatform={selectedPlatform}
				/>
				<GameGrid
					selectedGenre={selectedGenre}
					selectedPlatform={selectedPlatform}
				/>
			</GridItem>
		</Grid>
	);
}

export default App;
