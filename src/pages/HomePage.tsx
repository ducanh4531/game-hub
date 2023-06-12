import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
	return (
		<>
			<Grid
				// templateAreas to define the layout of grid
				templateAreas={{
					base: `'main'`,
					lg: `'aside main'`, // screens are wider than 1024px
				}}
				templateColumns={{
					base: "1fr", // 1 fraction => column stretches & takes up all the available space
					lg: "200px 1fr",
				}}
			>
				<Show above="lg">
					<GridItem area="aside" paddingX={5}>
						<GenreList />
					</GridItem>
				</Show>
				<GridItem area="main">
					<Box paddingLeft={3}>
						<GameHeading />
						<Flex marginBottom={3}>
							<Box marginRight={5}>
								<PlatformSelector />
							</Box>
							<SortSelector />
						</Flex>
					</Box>
					<GameGrid />
				</GridItem>
			</Grid>
		</>
	);
};

export default HomePage;
