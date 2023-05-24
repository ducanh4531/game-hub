import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
	return (
		<Grid
			templateAreas={{
				base: `'nav' 'main'`,
				lg: `'nav nav' 'aside main'`, // screen is wider than 1024px
			}}
		>
			<GridItem bg="red" area={"nav"}>
				Nav
			</GridItem>
			<Show above="lg">
				<GridItem bg="yellow" area={"aside"}>
					Aside
				</GridItem>
			</Show>
			<GridItem bg="green" area={"main"}>
				Main
			</GridItem>
		</Grid>
	);
}

export default App;
